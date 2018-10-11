import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';


class OptInForm extends Component {
  render() {
    return (

      <div>
        <div className = 'content-area-container'>
          <div className="header-text">
          <div className="OptInForm">
            <div className="returning-customer-header">
              <h2>Subscribe to our Newsletter</h2>
            </div>
            <h4>Get the latest products and updates delivered right to your inbox.</h4>

        <div className="reset-form-group col-md-12">

	         <div className="optin-input-group">
             <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
        </div>





        </div>

        <div className="optin-password-button">
          <button type="submit" className="btn btn-primary btn-sm" value="Subscribe"><h4>Subscribe</h4></button>
        </div>

        {/* <div className="optin-company-logo">
          <img src="https://jaredpattersonblog.files.wordpress.com/2018/10/msair.png" alt="logo"></img>
        </div> */}


        <div className="FooterLinks1">
          <HelpAndCurrency />

        </div>
        <div className="FooterLinks2">
          <AboutLinks />
        </div>



      </div>
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
