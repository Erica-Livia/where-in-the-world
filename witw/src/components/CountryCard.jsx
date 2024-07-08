import React, {useContext} from 'react';
import {ThemeContext} from "../context/ThemeContext.jsx";

const CountryCard = ({ country }) => {
    const {theme} = useContext(ThemeContext);
    if (!country || !country.flags) {
        return <div>Loading...</div>;
    }

    return (

        <div
        className={`${ 
            theme === "light" 
            ? "bg-[white] flex flex-col w-full h-full bg-white-900 rounded-md overflow-hidden shadow" 
            : "bg-darkBlue flex flex-col w-full h-full bg-white-900 rounded-md overflow-hidden shadow"}`}>
            <div className="">
                <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="h-full w-full"
                />
            </div>
            <div className={`p-4 ${
                theme === "light"
                    ? "text-very-dark-blue-(light-mode-text)"
                    : "text-white-(dark-mode-text)"
            }`}>
                <h2 className="text-lg font-extrabold ">{country.name.common}</h2>
                <div className="mt-2">
                    <p>
                        <span className="">Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="">Region:</span> {country.subregion}
                    </p>
                    <p>
                        <span className="">Capital:</span> {country.capital}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CountryCard;
