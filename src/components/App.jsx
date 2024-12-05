import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getWeather } from "../utils/weatherApi";
import { filterweatherData } from "../utils/weatherApi";
import {CurrentTemperatureUnitContext} from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "./AddItemModal";
import Profile from "./Profile/Profile";
import { getItems } from "../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const deleteCard =() => {
    const updatedClothingItems = clothingItems.filter(item => item._id !== selectedCard._id);
    setClothingItems(updatedClothingItems);
    console.log(selectedCard)

  };
  

  const deleteItemCard = () => {
   
    fetch(`http://localhost:3001/items/${selectedCard._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`); 
    })
    .then(() => {
      deleteCard();
      closeActiveModal();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  





  const onAddItem = (values) => {
    const newItem = { ...values, _id: Date.now().toString()};
    fetch("http://localhost:3001/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`); 
    })
    .then((data) => {
      setClothingItems([...clothingItems, newItem]); 
      closeActiveModal();
    })
    .catch((error) => {
      console.error(error);
    });
  };




  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F')
    if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C')
      
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterweatherData(data);
        console.log(filteredData);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems().then((data) => {
      setClothingItems(data)
    }).catch(console.error);
  }, []);

console.log(currentTemperatureUnit);
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Routes>
          <Route path="/" element={
              <Main clothingItems={clothingItems} currentTemp={currentTemperatureUnit} weatherData={weatherData} handleCardClick={handleCardClick} />} />
          <Route path="/profile" element={<Profile handleAddClick={handleAddClick} clothingItems={clothingItems} handleCardClick={handleCardClick}/>} />
        </Routes>
        <Footer />
      </div>
      {activeModal === "add-garment" && <AddItemModal  closeActiveModal={closeActiveModal} isOpen={activeModal === "add-garment"} onAddItem={onAddItem}/>}
      {activeModal === "preview" && 
        <ItemModal card={selectedCard} onClose={closeActiveModal} isOpen={handleCardClick} deleteItemCard={deleteItemCard} />
      }
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
