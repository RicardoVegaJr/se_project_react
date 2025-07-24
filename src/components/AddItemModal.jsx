import { useState } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl: link, weather });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={handleNameChange}
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
        value={link}
        onChange={handleUrlChange}
      ></input>
      <div className="modal__form-selectors">
        <label className="modal__form-radio-title" htmlFor="type">
          Select the weather type:
        </label>
        <div>
          <input
            onChange={handleWeatherChange}
            type="radio"
            id="hot"
            value="hot"
            checked={weather === "hot"}
            className="modal__form-radio"
            name="weatherSelector"
          ></input>
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            onChange={handleWeatherChange}
            type="radio"
            id="warm"
            value="warm"
            checked={weather === "warm"}
            className="modal__form-radio"
            name="weatherSelector"
          ></input>
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            onChange={handleWeatherChange}
            type="radio"
            id="cold"
            value="cold"
            checked={weather === "cold"}
            className="modal__form-radio"
            name="weatherSelector"
          ></input>
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
