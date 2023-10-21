import React from "react";

const OrderSummary = ({cart}) => {
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){

        if(product.quantity ===0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice/100*7;
    const grandTotal = totalPrice + shipping + tax;


  return (
    <div className="bg-[#ffe0b3] rounded-md sticky top-52">
      <h1 className="text-xl font-semibold text-center py-5">Order Summary</h1>
      <div className="about-orders p-5 ">
        <p className="my-2">Selected Items : ${quantity} </p>
        <p className="my-2" >Price : ${totalPrice} </p>
        <p className="my-2">Total Shipping Charge : ${shipping} </p>
        <p className="my-2">tax : ${tax.toFixed(2)} </p>
      </div>
      <p className="text-center font-semibold">Grand Total :${grandTotal} </p>
    </div>
  );
};

export default OrderSummary;
