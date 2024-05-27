import React from 'react';

const CountryCard = ({ country }) => {
    if (!country || !country.flags) {
        return <div>Loading...</div>;
    }

    const currencies = country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(", ") : "No currencies available";
    const languages = country.languages ? Object.values(country.languages).join(", ") : "No languages available";
    const topLevelDomains = country.tld ? country.tld.join(', ') : "No TLDs available";
    const borders = country.borders ? country.borders.join(', ') : "No borders";

    return (
        <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
            <div className="h-40 flex justify-center items-center overflow-hidden">
                <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="h-full object-contain"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-extrabold ">{country.name.common}</h2>
                <div className="mt-2">
                    {/*<p>*/}
                    {/*    <span className="font-semibold">Native name:</span> {country.name.official}*/}
                    {/*</p>*/}
                    <p>
                        <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className="font-semibold">Region:</span> {country.subregion}
                    </p>
                    <p>
                        <span className="font-semibold">Capital:</span> {country.capital}
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
