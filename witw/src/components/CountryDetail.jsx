import React from 'react';

const CountryDetail = ({ country, onBack }) => {
    if (!country) {
        return <div>Select a country to see details</div>;
    }

    console.log('Country details:', country);

    const currencies = country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(", ") : "No currencies available";
    const languages = country.languages ? Object.values(country.languages).join(", ") : "No languages available";
    const topLevelDomains = country.tld ? country.tld.join(', ') : "No TLDs available";
    const borders = country.borders ? country.borders.join(', ') : "No borders";

    return (
        <div className="w-full max-w-3xl">
            <button className="pt-1" onClick={onBack}>Back</button>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="flex flex-col md:flex-row">
                    {country.flags && (
                        <div className="flex-shrink-0 md:w-2/3">
                            <img
                                src={country.flags.svg}
                                alt={`Flag of ${country.name.common}`}
                                className="w-full h-40 md:h-full object-cover mb-4 md:mb-0"
                            />
                        </div>
                    )}
                    <div className="md:ml-8 flex-grow">
                        <h1 className="text-lg font-extrabold">{country.name.common}</h1>
                        <div className="mt-2">
                            <p>
                                <span className="font-semibold">Native name:</span> {country.name.official}
                            </p>
                            <p>
                                <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="font-semibold">Sub Region:</span> {country.subregion}
                            </p>
                            <p>
                                <span className="font-semibold">Capital:</span> {country.capital}
                            </p>
                            <div>
                                <p>
                                    <span className="font-semibold">Top Level Domains:</span> {topLevelDomains}
                                </p>
                                <p>
                                    <span className="font-semibold">Currencies:</span> {currencies}
                                </p>
                                <p>
                                    <span className="font-semibold">Languages:</span> {languages}
                                </p>
                            </div>
                            <div>
                                <h2 className="font-semibold">Border countries:</h2>
                                <p>{borders}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
