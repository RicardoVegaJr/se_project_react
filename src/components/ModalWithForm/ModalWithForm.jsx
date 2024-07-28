import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({ children, title, buttonText, onClose, isOpen }) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}  
         
    >
      <div className="modal__container">
        <button type="button" onClick={onClose} className="modal__close" />
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