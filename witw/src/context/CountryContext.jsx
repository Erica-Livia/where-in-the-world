import React, { createContext, useState, useEffect } from 'react';
import { getAllCountries } from './countryService';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countryData, setCountryData] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAllCountries();
                console.log('Fetched Countries Data:', data);  // Log fetched data
                setCountryData(data);
                setFilteredCountries(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);


    const searchCountry = (query) => {
        if (!query) {
            setFilteredCountries(countryData);
        } else {
            const filtered = countryData.filter(country =>
                country.name.common.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    const filterByRegion = (region) => {
        if (region === 'All') {
            setFilteredCountries(countryData);
        } else {
            const filtered = countryData.filter(country =>
                country.region.toLowerCase() === region.toLowerCase()
            );
            setFilteredCountries(filtered);
        }
    };

    return (
        <CountryContext.Provider value={{ countryData, filteredCountries, searchCountry, filterByRegion, loading, error }}>
            {children}
        </CountryContext.Provider>
    );
};
