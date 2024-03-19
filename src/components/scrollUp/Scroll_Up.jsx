import React from 'react';
import "./scrollUp.css";

function Scroll_Up() {

    window.addEventListener("scroll", function(){
        const scroll__up = document.querySelector(".scrollUp");
        if(this.scrollY >= 560) scroll__up.classList.add("show__scroll");
        else scroll__up.classList.remove("show__scroll");
    });

  return (
    <a href="#" className="scrollUp">
        <i className="uil uil-arrow-up scrollUp__icon"></i>
    </a>
  )
}

export default Scroll_Up
