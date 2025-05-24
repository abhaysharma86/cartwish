import React from "react";

import "./FeaturedProducts.css";
import ProductCard from "../products/ProductCard";

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.99,
  rating: 120,
  images: [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5YNRPU4910yPsW1yobc1J7of1kMM-pww1Qf5lkpKePvG1-3GeRFJPh0U9w0FLoeojueyp4HtPxcqWkGJOudVgEv3tpEnJQM9-Ia-eemENMJTFpTFm6WeZiiB2nBRDIwl9PeRGvsjEJTI/s1600/placeholder-image.jpg",
    "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5YNRPU4910yPsW1yobc1J7of1kMM-pww1Qf5lkpKePvG1-3GeRFJPh0U9w0FLoeojueyp4HtPxcqWkGJOudVgEv3tpEnJQM9-Ia-eemENMJTFpTFm6WeZiiB2nBRDIwl9PeRGvsjEJTI/s1600/placeholder-image.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5YNRPU4910yPsW1yobc1J7of1kMM-pww1Qf5lkpKePvG1-3GeRFJPh0U9w0FLoeojueyp4HtPxcqWkGJOudVgEv3tpEnJQM9-Ia-eemENMJTFpTFm6WeZiiB2nBRDIwl9PeRGvsjEJTI/s1600/placeholder-image.jpg",
  ],
  stock: 10,
};

const FeaturedProducts = () => {
  return (
    <section className="featured_products">
      <h2>Featured Products</h2>

      <div className="align_center featured_products_list">
        <ProductCard
          id={product.id}
          image={product.images[0]}
          title={product.title}
          price={product.price}
          rating={product.rating}
          ratingCount={product.rating}
          stock={product.stock}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
