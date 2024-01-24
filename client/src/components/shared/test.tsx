import React, { useState } from "react";

const options = [
  { name: "Option 1", subOptions: ["Suboption 1", "Suboption 2"] },
  { name: "Option 2", subOptions: ["Suboption 1", "Suboption 2"] },
  // Add more options here
];

const Test = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // collapse if the same option is clicked
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {options.map((option, index: number) => (
        <div key={index}>
          <button
            onClick={() => handleClick(index)}
            className="w-full text-left"
          >
            {option.name}
          </button>
          {openIndex === index && (
            <div className="ml-4 transition-all duration-500 ease-in-out text-left">
              {option.subOptions.map((subOption, i) => (
                <div key={i}>{subOption}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Test;
