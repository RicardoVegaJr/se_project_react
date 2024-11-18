import "./header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
console.log(weatherData);
const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  return (
    <header className="header">
      <Link to="/">
      <img  src={logo} alt="logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
      <div className="header__switch-wrapper">
      <ToggleSwitch/>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      </div>
      <Link className="header__link" to="/profile">
      <div className="header_user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrenece Tegegne" className="header__avatar" />
      </div>
      </Link>
    </header>
  );
}

export default Header;
