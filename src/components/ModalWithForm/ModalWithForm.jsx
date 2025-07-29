import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  onClose,
  isOpen,
  onSubmit,
  activeModal,
  setActiveModal,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button type="button" onClick={onClose} className="modal__close" />
        <form onSubmit={onSubmit} action="" className="modal__form">
          <h1 className="modal__form-title">{title}</h1>
          {children}
          <div>
          <button type="submit" className="modal__form_submit-button">
            {buttonText}
          </button>
          {activeModal === "signup" && (
          <button onClick={() => setActiveModal("signin")} className="modal__form_login"> or login</button>
          )}
          {activeModal === "signin" && (
          <button onClick={() => setActiveModal("signup")} className="modal__form_login"> or register</button>
          )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
