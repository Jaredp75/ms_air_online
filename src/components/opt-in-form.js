import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';


class OptInForm extends Component {
  render() {
    return (
      <div className="OptInForm">
        <p>
          Get the latest products and updates delivered right to your inbox.
        </p>
        <form>
          <label>
          <input type="text" placeholder="Enter your email" />
          </label>
          <input type="submit" value="Subscribe" />
        </form>


        <div className="FooterLinks1">
          <HelpAndCurrency />

        </div>
        <div className="FooterLinks2">
          <AboutLinks />
        </div>
          <div className="about-footer">
            <div className="terms">
              <p><a href="/terms" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" rel="noopener noreferrer">Privacy Policy</a></p>
            </div>
            <div className="copyright">
              <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
          </div>
          </div>

      </div>
    );
  }
}

export default OptInForm;
