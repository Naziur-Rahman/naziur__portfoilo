import React, { useState } from 'react';
import "./header.css";

function Header() {

  // -----------  Change Background Header ------------
  window.addEventListener("scroll", function(){
    const Header__ = document.querySelector(".header");
    if(this.scrollY >= 80) Header__.classList.add("scroll__header");
    else Header__.classList.remove("scroll__header");
    });


  // -----------  Toggle menu ------------
    const [Toggle,ShowMenu] = useState(false);
    const [activeNav,setActieNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Naziur</a>

        <div className= {Toggle ? "nav__menu show__menu": "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActieNav("#home")} className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a> 
            </li>

            {/* <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-graduation-cap nav__icon"></i> Qualification
              </a> 
            </li> */}

            <li className="nav__item">
              <a href="#services" className="nav__link">
                 <i className="uil uil-briefcase nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"onClick={()=>ShowMenu(!Toggle)} ></i>
        </div>

        <div className="nav__toggle" onClick={()=>ShowMenu (!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header