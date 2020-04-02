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
    } = await axios.get("https://lhk3337.github.io/book_json/books.json");
    console.log(item);
    this.setState({ books: item, isLoading: false });
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
