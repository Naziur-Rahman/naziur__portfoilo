import React from 'react';
import "./contact.css";
function Contact() {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx contact__card__icon"></i>
                        <h3 className="contact__card__title"></h3>
                        <span className="contact__card__data"></span>
                        <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button__icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact
