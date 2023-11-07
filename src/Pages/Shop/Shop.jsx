import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../Utilities/FakeDb";
import useCart from "../../hooks/useCart";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import Product from "../Components/Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (selectedProduct) => {
    const exists = cart.find((product) => product.id === selectedProduct.id);
    let newCart = [];
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  useEffect(() => {
    () => {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id in storedCart) {
        const addedProduct = products.find((product) => product.id === id);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    },
      [products];
  });

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="full-component ">
      <div className="md:products-container ">
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
