import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
const Filter = () => {
  return (
    <div className="text-left">
      <ul className="max-w-md space-y-4 text-gray-500 list-none list-inside dark:text-gray-400">
        <li className="flex flex-row justify-between">
          Laptops{" "}
          <span>
            <BiSolidDownArrow />
          </span>
        </li>
        <li className="flex flex-row justify-between">
          Destop PCs{" "}
          <span>
            <BiSolidDownArrow />
          </span>
        </li>
        <li className="flex flex-row justify-between">
          Networking Devices{" "}
          <span>
            <BiSolidDownArrow />
          </span>
        </li>
        <li className="flex flex-row justify-between">
          Printers & Scanners{" "}
          <span>
            <BiSolidDownArrow />
          </span>
        </li>
        <li className="flex flex-row justify-between">PC Parts</li>
        <li className="flex flex-row justify-between">
          All Other Products{" "}
          <span>
            <BiSolidDownArrow />
          </span>
        </li>
        <li className="flex flex-row justify-between">
          Repairs{" "}
          <span>
            <BiSolidDownArrow />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
