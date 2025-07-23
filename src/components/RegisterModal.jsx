import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";


const RegisterModal = ({handleRegistration, closeActiveModal, isOpen}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleRegistration(data);
  };

  return (
    <ModalWithForm
        title="Register"
        buttonText="Next"
        onClose={closeActiveModal}
        isOpen={isOpen}
        onSubmit={handleSubmit}
      >
        <label className="modal__form-input-title" htmlFor="email">
          Email
        </label>
        <input
          className="modal__form-input"
          id="email" // Changed from 'name'
          name="email" // Changed from 'name'
          type="email" // Better for email input
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          required
        ></input>

        <label className="modal__form-input-title" htmlFor="password">
          Password
        </label>
        <input
          className="modal__form-input"
          id="password" // Changed from 'URL'
          name="password" // Changed from 'URL'
          type="password" // Important for password input
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          required
        ></input>

        <label className="modal__form-input-title" htmlFor="name">
          Name
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
          Avatar URL
        </label>
        <input
          className="modal__form-input"
          id="avatar"
          name="avatar" 
          type="url" 
          placeholder="avatar"
          onChange={handleChange}
          value={data.avatar}
          required
        ></input>
      </ModalWithForm>
  );
};

export default RegisterModal;