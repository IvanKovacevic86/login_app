import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="app">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="loginForm">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
