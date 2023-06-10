import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mb-4 overflow-auto">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-white drop-shadow"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg text-black font-medium">{title}</h3>
        <svg
          className={`w-5 h-5 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {isOpen && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

export default Accordion;
