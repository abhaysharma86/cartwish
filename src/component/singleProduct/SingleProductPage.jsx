import React, { useState } from "react";

import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import userData from "../../hook/userData";
import Loader from "./../common/Loader";
import { date } from "zod";

// const product = {
//   id: 1,
//   title: "Product Title",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
//   price: 9.99,
//   images: [
//     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5YNRPU4910yPsW1yobc1J7of1kMM-pww1Qf5lkpKePvG1-3GeRFJPh0U9w0FLoeojueyp4HtPxcqWkGJOudVgEv3tpEnJQM9-Ia-eemENMJTFpTFm6WeZiiB2nBRDIwl9PeRGvsjEJTI/s1600/placeholder-image.jpg",
//     "https://cdn.create.web.com/images/industries/common/images/placeholder-product-image-4x3.jpg",
//     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5YNRPU4910yPsW1yobc1J7of1kMM-pww1Qf5lkpKePvG1-3GeRFJPh0U9w0FLoeojueyp4HtPxcqWkGJOudVgEv3tpEnJQM9-Ia-eemENMJTFpTFm6WeZiiB2nBRDIwl9PeRGvsjEJTI/s1600/placeholder-image.jpg",
//     "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5YNRPU4910yPsW1yobc1J7of1kMM-pww1Qf5lkpKePvG1-3GeRFJPh0U9w0FLoeojueyp4HtPxcqWkGJOudVgEv3tpEnJQM9-Ia-eemENMJTFpTFm6WeZiiB2nBRDIwl9PeRGvsjEJTI/s1600/placeholder-image.jpg",
//   ],
//   stock: 10,
// };

const SingleProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { data: product, error, isLoading } = userData(`/products/${id}`);

  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error}</em>}
      {isLoading && <Loader />}
      {product && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  src={image}
                  alt={product.title}
                  className={selectedImage == index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="single_product_display"
            />
          </div>

          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">${product.price.toFixed(2)}</p>
            <h2 className="quantity_title">Quantity :</h2>
            <div className="align_center quantity_input">
              <QuantityInput
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
            </div>
            <button className="search_button add_cart">Add to Cart</button>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProductPage;
