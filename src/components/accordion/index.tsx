import React, { Fragment, useEffect, useState } from "react";

interface AccordionProps {
  title: string;
  content: any;
  status?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    status === true && setIsOpen(true);
  }, [status]);

  return (
    <Fragment>
      <div className="min-w-[260px] w-[260px] flex flex-wrap justify-between overflow-hidden bg-white drop-shadow mt-30 rounded-lg">
        <div
          className="w-full flex justify-between items-center flex-nowrap px-4 border border-solid border-[#e3e3e3] py-[14px] cursor-pointer"
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
        {isOpen && content}
      </div>
    </Fragment>
  );
};

export default Accordion;
