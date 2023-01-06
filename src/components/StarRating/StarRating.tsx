import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { DivRating } from "./Style";

export const StarRating = () => {
  const [rating, setRating] = useState(null || Number);
  const [hover, setHover] = useState(null || Number);

  console.log(rating);

  return (
    <DivRating ratingColor={rating}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={20}
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
            />
          </label>
        );
      })}
      <p>
        Avaliação: <span>{rating}</span>
      </p>
    </DivRating>
  );
};