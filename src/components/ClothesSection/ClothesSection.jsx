import ItemCard from "../ItemCard/itemCard";
import "./ClothesSection.css"

function ClothesSection ({handleCardClick, clothingItems, handleAddClick}) {
    return (
    <div className="clothes-section">
    <div className="clothes-section__add">
        <p className="clothes-section__add-title">Your Items</p>
        <button onClick={handleAddClick} className="clothes-section__add-button"> + Add New</button>
    </div>
    <ul className="clothes-section__cards">
          {clothingItems
            .map((item) => {
              return <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />;
            })}
        </ul>
    </div>
    )
   }
   
   export default ClothesSection;