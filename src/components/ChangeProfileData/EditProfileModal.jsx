import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext } from "react"; // Import useContext
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

  const EditProfile = ({handleEditProfile, closeActiveModal, isOpen}) => {
     const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

   useEffect(() => {
    if (isOpen && currentUser) {
      setData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(data);
  };

 

  return (
    <ModalWithForm
        title="Change profile data"
        buttonText="Save changes"
        onClose={closeActiveModal}
        isOpen={isOpen}
        onSubmit={handleSubmit}
        isLoginModal={true} // Crucial prop to show the "or Register" option
        // onRegisterClick={handleRegisterClick} // Handler for the "Register" button click
      >
        <label className="modal__form-input-title" htmlFor="name">
          Name *
        </label>
        <input
          className="modal__form-input"
          id="name" // Changed from 'name'
          name="name" // Changed from 'name'
          type="text" // Better for email input
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
          required
        ></input>

        <label className="modal__form-input-title" htmlFor="Url">
          Avatar *
        </label>
        <input
          className="modal__form-input"
          id="avatar"
          name="avatar" 
          type="url" 
          placeholder="Avatar URL"
          onChange={handleChange}
          value={data.avatar}
          required
        ></input>
      </ModalWithForm>
  );
};

export default EditProfile;
