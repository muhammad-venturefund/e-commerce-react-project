import React from "react";
import { MdStar, MdStarOutline, MdStarHalf } from "react-icons/md";
const StarRating = ({ stars, reviews }) => {
  // console.log(stars)

  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index} className="rating-star">
        {stars >= index + 1 ? (
          <MdStar />
        ) : stars >= number ? (
          <MdStarHalf />
        ) : (
          <MdStarOutline />
        )}
      </span>
    );
  });
  return (
    <>
      {rating}{" "}
      <span className="product-review ms-3">({reviews} Customer reviews)</span>
    </>
  );
};

export default StarRating;
