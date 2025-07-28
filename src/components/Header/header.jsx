import "./header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({ handleAddClick, weatherData, setActiveModal }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
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
      {isLoggedIn ? (
        <Link className="header__link" to="/profile">
          <div className="header_user-container">
            <p className="header__username">{currentUser.name}</p>
            <img
              src={currentUser.avatar || avatar}
              alt={currentUser.name || "User avatar"}
              className="header__avatar"
            />
          </div>
        </Link>
      ) : (
        <div className="header__auth-links">
          <button  onClick={() => setActiveModal("signup")} className="header__link header__link_signup">
            Sign Up
          </button>
          <button  onClick={() => setActiveModal("signin")}className="header__link header__link_signin">
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
