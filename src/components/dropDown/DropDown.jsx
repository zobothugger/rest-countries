import React, { useState } from "react";
import './DropDown.css'

const DropDown = ({ settoggleDropDown, setOptionDisplay, handleRegion }) => {
  const [options, setOptions] = useState([
    "Africa",
    "Amercia",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const handleClick = (choosenOption) => {
    setOptionDisplay(choosenOption);
    settoggleDropDown(false);
    handleRegion(choosenOption === "America" ? "Americas" : choosenOption);
  };

  return (
    <div className="bg-element rounded-2 position-absolute w-100 top-100 start-0 mt-3 py-3">
      {options.map((option) => {
        return (
          <p
            onClick={() => {
              handleClick(option);
            }}
            key={option}
            className="option px-3 py-2 m-0"
          >
            {option}
          </p>
        );
      })}
    </div>
  );
};

export default DropDown;
