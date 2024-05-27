import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import CountryCard from './CountryCard';

const Result = ({ countries, onCountryClick }) => {
    const { theme } = useContext(ThemeContext);

    if (!Array.isArray(countries) || countries.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-[0.1rem] md:px-10">
            {countries.map((country) => (
                <div
                    key={country.cca3}
                    className={`rounded cursor-pointer mx-10 pb-5 md:mx-[0.25rem]  ${
                        theme === "light"
                            ? "bg-white-(dark-mode-text)"
                            : "bg-dark-blue-(dark-mode-elements)"
                    }`}
                    onClick={() => onCountryClick(country)}
                >
                    <CountryCard country={country}/>
                </div>
            ))}
        </div>
    );
};

export default Result;
