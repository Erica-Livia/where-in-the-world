import React, { useContext, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Dropdown from "./Dropdown";

const SearchBar = ({ onSearch, countries, setFilteredCountries }) => {
    const { theme } = useContext(ThemeContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        // Extract unique regions from countries data
        const uniqueRegions = [...new Set(countries.map(country => country.region))].filter(region => region);
        setRegions(uniqueRegions);
    }, [countries]);

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const handleFilterByRegion = (region) => {
        if (region === "All") {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter(country =>
                country.region.toLowerCase() === region.toLowerCase()
            );
            setFilteredCountries(filtered);
        }
    };

    return (
        <div className="w-[90%] pr-1 md:flex md:justify-between mt-20 items-center">
            <div>
                <form
                    className={`my-[2rem] rounded-md md:my-[2.5rem] ${
                        theme === "light" ? "bg-[white]" : "bg-darkBlue"
                    } w-[85%]`}
                >
                    <div className={`${
                        theme === "light"
                            ? "flex items-center gap-2 p-1 text-sm left-0 border-darkWhite border rounded-l shadow"
                            : "flex items-center gap-2 p-1 text-sm left-0 rounded-l"
                    }`}>
                        <CiSearch
                            className={`${
                                theme === "light"
                                    ? "text-dark-gray-(light-mode-input)"
                                    : "text-white-(dark-mode-text)"
                            } h-full w-7`}
                        />
                        <input
                            className={`${
                                theme === "light"
                                    ? "bg-white text-very-dark-blue-(light-mode-text)"
                                    : "bg-darkBlue text-white-(dark-mode-text)"
                            } w-[30rem] h-[2.5rem] focus:outline-none`}
                            type="search"
                            value={searchQuery}
                            onChange={handleInputChange}
                            placeholder="Search for a country..."
                        />
                    </div>
                </form>
            </div>
            <Dropdown options={["All", ...regions]} onSelect={handleFilterByRegion} />
        </div>
    );
};

export default SearchBar;
