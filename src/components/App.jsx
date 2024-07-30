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

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  

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

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterweatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
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
    </div>
  );
}

export default App;
