import "../css/auth.css";
import { Redirect, Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
let Login = () => {
  let history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);
  async function handleLogin() {
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        { email, password },
        config
      );
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
      <div className="login-form-container">
        <div className="form-container">
          <h1>Welcome Back!</h1>
          <h3>Please Login</h3>
          <hr />
          {error && <span className="error-message">{error}</span>}
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
          <hr />

          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            type="submit"
            class="loginbtn"
          >
            Login
          </button>
        </div>
        <p>
          <Link id="link-login" to="forgotpassword">
            Forgot password?
          </Link>
        </p>
        <p>
          Don't have an account?
          <Link id="link-login" to="register">
            Register
          </Link>
        </p>
      </div>
      ;
    </div>
  );
};
export default Login;
