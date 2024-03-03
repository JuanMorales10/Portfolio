import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/mockup-contact.avif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t8zrsoa', 'template_xifg0be', form.current, 'FcG5sp76sUwUcbNMs')
      .then((result) => {
        if (result.text === 'OK') {
          setIsEmailSent(true);
        }
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div class="containercon">
      <div class="blob-c">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
      </div>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <div class="shape-blob three"></div>
            <div class="shape-blob four"></div>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" name="user_name" placeholder="Name" />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" name="user_email" placeholder="Email" />
                        </Col>
                        <div class="shape-blob one"></div>
                        <div class="shape-blob two"></div>
                        <Col size={12} className="px-1">
                          <textarea name="message" placeholder="Message" />
                          <button type="submit"><span>Send</span></button>
                        {isEmailSent && <div className="success-message">Message Sent Successfully!</div>}
                        </Col>
                      </Row>
                    </form>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                }
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
