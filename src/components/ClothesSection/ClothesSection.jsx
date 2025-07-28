import ItemCard from "../ItemCard/itemCard";
import "./ClothesSection.css";
import { useContext } from "react"; 
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes-section__add">
        <p className="clothes-section__add-title">Your Items</p>
        <button
          onClick={handleAddClick}
          className="clothes-section__add-button"
        >
          {" "}
          + Add New
        </button>
      </div>
      {isLoggedIn && (
        <ul className="clothes-section__cards">
          {clothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ClothesSection;
