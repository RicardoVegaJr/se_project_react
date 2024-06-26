import "./header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <p className="header__date-and-location">Date, Location</p>

      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header_user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrenece Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
