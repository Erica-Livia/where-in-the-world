import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { ThemeContext } from './context/ThemeContext';
import { getAllCountries } from './context/countryService';
import Result from './components/Result';
import { CountryContext } from './context/CountryContext';

function App() {
    const { theme } = useContext(ThemeContext);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getAllCountries();
                setCountries(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return (
        <div>
            Error loading countries data: {error.message}
            <br />
            Please check the console for more details.
        </div>
    );

    return (
        <CountryContext.Provider value={{ countryData: countries, error }}>
            <div className={`${theme === 'light' ? 'bg-light-bg' : 'bg-d-dark'} flex flex-col justify-center items-center p-[1rem]`}>
                <Header />
                <SearchBar />
                <Result onCountryClick={setSelectedCountry} />
                {selectedCountry && <CountryDetail country={selectedCountry} />}
            </div>
        </CountryContext.Provider>
    );
}

export default App;
