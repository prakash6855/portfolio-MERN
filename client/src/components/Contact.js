import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item">
                <img
                  src="https://img.icons8.com/office/24/000000/phone.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+919999999999</div>
                </div>
              </div>
              <div className="contact_info_item">
                <img
                  src="https://img.icons8.com/office/24/000000/email.png"
                  alt="email"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">anny@hmail.com</div>
                </div>
              </div>
              <div className="contact_info_item">
                <img
                  src="https://img.icons8.com/office/24/000000/address.png"
                  alt="address"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Surat, Gujarat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_for_container py-5">
                <div className="contact_form_title">Get In Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="contact_form_email">
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="contact_form_phone">
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="contact_form_message">
                    <textarea
                      className="text_field contact_form_message input_field"
                      placeholder="Message"
                      rows="8"
                      columns="10"
                      required
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
