import React, {useContext} from 'react';
import {ThemeContext} from "../context/ThemeContext.jsx";

const CountryCard = ({ country }) => {
    const {theme} = useContext(ThemeContext);
    if (!country || !country.flags) {
        return <div>Loading...</div>;
    }

    const currencies = country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(", ") : "No currencies available";
    const languages = country.languages ? Object.values(country.languages).join(", ") : "No languages available";
    const topLevelDomains = country.tld ? country.tld.join(', ') : "No TLDs available";
    const borders = country.borders ? country.borders.join(', ') : "No borders";

    return (

        <div className="flex flex-col w-full bg-white rounded-xl overflow-hidden">
            <div className=" flex justify-center items-center overflow-hidden">
                <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="h-full object-contain"
                />
            </div>
            <div className={`p-4 ${
                theme === "light"
                    ? "text-very-dark-blue-(light-mode-text)"
                    : "text-white-(dark-mode-text)"
            }`}>
                <h2 className="text-lg font-extrabold ">{country.name.common}</h2>
                <div className="mt-2">
                    {/*<p>*/}
                    {/*    <span className="font-semibold">Native name:</span> {country.name.official}*/}
                    {/*</p>*/}
                    <p>
                        <span className="">Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="">Region:</span> {country.subregion}
                    </p>
                    <p>
                        <span className="">Capital:</span> {country.capital}
                    </p>
                    {/*<p>*/}
                    {/*    <span className="font-semibold">Top Level Domains:</span> {topLevelDomains}*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    <span className="font-semibold">Currencies:</span> {currencies}*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    <span className="font-semibold">Languages:</span> {languages}*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    <span className="font-semibold">Border countries:</span> {borders}*/}
                    {/*</p>*/}
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
