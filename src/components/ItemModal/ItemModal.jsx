import "../ItemModal/ItemModal.css";
import { useContext } from "react"; // Import useContext
import { CurrentUserContext } from "../../contexts/CurrentUserContext"; // Import CurrentUserContext


function ItemModal({ isOpen, card, onClose, deleteItemCard, currentUser }) {

 const isOwn = card.owner === currentUser._id;



  return (
    
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__item-container">
        <button type="button" onClick={onClose} className="modal__close" />
        <img src={card.imageUrl} alt="card image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        {isOwn && (
        <button onClick={deleteItemCard} className="modal__delete">
          Delete Item
        </button>
        )}
      </div>
    </div>
    
  );
}

export default ItemModal;
