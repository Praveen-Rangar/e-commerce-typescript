import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

function CartRow(props: any) {
  const [countChange, setCountChange] = useState<number>();
  const count = props.ob[props.ele.id];

  const handle = (e: any) => {};

  return (
    <div className="flex flex-row items-center max-w-full px-6 py-4 space-x-10 font-semibold text-gray-500 border border-b-gray-100 border-x-gray-100">
      <MdDeleteOutline className="text-gray-300 cursor-pointer hover:text-red-500" />
      <div className="w-20 h-16">
        <img
          className="object-cover w-full h-full rounded-md mix-blend-multiply"
          src={props.ele.thumbnail}
        />
      </div>
      <span className="pl-5 font-bold grow text-red-500">
        {props.ele.title}
      </span>
      <div className="flex items-center space-x-[87px]">
        <span className="w-12 ">${props.ele.price}.00</span>
        <input
          value={count}
          onChange={handle}
          type="number"
          min="1"
          className="w-12 p-2 border border-gray-200 rounded text-bold"
        />
        <span className="w-20">${props.ele.price * count}.00</span>{" "}
      </div>
    </div>
  );
}

export default CartRow;
