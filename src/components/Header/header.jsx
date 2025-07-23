import "./header.css";
import avatar from "../../assets/avatar.svg"; // Default avatar
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react"; // Import useContext
import { CurrentUserContext } from "../../contexts/CurrentUserContext"; // Import CurrentUserContext

function Header({ handleAddClick, weatherData }) {
  // Use useContext to get currentUser and isLoggedIn from CurrentUserContext
  const {  currentUser, isLoggedIn } = useContext(CurrentUserContext);
    console.log("Current User Avatar in header is ", currentUser);

  console.log("Header weatherData:", weatherData);
  console.log("Header currentUser:", currentUser);
  console.log("Header isLoggedIn:", isLoggedIn);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__switch-wrapper">
        <ToggleSwitch />
        {/* Conditionally render + Add Clothes button based on isLoggedIn */}
        {isLoggedIn && (
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
        )}
      </div>
      {/* Conditionally render user info/profile link or signin/signup links */}
      {isLoggedIn ? (
        <Link className="header__link" to="/profile">
          <div className="header_user-container">
            {/* Display current user's name */}
            <p className="header__username">{currentUser.name}</p>
            {/* Display current user's avatar if available, otherwise default */}
            <img
              src={currentUser.avatar || avatar} // Use currentUser.avatar if it exists, otherwise default
              alt={currentUser.name || "User avatar"}
              className="header__avatar"
            />
          </div>
        </Link>
      ) : (
        <div className="header__auth-links">
          <Link to="/signup" className="header__link header__link_signup">
            Sign Up
          </Link>
          <Link to="/signin" className="header__link header__link_signin">
            Log In
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
