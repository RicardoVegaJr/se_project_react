import { useState } from "react";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

const LoginModal = ({ handleLogin, closeActiveModal, isOpen }) => {
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
      isLoginModal={true}
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
    </ModalWithForm>
  );
};

export default LoginModal;
