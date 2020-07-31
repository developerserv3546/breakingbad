import axios from 'axios';

class BreakingBadService {

    instance = axios.create({
        baseURL: 'https://breakingbadapi.com/api/',
        timeout: 10000,
    });

    getAllCharacters = () => {
        return this.instance.get('characters');
    };


    getAllEpisodes = () => {
        return this.instance.get('episodes');
    };

    getAllQuotes = () => {
        return this.instance.get('quotes');
    };

    getAllDeaths = () => {
        return this.instance.get('deaths');
    };

    getCharacterById = (id) => {
        return this.instance.get(`characters/${id}`);
    };
}

export default BreakingBadService;