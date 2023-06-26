import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const configName = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/movie",
    title: "Movie",
  },
  // {
  //   to: "/",
  //   title: "Home",
  // },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#042541]  py-4 px-6 sm:px-8 lg:px-16 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="text-white text-lg font-semibold">ThemeMovie</div>
          <nav className="hidden sm:flex ml-6 space-x-4">
            {configName.map((item, idx) => (
              <Link to={item.to} key={`menu-header-${idx}`}>
                <div className="text-white hover:text-white">{item.title}</div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <button
            className="text-gray-300 hover:text-white focus:outline-none sm:hidden"
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button className="text-gray-300 hover:text-white ml-4 focus:outline-none hidden sm:block">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Icon code here */}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="sm:hidden mt-4">
          {configName.map((item, idx) => (
            <Link to={item.to} key={`menu-header-${idx}`}>
              <div className="block text-gray-300 hover:text-white">
                {item.title}
              </div>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
