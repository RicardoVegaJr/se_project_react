import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__container">
        <form action="" className="modal__form">
          <h1 className="modal__form-title">New garment</h1>
          <label>Name</label>
          <input placeholder="Name"></input>
          <label>Image</label>
          <input placeholder="URL"></input>
          <div className="modal__form-selectors">
            <label>Select the weather type:</label>
            <div>
              <input type="radio" id="hot"></input>
              <label for="hot">Hot</label>
            </div>
            <div>
              <input type="radio" id="warm"></input>
              <label for="Warm">Warm</label>
            </div>
            <div>
              <input type="radio" id="Cold"></input>
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
