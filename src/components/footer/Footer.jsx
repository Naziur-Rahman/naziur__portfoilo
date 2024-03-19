import React from 'react';
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Md Naziur Rahman</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">porjects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

            </ul>
            <div className="footer__social">
                <a href="https://www.facebook.com/03naziur" className="footer__social-icon" target='_blank'>
                <i class="uil uil-facebook"></i>
                </a>
                <a href="#" className="footer__social-icon" target='_blank'>
                    <i class="uil uil-instagram"></i>
                </a>
                <a href="https://github.com/Naziur-Rahman" className="footer__social-icon" target='_blank'>
                    <i class="uil uil-twitter"></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; Md Naziur Rahman . All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer
