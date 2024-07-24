import "./itemModal.css";

function ItemModal({ activeModal, card, onClose }) {
  console.log(card);
  return(<div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
    <div className="modal__item-container">
<button type="button" onClick={onClose} className="modal__close" />
<img src={card.link} alt="" className="modal__image" />
<div className="modal__footer">
  <h2 className="modal__caption">{card.name}</h2>
  <p className="modal__weather">Weather: {card.weather}</p>
</div>
    </div>
  </div>)

}

export default ItemModal;