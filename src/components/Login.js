import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setEmailError("Please enter your email");
    }else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Please enter your password");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "form-control error" : "form-control"}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? "form-control error" : "form-control"}
          />
          {passwordError && (
            <div className="error-message">{passwordError}</div>
          )}
        </div>
        <Link to='/'>
            <button type="submit" className="btn btn-primary">
            Login
            </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
