import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class ContactUs extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="contact-header-text">

          </div>
          <div className="phone-container">
            <div className="telephone-header">
              <h1 className="telephone">Telephone & Hours of Operation</h1>
            </div>
            <div className="phone-details">
              <h4 className="hours">Monday - Friday 8:00am - 5:00pm EST</h4>
              <h4 className="toll-free">Toll Free: (877) 672-4799</h4>
              <h4 className="local-phone">Local: (631) 331-2740</h4>
              <h4 className="fax">Fax: (631) 331-2947</h4>
            </div>
          </div>
        <div className="mailing-container">
          <div className="mailing-address-header">
            <h1 className="address">Mailing Address</h1>
          </div>
          <div className="address-details">
            <h4 className="address1">MS Air, Inc.</h4>
            <h4 className="address2">64 Mt. Sinai Avenue</h4>
            <h4 className="address3">Mt. Sinai, NY 11766</h4>
          </div>
        </div>
		{/*
        <div className="email-container">
          <div className="email-form-header">
            <h1 className="email-header">Contact Us</h1>
          </div>
          <div className="email-details">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputName"><strong>* First Name: </strong></label>
                  <input type="text" className="form-control" placeholder="First Name"></input>
                </div>
                <div className="form-group col-md-6">
                  <label className="inputName"><strong>* Last Name: </strong></label>
                  <input type="text" className="form-control" placeholder="Last Name"></input>
                </div>
                <div className="form-group col-md-6">
                  <label className="inputEmail4"><strong>* Email: </strong></label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                  <label className="inputPhone"><strong>Phone:</strong></label>
                  <input type="tel" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                </div>
                <div className="form group col-md-6">
                  <label className="inputMessage"><strong>Message:</strong></label>
                  <textarea className="form-control" id="inputMessage" placeholder="Message" rows="8" cols="50" />
                </div>
                </div>
                <br />
                <div className="email-disclaimer">
                  <p>Please Note:</p>
                  <ul>
                    <li>MS Air will not share your contact information with any other party.</li>
                    <li>MS Air will not store your information. We will only use it to help answer your questions.</li>
                    <li>You must provide either a phone number or email address so that we can respond to your inquiry.</li>
                    <li>The security code is required so that we only receive valid questions from customers like you.</li>
                  </ul>
                </div>

                <div className="accountFormText">*Enter Code:</div>
		              <div className="accountForm">
                    <img src="https://www.msaironline.com/images/verify/letter_016.jpg" alt=" "></img>
                    <img src="https://www.msaironline.com/images/verify/letter_017.jpg" alt=" "></img>
                    <img src="https://www.msaironline.com/images/verify/letter_008.jpg" alt=" "></img>
                    <input type="text" className="code" size="5" maxLength="3"></input>
                  </div>

                <div className="contact-button">
                  <button type="submit" className="btn btn-primary"><h4>Submit</h4></button>
                </div>


            </form>
          </div>
        </div>
		*/}

        <div className="FooterLinks1">
          <HelpAndCurrency />

        </div>
        <div className="FooterLinks2">
          <AboutLinks />
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


    )
  }
}
