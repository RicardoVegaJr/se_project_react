import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({ handleCardClick, clothingItems, handleAddClick, onCardLike, handleEditClick, handleLogOutClick, currentUser }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleEditClick={handleEditClick} currentUser={currentUser} handleLogOutClick={handleLogOutClick} />
      </section>
      <section className="profile__clothing-item">
        <ClothesSection
          handleAddClick={handleAddClick}
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
