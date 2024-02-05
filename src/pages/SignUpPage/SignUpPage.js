import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const SignUpPage = () => {
  const API_BASE_URL = "http://localhost:8080/";

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlPhone = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSignUp = () => {
    axios
      .post(`${API_BASE_URL}signUp`, {
        id: 1,
        full_name: userName,
        email: email,
        password: password,
        phone_number: phoneNumber,
      })
      .then((response) => {
        sessionStorage.setItem("session", response.data.session_id);
      })
      .then(() => {
        navigate("/applicationLists");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h2 className="form__header">Enter credentials</h2>
      <section className="form__inputs">
        <label htmlFor="name" className="form__inputs--label">
          Username
        </label>
        <input
          className="form__inputs--name"
          id="name"
          name="name"
          placeholder="enter username"
          value={userName}
          type="name"
          onChange={(event) => {
            handlUserName(event);
          }}
        ></input>
      </section>
      <section className="form__inputs">
        <label htmlFor="email" className="form__inputs--label">
          Email
        </label>
        <input
          className="form__inputs--email"
          id="email"
          name="email"
          placeholder="enter email"
          value={email}
          type="email"
          onChange={(event) => {
            handlEmail(event);
          }}
        ></input>
      </section>
      <section className="form__inputs">
        <label htmlFor="phone" className="form__inputs--label">
          Contact Number
        </label>
        <input
          className="form__inputs--phone"
          id="phone"
          name="phone"
          placeholder="enter phone"
          value={phoneNumber}
          type="number"
          onChange={(event) => {
            handlPhone(event);
          }}
        ></input>
      </section>
      <section className="form__inputs">
        <label htmlFor="password" className="form__inputs--label">
          password
        </label>
        <input
          className="form__inputs--password"
          id="password"
          name="password"
          placeholder="enter password"
          value={password}
          type="password"
          onChange={(event) => {
            handlPassword(event);
          }}
        ></input>
      </section>
      <button
        className="form__submit-button"
        onClick={() => {
          handleSignUp();
        }}
      >
        Sign Up
      </button>
      <Link to="/Login">
        <button>Log in</button>
      </Link>
    </form>
  );
};
export default SignUpPage;
