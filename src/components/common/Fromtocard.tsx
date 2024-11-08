import React from "react";

const Fromtocard = () => {
  return (
    <div className="h-[12%] rounded-lg bg-lightgrey flex p-3">
      <div className="text-xs">
        <span className="capitalize font-bold text-gray-300 text-sm">
          FROM :
        </span>
        <div className="flex flex-col mt-1 ">
          <div className="font-bold">saicherish90</div>
          <div className="">saicherish90@gmail.com</div>
        </div>
      </div>

      <div className="text-xs ml-14">
        <span className="capitalize font-bold text-gray-300 text-sm">TO :</span>
        <div className="flex flex-col  mt-1">
          <div className="font-bold">saicherish90</div>
          <div className="">saicherish90@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Fromtocard;
