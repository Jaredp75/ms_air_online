import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class Checkout extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase02.gif' alt='Purchase Information' />
          </div>
          <br />
          <br />
          
        <form>
          <fieldset>
            <legend>Select a shipping option</legend>

            <div>
              <input type="radio" id="option1" name="option" checked />
              <label for="option1">UPS Ground & Handling- 29.72</label>
            </div>

            <div>
              <input type="radio" id="option2" name="option" />
              <label for="option2">UPS Three-Day Select & Handling- 75.33</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3">UPS Second Day Air & Handling- 105.55</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3">UPS Next Day Air Saver & Handling- 269.55</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3">UPS Next Day Air Early A.M. & Handling- 314.16</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3">UPS Next Day Air & Handling- 276.90</label>
            </div>

          </fieldset>
        </form>




























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
