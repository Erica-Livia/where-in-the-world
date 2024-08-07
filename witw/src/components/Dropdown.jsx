import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const { theme } = useContext(ThemeContext);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className="items-center">
            <button
                type="button"
                className={`${
                    theme === "light"
                        ? "bg-[white] text-very-dark-blue-(light-mode-text) shadow"
                        : "bg-darkBlue text-white-(dark-mode-text)"
                } my-1 text-sm mr-30 inline-flex justify-center rounded-md pl-5 pr-10 py-3 font-medium hover:bg-gray-50 focus:outline-none md:my-3`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption || "Filter by Region"}{" "}
                <svg
                    className="-mr-5 ml-10 pl-2 h-full w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`${
                        theme === "light"
                            ? "bg-lightGray text-very-dark-blue-(light-mode-text)"
                            : "bg-darkBlue text-white-(dark-mode-text)"
                    } origin-top-right absolute w-40 rounded-md pl-2 pr-[12rem]`}
                >
                    <div className="py-1 text-sm">
                        {options.map((option) => (
                            <button
                                key={option}
                                className="block px-4 py-1 w-full text-left"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
