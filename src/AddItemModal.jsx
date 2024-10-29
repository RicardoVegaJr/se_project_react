import React from "react"
import ModalWithForm from "./components/ModalWithForm/ModalWithForm"

const AddItemModal = ({closeActiveModal, onAddItem, isOpen}) => {
    return(
        <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        onClose={closeActiveModal}
        isOpen={isOpen}
        onSubmit={onAddItem}
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
    )
}

export default AddItemModal