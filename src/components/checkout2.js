import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

class Checkout2 extends Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase02.gif' alt='Purchase InclassNamemation' />
          </div>

          <div className="checkout-header">
            <strong>Shipping Options</strong>
          </div>

        <form method="POST" className="shipping-options" action="checkout3.php">
          <fieldset>
            <legend><strong>Select a shipping option</strong></legend>

            <div>
              <input type="radio" id="option1" name="option" checked />
              <label className="option1">UPS Ground & Handling- 29.72</label>
            </div>

            <div>
              <input type="radio" id="option2" name="option" />
              <label className="option2">UPS Three-Day Select & Handling- 75.33</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label className="option3">UPS Second Day Air & Handling- 105.55</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label className="option3">UPS Next Day Air Saver & Handling- 269.55</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label className="option3">UPS Next Day Air Early A.M. & Handling- 314.16</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label className="option3">UPS Next Day Air & Handling- 276.90</label>
            </div>

          </fieldset>
        </form>

        <div id="shipping-logo">
          <img src="https://www.msaironline.com/checkout/ups_logo.gif" alt="UPS logo"></img>
          <p>UPS, the UPS brand mark, and the Color Brown are trademarks of United Parcel Service of America, Inc. All Rights Reserved</p>
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

export default Checkout2;
