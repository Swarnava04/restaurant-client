// Reviews.js
import React from "react";
import "./Reviews.css";
const Reviews = ({ reviews }) => (
  <section className="reviews-container">
    <h2 className="center_alignment">Reviews</h2>
    <ul className="review">
      {reviews.map((review, index) => (
        <li key={index} className="review-item">
          <p>
            <strong className="customer-name">{review.customer_name}</strong> -{" "}
            {review.rating} stars
          </p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Reviews;
