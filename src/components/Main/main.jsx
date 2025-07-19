import WeatherCard from "../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/itemCard";
import "./main.css";
import { useContext } from "react"; // Import useContext
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({ currentTemp, weatherData, handleCardClick, clothingItems, onCardLike}) {

const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <main>
      {console.log(weatherData.type)}
      <WeatherCard currentTemp={currentTemp} weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">{`Today is ${
          weatherData.temp[currentTemp.toLowerCase()]
        } º${currentTemp} / You may want to wear:`}</p>
        {isLoggedIn && (
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              console.log( item._id, "Item Name:", item.name);
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  currentUser={currentUser}
                />
              );
            })}
        </ul>
        )}
      </section>
    </main>
  );
}

export default Main;
