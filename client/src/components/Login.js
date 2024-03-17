import React from "react";
import loginpic from "../images/login.png"
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5 d-flex justify-content-center">
          <div className="signin-content">
          <div className="signin-image">
              <figure>
                <img src={loginpic} alt="Login pic" />
              </figure>
            </div>  
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                  />
                </div>{" "}
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your password"
                  />
                </div>
                <br/>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Sign In"
                  /><br/>
                  <NavLink to="/signup" className="signup-image-link">
                Create an account
              </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;