import WeatherCard from "../WeatherCard/weatherCard";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/itemCard";
import "./main.css";

function Main({ currentTemp, weatherData, handleCardClick, clothingItems }) {

  // const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);


//   const weatherType = useMemo(() => {
//     if (weatherTemp >= 86 ) {
//       return "hot";
//     } else if (weatherTemp >= 66 && weatherTemp <=85) {
//       return "warm";
//     } else if (weatherTemp <= 65) {
//       return "cold";
//     }
//   }, [weatherTemp]);


  return (
    <main>
      {console.log(weatherData.type)}
      <WeatherCard currentTemp={currentTemp} weatherData={weatherData}  />
      <section className="cards">
        <p className="cards__text">{`Today is ${weatherData.temp[currentTemp.toLowerCase()]} º${currentTemp} / You may want to wear:`}</p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
