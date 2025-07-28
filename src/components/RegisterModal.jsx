import { useState } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleRegistration, closeActiveModal, isOpen, activeModal }) => {
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
      activeModal={activeModal}
    >
      <label className="modal__form-input-title" htmlFor="email">
        Email
      </label>
      <input
        className="modal__form-input"
        id="email" 
        name="email" 
        type="email" 
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
        id="password" 
        name="password" 
        type="password" 
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
        id="name" 
        name="name" 
        type="text" 
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
