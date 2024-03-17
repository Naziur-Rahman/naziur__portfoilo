import React, { useState } from 'react';
import "./services.css";
function Services() {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br></br> Designer</h3>
                    <span className="services__button" onClick={() => toggleTab(1)}>View More  <i className="uil uil-arrow-right services__button__icon"></i></span>

                    <div className={toggleState === 1? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal__content">
                            <i className="uil uil-times services__close" onClick={() => toggleTab(0) }></i>

                            <h3 className="services__modal__title">Product </h3>
                            <p className="services__modal__description">Service with more than 1 years of experience. providing quality work to clients and companies.</p>

                            <ul className="services__modal__services gird">
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">I develop the user interface</p>
                                </li>

                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Web page development</p>
                                </li>

                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Fixed website Budge</p>
                                </li>
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">I position your company brand</p>
                                </li>
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Design and mockups of products for companies</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Ui/Ux <br></br> Designer
                    </h3>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More  <i className="uil uil-arrow-right services__button__icon"></i></span>

                    <div className={toggleState === 2? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal__content">
                            <i className="uil uil-times services__close" onClick={() => toggleTab(0) }></i>

                            <h3 className="services__modal__title">Ui/Ux Designer</h3>
                            <p className="services__modal__description">Service with more than 1 years of experience. providing quality work to clients and companies.</p>

                            <ul className="services__modal__services gird">
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">I develop the user interface</p>
                                </li>

                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Web page development</p>
                                </li>

                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Fixed website Budge</p>
                                </li>
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">I position your company brand</p>
                                </li>
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Design and mockups of products for companies</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Visual <br></br> Designer
                    </h3>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button__icon"></i></span>

                    <div className={toggleState === 3? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal__content">
                            <i className="uil uil-times services__close" onClick={() => toggleTab(0) }></i>

                            <h3 className="services__modal__title">Visual  Designer</h3>
                            <p className="services__modal__description">Service with more than 1 years of experience. providing quality work to clients and companies.</p>

                            <ul className="services__modal__services gird">
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">I develop the user interface</p>
                                </li>

                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Web page development</p>
                                </li>

                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Fixed website Budge</p>
                                </li>
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">I position your company brand</p>
                                </li>
                                <li className="services modal__service">
                                    <i className="uil uil-check-circle services__modal__icon"></i>
                                    <p className="services__modal__info">Design and mockups of products for companies</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
