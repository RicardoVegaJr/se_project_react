import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getWeather } from "../utils/weatherApi";
import { filterweatherData } from "../utils/weatherApi";
import {CurrentTemperatureUnitContext} from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');

  

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F')
    if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C')
      
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterweatherData(data);
        console.log(filteredData);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
console.log(currentTemperatureUnit);
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main currentTemp={currentTemperatureUnit} weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        onClose={closeActiveModal}
        isOpen={activeModal === "add-garment"}
      >
        <label className="modal__form-input-title" htmlFor="name">
          Name
        </label>
        <input
          className="modal__form-input"
          id="name"
          name="name"
          placeholder="Name"
          required
        ></input>
        <label className="modal__form-input-title" htmlFor="URL">
          Image
        </label>
        <input
          className="modal__form-input"
          id="URL"
          name="URL"
          type="text"
          placeholder="Image URL"
          required
        ></input>
        <div className="modal__form-selectors">
          <label className="modal__form-radio-title" htmlFor="type">
            Select the weather type:
          </label>
          <div>
            <input
              type="radio"
              id="hot"
              className="modal__form-radio"
              name="weatherSelector"
            ></input>
            <label htmlFor="hot">Hot</label>
          </div>
          <div>
            <input
              type="radio"
              id="warm"
              className="modal__form-radio"
              name="weatherSelector"
            ></input>
            <label htmlFor="warm">Warm</label>
          </div>
          <div>
            <input
              type="radio"
              id="cold"
              className="modal__form-radio"
              name="weatherSelector"
            ></input>
            <label htmlFor="cold">Cold</label>
          </div>
        </div>
      </ModalWithForm>
      <ItemModal
        card={selectedCard}
        onClose={closeActiveModal}
        isOpen={activeModal === "preview"}
      />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
