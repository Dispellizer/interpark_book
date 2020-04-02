import React from "react";
import axios from "axios";
import Book from "./Book";

class App extends React.Component {
  state = {
    books: [],
    isLoading: true
  };

  getBooks = async () => {
    const {
      data: { item }
    } = await axios.get(
      "http://book.interpark.com/api/bestSeller.api?key=A357E38C2115CC09DE15F987B12EBC11EF74E36B1011C46D2C53A56D7A710023&categoryId=100&output=json"
    );
    console.log(item);
    setTimeout(() => {
      this.setState({ books: item, isLoading: false });
    }, 33);
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const { books, isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="books">
            {books.map(book => (
              <Book
                key={book.itemId}
                title={book.title}
                rank={book.rank}
                priceStandard={book.priceStandard}
                priceSales={book.priceSales}
                description={book.description}
                coverImg={book.coverLargeUrl}
                url={book.link}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
