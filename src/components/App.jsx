import { useState } from "react";
import "./App.css";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
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

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick}/>
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <h1 className="modal__form-input-title">Name</h1>
        <input
          className="modal__form-input"
          id="name"
          name="name"
          placeholder="Name"
          required
        ></input>
        <h1 className="modal__form-input-title">Image</h1>
        <input
          className="modal__form-input"
          id="URL"
          name="URL"
          type="text"
          placeholder="Image URL"
          required
        ></input>
        <div className="modal__form-selectors">
          <h1 className="modal__form-radio-title">Select the weather type:</h1>
          <div>
            <input type="radio" id="hot" className="modal__form-radio"></input>
            <label for="hot">Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" className="modal__form-radio"></input>
            <label for="Warm">Warm</label>
          </div>
          <div>
            <input type="radio" id="Cold" className="modal__form-radio"></input>
            <label for="cold">Cold</label>
          </div>
        </div>
      </ModalWithForm>
      <ItemModal activeModal={activeModal} card={selectedCard} onClose={closeActiveModal}/>
    </div>
  );
}

export default App;
