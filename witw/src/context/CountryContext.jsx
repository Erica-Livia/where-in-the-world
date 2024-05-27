import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllCountries } from './countryService';
import countryDetail from "../components/CountryDetail.jsx";

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

    const searchCountry = async (query) => {
        try {
            if (!query) {
                setFilteredCountries(countryData);
            } else {
                const filtered = countryData.filter(country =>
                    country.name.common.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredCountries(filtered);
            }
        } catch (error) {
            console.error('Error searching country:', error);
        }
    };

    const filterByRegion = async (region) => {
        try {
            if (region === "All") {
                setFilteredCountries(countryData);
            } else {
                const filtered = countryData.filter(country =>
                    country.region.toLowerCase() === region.toLowerCase()
                );
                setFilteredCountries(filtered);
            }
        } catch (error) {
            console.error('Error filtering countries by region:', error);
        }
    };

    return (
        <CountryContext.Provider value={{ countryData, filteredCountries, searchCountry, filterByRegion, loading, error }}>
            {children}
        </CountryContext.Provider>
    );
};
