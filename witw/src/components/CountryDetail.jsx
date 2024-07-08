import React, {useContext} from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import themeContext, {ThemeContext} from "../context/ThemeContext.jsx";


const CountryDetail = ({ country, onBack }) => {
    if (!country) {
        return <div>Select a country to see details</div>;
    }

    console.log('Country details:', country);

    const { theme } = useContext(ThemeContext);
    const currencies = country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(", ") : "No currencies available";
    const languages = country.languages ? Object.values(country.languages).join(", ") : "No languages available";
    const topLevelDomains = country.tld ? country.tld.join(', ') : "No TLDs available";
    const borders = country.borders ? country.borders.join(', ') : "No borders";

    return (
        <div className="w-full grid mx-0 md:mx-auto">
            <button
                    className={`${
                        theme === "light"
                        ? "my-20 flex items-center space-x-2 bg-[white] w-fit px-8 py-2 rounded shadow-lg"
                            : "my-20 flex items-center space-x-2 bg-darkBlue w-fit px-8 py-2 rounded"
                    }`}
                    onClick={onBack}>
                <IoIosArrowRoundBack/> Back
            </button>
            <div className="flex justify-center items-center w-full h-full px-0 md:px-20">
                <div className="flex flex-col md:flex-row">
                    {country.flags && (
                        <div className="flex-shrink-0 md:w-1/3">
                            <img
                                src={country.flags.svg}
                                alt={`Flag of ${country.name.common}`}
                                className="h-full w-full md:h-full mb-4 md:mb-0 rounded-md"
                            />
                        </div>
                    )}
                    <div className="md:ml-20 flex-grow">
                        <div><h1 className="text-3xl font-extrabold pb-8">{country.name.common}</h1>
                        </div>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 pb-8">
                        <div>
                                <p>
                                    <span className="font-extraBold">Native name:</span> {country.name.official}
                                </p>
                                <p>
                                    <span
                                        className="font-extraBold">Population:</span> {country.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="font-extraBold">Sub Region:</span> {country.subregion}
                                </p>
                                <p>
                                    <span className="font-extraBold">Continent:</span> {country.continents}
                                </p>
                                <p>
                                    <span className="font-extraBold">Capital:</span> {country.capital}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-extraBold">Top Level Domains:</span> {topLevelDomains}
                                </p>
                                <p>
                                    <span className="font-extraBold">Currencies:</span> {currencies}
                                </p>
                                <p>
                                    <span className="font-extraBold">Languages:</span> {languages}
                                </p>

                            </div>
                        </div>
                        <div><h2 className="font-extraBold">Border countries:</h2>
                            <p>{borders}</p></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
