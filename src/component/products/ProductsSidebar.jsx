import React, { useEffect, useState } from "react";

import "./ProductsSidebar.css";
import LinkWithIcons from "../navbar/LinkWithIcons";
import ApiClient from "../../utils/Api-Client";

const ProductsSidebar = () => {
  const [categories, setCategories] = useState([
    {
      categories: "",
      title: "",
      image: "",
      id: 0,
    },
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    ApiClient.get("/products")
      .then((res) => {
        const products = res.data.products;

        // Create a Map to store first product per unique category
        const categoryMap = new Map();

        products.forEach((product) => {
          if (!categoryMap.has(product.category)) {
            categoryMap.set(product.category, {
              categories: product.category,
              title: product.category, // or custom name if needed
              image: product.images[0], // assuming images is an array
              id: product.id,
            });
          }
        });

        // Convert map values to array and update state
        setCategories([...categoryMap.values()]);
      })
      .catch((err) => setError(err.message));
  }, []);

  

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories.map((cate) => (
          <LinkWithIcons
            key={cate.id}
            title={cate.categories}
            link={`/products?category=${cate.categories}`}
            emoji={cate.image}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
