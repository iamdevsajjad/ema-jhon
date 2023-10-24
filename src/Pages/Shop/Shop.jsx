import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../Utilities/FakeDb";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import Product from "../Components/Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    () => {
      const storedCart = getShoppingCart();
      const savedCart = []
      for(const id in storedCart){
        const addedProduct = products.find(product => product.id ===id);
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    },[products];
  });

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="full-component ">
      <div className="products-container ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {products?.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="cart-container md:static hidden md:block">
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
