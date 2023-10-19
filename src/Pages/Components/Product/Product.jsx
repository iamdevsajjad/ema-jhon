import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

const Product = (props) => {
  const { name, img, ratings, seller, price } = props?.product;
  const  handleAddToCart  = props.handleAddToCart;
  return (
    <div className="full-cart w-[300px] h-[509px] border mx-auto items-center rounded-sm relative">
      <img
        className="w-[286px] h-[286px] rounded-md mx-auto m-2"
        src={img}
        alt=""
      />
      <div className="text-container p-4">
        <h4 className="text-[#0E161A] font-semibold text-[21px]">{name}</h4>
        <h5 className="font-semibold text-[17px] mt-2">Price: ${price}</h5>
        <div className="other-texts mt-4">
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings} star</p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart()}
        className="w-[300px] h-[48px] bg-[#FFE0B3] text-[15px] absolute bottom-0 hover:bg-orange-300"
      >
        Add to Cart{" "}
        <ShoppingCartIcon className="h-6 w-6 text-black inline-block" />
      </button>
    </div>
  );
};

export default Product;
