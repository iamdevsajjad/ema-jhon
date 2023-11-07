import React from "react";

const OrderSummary = ({ cart }) => {
  let quantity = 0;
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    quantity = quantity + product?.quantity;
    total = total + product?.price * product.quantity;
    shipping = shipping + product?.shipping * product.quantity;
  }


  

  const tax = ((total * 10) / 100)?.toFixed(2);
  const grandTotal = parseFloat(tax) + total + shipping;

  return (
    <div className="bg-[#ffe0b3] rounded-md sticky top-52">
      <h1 className="text-xl font-semibold text-center py-5">Order Summary</h1>
      <div className="about-orders p-5 ">
        <p className="my-2">Selected Items : ${quantity} </p>
        <p className="my-2">Price : ${total} </p>
        <p className="my-2">Total Shipping Charge : ${shipping} </p>
        <p className="my-2">tax : ${tax} </p>
      </div>
      <p className="text-center font-semibold">Grand Total :${grandTotal} </p>
    </div>
  );
};

export default OrderSummary;
