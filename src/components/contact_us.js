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
          <div className="header-text">
            <h1>Contact Us</h1>
          </div>
          <div className="telephone-header">
            <h2 className="telephone">Telephone & Hours of Operation:</h2>
            <h4 className="hours">Monday - Friday 8:00am - 5:00pm EST</h4>
            <h4 className="toll-free">Toll Free: (877) 672-4799</h4>
            <h4 className="local-phone">Local: (631) 331-2740</h4>
            <h4 className="fax">Fax: (631) 331-2947</h4>
        </div>

        <div className="mailing_address">
          <h2 className="address-header">Mailing Address:</h2>
          <h4 className="address1">MS Air, Inc.</h4>
          <h4 className="address2">64 Mt. Sinai Avenue</h4>
          <h4 className="address3">Mt. Sinai, NY 11766</h4>
        </div>

        <div className="email_form">
          <h2 className="email-header">Contact Us:</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="inputName"><strong>* Name: </strong></label>
                <input type="text" className="form-control" placeholder="name"></input>
              </div>
              <div className="form-group col-md-6">
                <label className="inputEmail4"><strong>* Email: </strong></label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label className="inputPhone"><strong>Phone:</strong></label>
                <input type="tel" className="form-control" id="inputPhone" placeholder="Phone" />
              </div>
              <div className="form group col-md-6">
                <label className="inputMessage"><strong>Message:</strong></label>
                <input type="text" className="form-control" id="inputMessage" placeholder="Message" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>





        </div>

        <div className="FooterLinks1">
          <HelpAndCurrency />

        </div>
        <div className="FooterLinks2">
          <AboutLinks />
        </div>
              </div>
              <div className="about-footer">
                <div className="terms">
                  <p><a href="/terms" target=" blank" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
                </div>
                <div className="copyright">
                  <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
              </div>
              </div>

      </div>


    )
  }
}
