import avatar from "../../assets/avatar.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react"; // Import useContext

function SideBar({ handleEditClick, handleLogOutClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("Current User Avatar in sidebar is ", currentUser.avatar);

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar || avatar}
          alt="default avatar"
        />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <div className="sidebar-edit">
        <div className="sidebar-edit-profile ">
          <button
            onClick={handleEditClick}
            type="button"
            className=" sidebar-edit sidebar-edit-profile"
          >
            Change profile data
          </button>
        </div>
        <button className="sidebar-edit" onClick={handleLogOutClick}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
