import "./ModalWithForm.css";
import modalClose from "../../assets/modalClose.svg";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__container">
        <img
          src={modalClose}
          class="modal__close"
          id="modalFormClose"
          type="button"
        />
        <form action="" className="modal__form">
          <h1 className="modal__form-title">New garment</h1>
          <h1 className="modal__form-input-title">Name</h1>
          <input
            className="modal__form-input"
            id="name"
            name="name"
            placeholder="Name"
            minlength="2"
            maxlength="20"
            required
          ></input>
          <h1 className="modal__form-input-title">Image</h1>
          <input
            className="modal__form-input"
            id="URL"
            name="URL"
            type="text"
            placeholder="Image URL"
            minlength="6"
            maxlength="40"
            required
          ></input>
          <div className="modal__form-selectors">
            <h1 className="modal__form-radio-title">
              Select the weather type:
            </h1>
            <div>
              <input
                type="radio"
                id="hot"
                className="modal__form-radio"
              ></input>
              <label for="hot">Hot</label>
            </div>
            <div>
              <input
                type="radio"
                id="warm"
                className="modal__form-radio"
              ></input>
              <label for="Warm">Warm</label>
            </div>
            <div>
              <input
                type="radio"
                id="Cold"
                className="modal__form-radio"
              ></input>
              <label for="cold">Cold</label>
            </div>
          </div>
          <button type="submit" className="modal__form_submit-button">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
