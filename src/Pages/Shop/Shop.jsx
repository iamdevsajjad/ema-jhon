import React, { useEffect, useState } from "react";
import Product from "../Components/Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="full-component">
      <div className="products-container grid grid-cols-1">
        <div className="grid grid-cols-3 gap-4">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="cart-container ">
        order summery.
      </div>
    </div>
  );
};

export default Shop;
