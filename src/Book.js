import React from "react";
import PropTypes from "prop-types";

function Book({
  title,
  rank,
  priceStandard,
  priceSales,
  description,
  coverImg,
  url
}) {
  return (
    <div className="book">
      <img src={coverImg} alt={title} title={title}></img>
      <div className="book__data">
        <h3 className="book__rank">Rank # {rank}</h3>
        <h3 className="book__title">제목 : {title}</h3>
        <h4 className="book__priceStandard">정가 : {priceStandard} 원</h4>
        <h4 className="book__priceSales">할인가 : {priceSales} 원</h4>
        <p className="book_description">{description.slice(0, 140)}...</p>
        <a href={url}>
          <div className="book_url">사러가기</div>
        </a>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  priceStandard: PropTypes.number.isRequired,
  priceSales: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Book;
