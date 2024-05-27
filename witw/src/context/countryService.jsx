import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

export const getAllCountries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        console.error("Error fetching countries data: ", error);
        throw error;
    }
};
