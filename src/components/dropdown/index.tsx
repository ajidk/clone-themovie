import React, { useState } from "react";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {selectedOption || "Pilih"}
      </button>
      <div className="absolute hidden bg-gray-200 text-gray-700 py-2 mt-1 w-40 rounded-md shadow-lg">
        {options.map((option) => (
          <a
            key={option}
            href="#"
            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
