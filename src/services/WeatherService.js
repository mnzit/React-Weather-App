import axios from 'axios';
import {CONFIG} from "../config/config";
import {API_KEY, CITY_NAME} from "../constants/urlconstant";

export class WeatherService {

    static getCurrentWeatherData(cityName) {
        let url = CONFIG.WEATHER_API_URL;
        url = url
            .replace(API_KEY, CONFIG.WEATHER_API_KEY)
            .replace(CITY_NAME, cityName)
        return axios.get(url);
    }
}
