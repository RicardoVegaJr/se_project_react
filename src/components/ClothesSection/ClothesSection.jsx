import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/itemCard";
import "../ItemCard/itemCard.css";
import "./ClothesSection.css"

function ClothesSection () {
    return (
    <div className="clothes-section">
    <div className="clothes-section__add">
        <p className="clothes-section__add-title">Your Items</p>
        <button className="clothes-section__add-button"> + Add New</button>
    </div>
    <ul className="cards__list">
          {defaultClothingItems
            .map((item) => {
              return <ItemCard key={item._id} item={item} //onCardClick={handleCardClick}    />;
              />
            })}
        </ul>
    </div>
    )
   }
   
   export default ClothesSection;