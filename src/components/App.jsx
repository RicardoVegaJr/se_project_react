import { useState } from "react";
import "./App.css";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
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
    </div>
  );
}

export default App;
