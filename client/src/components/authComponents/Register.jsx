import "../../css/auth.css";
import { Redirect, Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

let Register = () => {
  let history = useHistory();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setconfirmPassword] = useState("");
  let [error, setError] = useState("");
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async function handleRegister(e) {
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    if (password != confirmPassword) {
      setPassword("");
      setconfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/register",
        { username, email, password },
        config
      );
      console.log("data:", data);
      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (err) {
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }
  return (
    <div>
      <div className="register-form-container">
        <div className="form-container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          {error && <span className="error-message">{error}</span>}

          <label for="username">
            <b>Username</b>
          </label>
          <input
            onChange={(e) => {
              setUsername(e.currentTarget.value);
            }}
            class="name-input"
            type="text"
            placeholder="Enter Username"
            name="name"
            required
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            class="email-input"
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            class="password-input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
          <label for="confirm-psw">
            <b>Confirm password</b>
          </label>
          <input
            onChange={(e) => {
              setconfirmPassword(e.currentTarget.value);
            }}
            class="password-input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              handleRegister(e);
            }}
            type="submit"
            className="registerbtn"
          >
            Register
          </button>
          <div className="container-signin">
            <p>
              Already have an account?
              <Link id="link-login" to="/login">
                Sign in
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
