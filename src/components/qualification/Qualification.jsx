import React, { useState } from 'react';
import "./qualification.css";
function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qualification__section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className= {toggleState === 1 ? "qualification__button qualification__active button__flex" : "qualification__button"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
                <div className={toggleState === 2 ? "qualification__button qualification__active button__flex" : "qualification__button"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className= {toggleState === 1 ? "qualification__content qualification__content__active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer </h3>
                            <span className="qualification__subtitle">
                                Sheikh Hasina National Youth Development Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">
                            Sheikh Hasina National Youth Development Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Frontend web developer </h3>
                            <span className="qualification__subtitle">
                               
                                    Programming Hero By  jhankar mahbub
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">
                            Programming Hero By  jhankar mahbub</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content__active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer </h3>
                            <span className="qualification__subtitle">
                            Free code camp</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">
                            Free code camp</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer </h3>
                            <span className="qualification__subtitle">
                                Figma</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
