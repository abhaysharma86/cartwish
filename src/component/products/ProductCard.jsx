import React from "react";

import "./ProductCard.css";
import star from "../../assets/star_1.png";
import basket from "../../assets/bucket_.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  title,
  price,
  rating,
  ratingCount,
  stock,
}) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/product/${id}`}>
          {" "}
          <img src={image} alt="product image" />
        </NavLink>
      </div>
      <div className="product_details">
        <h1 className="product_price">${price}</h1>
        <p className="product_title truncate-chars">{title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} alt="star" />
              {rating}
            </p>
            <p className="product_review_count">{ratingCount}</p>
          </div>
          {stock > 0 && (
            <button className="add_to_cart">
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
