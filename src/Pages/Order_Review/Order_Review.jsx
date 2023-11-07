import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import OrderSummary from "../Components/OrderSummary/OrderSummary";

const Order_Review = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="fullContainer flex justify-between">
      <div className="items">order review</div>
      <div className="cart">
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
};

export default Order_Review;
