import React, { useEffect, useState } from "react";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import Product from "../Components/Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }
  


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
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="cart-container ">
        <OrderSummary 
        cart={cart}
        />
      </div>
    </div>
  );
};

export default Shop;
