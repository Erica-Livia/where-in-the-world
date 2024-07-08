import React, { useEffect, useState, useContext } from 'react';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { ThemeContext } from './context/ThemeContext';
import { getAllCountries } from './context/countryService';
import Result from "./components/Result.jsx";
import { CountryProvider } from "./context/CountryContext.jsx";

function App() {
    const { theme } = useContext(ThemeContext);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAllCountries();
                setCountries(data);
                setFilteredCountries(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleBack = () => {
        setSelectedCountry(null);
    };

    const handleSearch = (query) => {
        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return (
        <div>
            Error loading countries data: {error.message}
            <br />
            Please check the console for more details.
        </div>
    );

    return (
        <>
            <div
                className={`${
                    theme === "light"
                        ? "bg-white text-very-dark-blue-(light-mode-text)"
                        : "bg-dark-blue-(dark-mode-elements) text-white-(dark-mode-text)"
                } flex flex-col justify-center items-center p-[1rem] min-h-screen`}>
                <Header />
                {!selectedCountry && (
                    <SearchBar
                        onSearch={handleSearch}
                        countries={countries}
                        setFilteredCountries={setFilteredCountries}
                    />
                )}
                {!selectedCountry ? (
                    <Result countries={filteredCountries} onCountryClick={setSelectedCountry} />
                ) : (
                    <CountryDetail country={selectedCountry} onBack={handleBack} />
                )}
            </div>
        </>
    );
}

export default App;
