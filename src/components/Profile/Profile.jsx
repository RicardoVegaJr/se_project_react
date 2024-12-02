import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css"
import AddItemModal from "../AddItemModal";

function Profile ({handleCardClick, clothingItems}) {
 return (
 <div className="profile">
 <section className="profile__sidebar">
    <SideBar/>
 </section>
 <section className="profile__clothing-item">
    <ClothesSection clothingItems={clothingItems} handleCardClick={handleCardClick}/>
 </section>
 </div>
 );
}

export default Profile;