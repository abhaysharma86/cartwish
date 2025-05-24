import React, { useEffect, useState } from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import userData from "../../hook/userData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
import { date } from "zod";
import Pagination from "../common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const [page, setPage] = useState(1);
  const category = search.get("category");

  const { data, error, isLoading } = userData(
    "/products",
    {
      params: {
        category,
        perPage: 10,
        page,
      },
    },
    [category, page]
  );

  useEffect(() => {
    setPage(1);
  }, [category]);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    console.log(currentParams);

    setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 1 && !isLoading && data) {
        console.log("Reached to buttom!");
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, isLoading]);

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeleton.map((s) => <ProductCardSkeleton key={s} />)}
        {data?.products &&
          data.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              price={product.price}
              rating={product.rating}
              ratingCount={product.stock}
              stock={product.stock}
            />
          ))}
      </div>
      {/* {data && (
        <Pagination
          totalPosts={data.total}
          postPerPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />
      )} */}
    </section>
  );
};

export default ProductsList;
