import sunny from "../../assets/sunny.svg";
import "./weatherCard.css";
function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75° F</p>
      <img src={sunny} alt="sunny" className="weather-card__image"></img>
    </section>
  );
}

export default WeatherCard;
