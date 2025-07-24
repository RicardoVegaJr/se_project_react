import { useEffect, useState } from "react";
import { getToken, setToken } from "../utils/token.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import ItemModal from "./ItemModal/ItemModal";
import { getWeather } from "../utils/weatherApi";
import { filterweatherData } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "./AddItemModal";
import Profile from "./Profile/Profile";
import { getItems } from "../utils/api";
import { deleteItem } from "../utils/api";
import { onAddItemCard } from "../utils/api";
import LoginModal from "../components/login";
import ProtectedRoute from "./ProtectedRoutes";
import { useLocation } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
import { getUserInfo } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { register, authorize } from "../utils/auth.js";
import { addCardLike, removeCardLike } from "../utils/api";
import EditProfile from "./ChangeProfileData/EditProfileModal.jsx";
import { editProfile } from "../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);


  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
    email: "",
    _id: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //Log in and auth Logic //

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      setIsLoggedIn(false);
      setCurrentUser({ name: "", avatar: "", email: "", _id: "" });
      return;
    }

    getUserInfo(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser({
          name: data.name,
          avatar: data.avatar,
          email: data.email,
          _id: data._id,
        });
        console.log(data);
      })
      .catch((err) => {
        console.error("Error getting user info:", err);
        setToken("");
        setIsLoggedIn(false);
        setCurrentUser({ name: "", email: "", _id: "" });
      });
  }, []);

  useEffect(() => {
    console.log(
      "Modal useEffect: Pathname:",
      location.pathname,
      "ActiveModal:",
      activeModal
    );

    let expectedModal = "";
    if (location.pathname === "/signup") {
      expectedModal = "signup";
    } else if (location.pathname === "/signin") {
      expectedModal = "signin";
    } else if (activeModal === "edit-profile") {
      expectedModal = "edit-profile";
    } else if (activeModal === "add-garment") {
      expectedModal = "add-garment";
    } else if (activeModal === "preview") {
      expectedModal = "preview";
    }
    if (activeModal !== expectedModal) {
      console.log(
        `Updating activeModal from '${activeModal}' to '${expectedModal}'`
      );
      setActiveModal(expectedModal);
    }
  }, [location.pathname, activeModal]);

  const handleRegistration = ({ name, avatar, email, password }) =>
    register(name, avatar, email, password)
      .then(() => {
        closeActiveModal();
        navigate("/signin");
      })
      .catch(console.error);

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      console.log("Login: Email or password missing.");
      return;
    }
    authorize(email, password)
      .then((data) => {
        const token = data.token || data.jwt;
        if (token) {
          setToken(token);
          console.log("Authorization successful, token set:", token);
          getUserInfo(token);
          setIsLoggedIn(true);
          setCurrentUser(data);
          closeActiveModal();
          navigate("/profile");
        } else {
          console.error(
            "Login failed: No token received from authorization.",
            data
          );
          return Promise.reject("No token received from authorization");
        }
      })
      .catch((err) => {
        console.error("Error during login authorization:", err);
      });
  };

  const handleLogOutClick = () => {
    setToken("");
    setIsLoggedIn(false);
    setCurrentUser({ name: "", avatar: "", email: "", _id: "" });
    navigate("/");
  };

  // Edit Profile Logic //

  const handleEditClick = () => {
    setActiveModal("edit-profile");
  };

  const handleEditProfile = ({ name, avatar }) => {
    const token = getToken();
    if (!token) {
      console.error("No token found for editing profile.");
      return Promise.reject("No token found.");
    }
    editProfile(name, avatar, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Card Logic //

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

  const deleteCard = () => {
    const updatedClothingItems = clothingItems.filter(
      (item) => item._id !== selectedCard._id
    );
    setClothingItems(updatedClothingItems);
    console.log(selectedCard);
  };

  const deleteItemCard = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        deleteCard();
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onAddItem = (values) => {
    const newItem = { ...values, _id: Date.now().toString() };

    onAddItemCard(newItem)
      .then(() => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
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
    getItems()
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  console.log(currentTemperatureUnit);

  const handleCardLike = ({ id, isLiked }) => {
    const token = getToken();
    if (!token) {
      console.error("App.js - No token found for liking/unliking card.");
      return;
    }
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log("App.js - Error removing like:", err));
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header handleAddClick={handleAddClick} weatherData={weatherData} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    clothingItems={clothingItems}
                    currentTemp={currentTemperatureUnit}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleAddClick={handleAddClick}
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                      handleEditClick={handleEditClick}
                      currentUser={currentUser}
                      handleLogOutClick={handleLogOutClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          {activeModal === "add-garment" && (
            <AddItemModal
              closeActiveModal={closeActiveModal}
              onAddItem={onAddItem}
              isOpen={activeModal === "add-garment"}
            />
          )}
          {activeModal === "signup" && (
            <RegisterModal
              handleRegistration={handleRegistration}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "signup"}
            />
          )}

          {activeModal === "signin" && (
            <LoginModal
              handleLogin={handleLogin}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "signin"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              card={selectedCard}
              onClose={closeActiveModal}
              isOpen={activeModal === "preview"}
              deleteItemCard={deleteItemCard}
              currentUser={currentUser}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfile
              handleEditProfile={handleEditProfile}
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "edit-profile"}
              currentUser={currentUser}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
