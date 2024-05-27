import React, { useContext } from 'react';
import { CountryContext } from '../context/CountryContext'; // Ensure you import CountryContext correctly
import { ThemeContext } from '../context/ThemeContext';
import CountryCard from './CountryCard';

const Result = ({ onCountryClick }) => {
    const { countryData, error } = useContext(CountryContext);
    const { theme } = useContext(ThemeContext);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    // Check if countryData is not an array or is empty
    if (!Array.isArray(countryData) || countryData.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-[0.1rem] md:px-10">
            {countryData.map((country) => (
                <div
                    key={country.cca3}
                    onClick={() => onCountryClick(country)}
                >
                    <CountryCard country={country} />
                </div>
            ))}
        </div>
    );
};

export default Result;
