const baseUrl = "https://api.weatherbit.io/v2.0";
const apiKey = "413c66a829bf45e2b12882677f1bb2a3";

const getCurrentWeather = async (lat, long) => {
    const url = `${baseUrl}/current?lat=${lat}&lon=${long}&key=${apiKey}`;
    const response = await fetch(url, {
        method: "GET",
    });
    return await response.json();
}

const getWeatherForecast = async (location) => {
    const url = `${baseUrl}/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&key=${apiKey}&days=5`;
    const response = await fetch(url, {
        method: "GET",
    });
    return await response.json();
}
export default {getWeatherForecast};