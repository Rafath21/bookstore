import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "../../css/resetpassword.css";

const ResetPassword = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `http://localhost:8000/auth/passwordreset/${match.params.resetToken}`,
        {
          password,
        },
        config
      );
      console.log(data);
      setSuccess(data.data);
      history.push("/login");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="reset-password-container">
      <h3 className="resetpassword__title">Reset Password</h3>
      {error && <span className="error-message">{error} </span>}
      {success && (
        <span className="success-message">
          {success} <Link to="/login">Login</Link>
        </span>
      )}
      <div className="form-group">
        <label htmlFor="password">New Password:</label>
        <input
          class="password-input"
          type="password"
          required
          id="password"
          placeholder="Enter new password"
          autoComplete="true"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmpassword">Confirm New Password:</label>
        <input
          class="confirm-password-input"
          type="password"
          required
          id="confirmpassword"
          placeholder="Confirm new password"
          autoComplete="true"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="reset-password-btn"
        onClick={(e) => {
          resetPasswordHandler(e);
        }}
      >
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
