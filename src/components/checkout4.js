import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class Checkout extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase04.gif' alt='Purchase Information' />
          </div>
          <br />
          <br />
          <div className="checkout-header">
            <strong>Order Complete</strong>
          </div>


        <form>
          <fieldset>
            <legend>Congratulations, your order is complete!</legend>

            <div>
              <input type="radio" id="option1" name="option" checked />
              <label for="option1"> Test</label>
            </div>

            <div>
              <input type="radio" id="option2" name="option" />
              <label for="option2"> Test</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3"> Test</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3"> Test</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3"> Test</label>
            </div>

            <div>
              <input type="radio" id="option3" name="option" />
              <label for="option3"> Test</label>
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
