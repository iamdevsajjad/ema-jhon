import React from "react";

const Product = (props) => {

  const {name, img, ratings, seller, price} = props.product
  return (
    <div className="full-cart w-[300px] h-[509px] border mx-auto items-center p-1 rounded-sm relative">
      <img className="w-[286px] h-[286px] rounded-md mx-auto" src={img} alt="" />
      <div className="text-container p-3">
        <h4 className="text-[#0E161A] font-semibold text-[21px]">{name}</h4>
        <h5 className="font-semibold text-[17px] mt-2">Price: ${price}</h5>
        <div className="other-texts mt-4">
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings}</p>
        </div>
      </div>
      <button className="w-[300px] h-[48px] bg-[#FFE0B3] text-[15px] absolute bottom-0 ">Add to Cart</button>
    </div>
  );
};

export default Product;
