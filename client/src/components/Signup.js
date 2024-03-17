import React from "react";
import { NavLink } from "react-router-dom";
import signpic from "../images/registration.png";

function Signup() {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content d-flex justify-content-between">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form className="register-form" id="register-form" >
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your name"
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
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
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>{" "}
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your phone number"
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>{" "}
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your profession"
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
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
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm Your Password"
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
              </form>
              <NavLink
                to="/login"
                className="signup-image-link"
                style={{ textAlign: "left", display: "block" }}
              >
                I am already registered
              </NavLink>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signpic} alt="registration" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
