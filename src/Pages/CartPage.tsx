import React from "react";
import CartList from "./CartList";

function CartPage(props: any) {
  const proID = Object.keys(props.ob);
  console.log("proID", proID);

  return (
    <>
      <div className="w-full h-full p-10 py-12 gray-200">
        <div className="w-full h-full px-20 py-20 pt-20 bg-white max-w-[px]">
          <CartList proID={proID} ob={props.ob}  />

          <div className="flex justify-end mt-20">
            <div className=" w-[50%] border border-gray-100">
              <div className="flex items-center h-12 px-5 bg-gray-200 border border-gray-100">
                Cart total
              </div>
              <div className="flex items-center h-12 px-10 border border-gray-00 space-x-28">
                <p>Subtotal</p>
                <p>$166.00</p>
              </div>
              <div className="flex items-center h-12 px-10 border border-gray-100 space-x-36">
                <p>total</p>
                <p>$166.00</p>
              </div>
              <div className="px-5 py-4">
                <button className="w-full text-white rounded h-[50px] bg-red-500 hover:bg-red-700">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
