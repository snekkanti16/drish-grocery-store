import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
    <footer className="footer" id="footer">
    <div className="box-container">
      <div className="box">
        <FontAwesomeIcon icon={['fas', 'faUser']} />
        <h3>
          DRISH
          <i>
            <FontAwesomeIcon icon={faShoppingBasket} />
          </i>
        </h3>
        <p>
          DRISH Grocery Store
        </p>
        <div className="share">
          <a href="/">
            <i>
              <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
            </i>
          </a>
          <a href="/">
            <i>
              <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
            </i>
          </a>
          <a href="/">
            <i>
              <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
            </i>
          </a>
          <a href="/">
            <i>
              <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
            </i>
          </a>
        </div>
      </div>
      <div className="box">
        <h3>contact info</h3>
        <a href="/" className="links">
          <i>
            <FontAwesomeIcon icon={faPhone} />
          </i>
          +000 000 0000
        </a>
        <a href="/" className="links">
          <i>
            <FontAwesomeIcon icon={faPhone} />
          </i>
          +000 000 0001
        </a>
        <a href="/" className="links" id="emailLink">
          <i>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
          info@nsl.co.uk
        </a>
        <a href="/" className="links">
          <i>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </i>
          London, UK
        </a>
      </div>
      <div className="box">
        <h3>quick info</h3>
        <a href="#home" className="links">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
          home
        </a>
        <a href="#features" className="links">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
          features
        </a>
        <a href="#products" className="links">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
          products
        </a>
        <a href="#categories" className="links">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
          categories
        </a>
        <a href="#reviews" className="links">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
          reviews
        </a>
        <a href="#blogs" className="links">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
          blogs
        </a>
      </div>
      <div className="box">
        <h3>newsletter</h3>
        <p>Subscribe For Latest Updates</p>
        <input type="text" placeholder="your email" />
        <button type="button" className="btn">
          subscribe
        </button>
        <img src="image/payment.png" alt="" />
      </div>
    </div>
    <div className="credits">
      <p>
        Created By
        {' '}
        <span>NSL</span>
        {' '}
        | All Rights Reserved
      </p>
    </div>
  </footer>
);
}

export default Footer;