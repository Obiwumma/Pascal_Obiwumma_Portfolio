import React from "react";
import { useState } from "react";

const Contact = () => {

  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        setMessageSent(true);
        form.reset();
      }
    });
  };


  return (
    <>
      {/* Contact Start */}
      <div className="contact " data-aos="fade-up"  id="contact">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="contact-form">
                  {messageSent && <p className="success"> Your message was sent!</p>}
                  <div id="success"></div>
                  <form onSubmit={handleSubmit} action="https://formspree.io/f/myzjaral" method="POST" name="sentMessage" id="contactForm" noValidate>
                    <div className="control-group">
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                      <p className="help-block"></p>
                    </div>
                    <div className="control-group">
                      <textarea name="message" className="form-control" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                      <p className="help-block"></p>
                    </div>
                    <div>
                      <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  )
}

export default Contact;