import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css"

function Profile () {
 return (
 <div className="profile">
 <section className="profile__sidebar">
    <SideBar/>
 </section>
 <section className="profile__clothing-item">
    <ClothesSection/>
 </section>
 </div>
 );
}

export default Profile;