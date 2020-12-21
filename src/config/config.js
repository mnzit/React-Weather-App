import {API_KEY, CITY_NAME} from "../constants/urlconstant";

export const CONFIG = {
    WEATHER_API_KEY: "f1a4bd28fbdad034efc250ed42e2e286",
    WEATHER_API_URL: `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
}
