import "./ModalWithForm.css";
import modalClose from "../../assets/modalClose.svg";

function ModalWithForm({ children, title, buttonText, activeModal }) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__container">
        <img
          src={modalClose}
          class="modal__close"
          id="modalFormClose"
          type="button"
        />
        <form action="" className="modal__form">
          <h1 className="modal__form-title">{title}</h1>
          {children}
          <button type="submit" className="modal__form_submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
