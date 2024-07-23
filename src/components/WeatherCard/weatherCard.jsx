import sunny from "../../assets/sunny.svg";
import "./weatherCard.css";
function WeatherCard({weatherData}) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.f}° F</p>
      <img src={sunny} alt="sunny" className="weather-card__image"></img>
    </section>
  );
}

export default WeatherCard;
