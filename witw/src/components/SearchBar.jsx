import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { CountryContext } from "../context/CountryContext";
import Dropdown from "./Dropdown";
import {CountryProvider} from "../context/CountryContext";

const options = ["Africa", "America", "Asia", "Europe", "Oceania", "All"];

const SearchBar = () => {
    const { theme } = useContext(ThemeContext);
    const { searchCountry, filterByRegion } = useContext(CountryContext);

    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchInput) {
            searchCountry(searchInput);
            console.log("Searched Country:", searchInput);
        } else {
            alert("Enter a country name");
        }
    };

    const handleSelect = (option) => {
        filterByRegion(option);
        console.log("Filter by Region:", option);
    };

    return (
        <div className="w-[90%] pr-1 md:flex md:justify-between mt-20 items-center">
            <div>
                <form
                    onSubmit={handleSearchSubmit}
                    className={`my-[2rem] rounded-md md:my-[2.5rem] ${
                        theme === "light" ? "bg-[white]" : "bg-dark-blue-(dark-mode-elements)"
                    } w-[85%]`}
                >
                    <div className="flex items-center gap-2 p-1 text-sm left-0 border-2 rounded-xl">
                        <CiSearch
                            className={`${
                                theme === "light"
                                    ? "text-very-dark-blue-(light-mode-text)"
                                    : "text-white-(dark-mode-text)"
                            } h-full w-7`}
                        />
                        <input
                            className={`${
                                theme === "light"
                                    ? "bg-white text-very-dark-blue-(light-mode-text)"
                                    : "bg-dark-blue-(dark-mode-elements) text-white-(dark-mode-text)"
                            } w-[30rem] h-[2.5rem] focus:outline-none`}
                            type="search"
                            value={searchInput}
                            onChange={handleInputChange}
                            placeholder="Search for a country..."
                        />
                        <div className="flex items-center gap-1">
                            {/* <span className="text-sm text-[red] ">err</span> */}
                            <button
                                onClick={handleSearchSubmit}
                                className={`${
                                    theme === "light"
                                        ? "bg-white text-very-dark-blue-(light-mode-text)"
                                        : "bg-dark-blue-(dark-mode-elements) text-white-(dark-mode-text)"
                                } px-4 py-2`}>Search
                            </button>
                        </div>

                    </div>

                </form>
            </div>
                <Dropdown  options={options} onSelect={handleSelect}/>
        </div>
    );
};

export default SearchBar;
