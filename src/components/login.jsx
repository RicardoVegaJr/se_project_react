import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

  const LoginModal = ({handleLogin, closeActiveModal, isOpen}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    handleLogin(data);
  };

  return (
    <ModalWithForm
        title="Login"
        buttonText="Login"
        onClose={closeActiveModal}
        isOpen={isOpen}
        onSubmit={handleSubmit}
        isLoginModal={true} // Crucial prop to show the "or Register" option
        // onRegisterClick={handleRegisterClick} // Handler for the "Register" button click
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
      </ModalWithForm>
  );
};

export default LoginModal;
