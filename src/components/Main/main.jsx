import WeatherCard from "../WeatherCard/weatherCard";
import ItemCard from "../ItemCard/itemCard";
import "./main.css";

function Main({
  currentTemp,
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
}) {
  

  return (
    <main>
      {console.log(weatherData.type)}
      <WeatherCard currentTemp={currentTemp} weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">{`Today is ${
          weatherData.temp[currentTemp.toLowerCase()]
        } º${currentTemp} / You may want to wear:`}</p>
          <ul className="cards__list">
            {clothingItems
              .filter((item) => {
                console.log(item._id, "Item Name:", item.name);
                return item.weather === weatherData.type;
              })
              .map((item) => {
                return (
                  <ItemCard
                    key={item._id}
                    item={item}
                    onCardClick={handleCardClick}
                    onCardLike={onCardLike}
                  />
                );
              })}
          </ul>
      </section>
    </main>
  );
}

export default Main;
