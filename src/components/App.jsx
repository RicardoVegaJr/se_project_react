import { useState } from "react";
import "./App.css";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
