import React from "react";
import person from "../images/person.png";
function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={person} alt="Prakash" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h4>Prakash Kumar Sharma</h4>
                <h5>Web Developer</h5>
                <p className="profile-rating mt-3 mb-5">
                  Rankings: <span>8/10</span>
                </p>
                <ul class="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link-active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link-active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col md-2">
              <input
                type="text"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINKS</p>
                <a
                  href="https://github.com/prakash6855?tab=repositories"
                  target="_prakash"
                >
                  Github
                </a>
                <br />
                <a href="https://www.linkedin.com/feed/" target="_prakash">
                  Linkedin
                </a>
                <br />
              </div>
            </div>

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label><b>User Id:</b></label>
                    </div>
                    <div className="col-md-6">
                      <p><i>123456789</i></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label><b>Name:</b></label>
                    </div>
                    <div className="col-md-6">
                      <p><i>Prakash kumar</i></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label><b>Email:</b></label>
                    </div>
                    <div className="col-md-6">
                      <p><i>xyz@gmail.com</i></p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label><b>Contact number:</b></label>
                      </div>
                      <div className="col-md-6">
                        <p><i>91123456789</i></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
