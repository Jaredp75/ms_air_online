import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
// import HelpAndCurrency from './help-and-currency.js';
// import AboutLinks from './footer-links/about-links.js';

export default class Spinner extends React.Component {



  /* --- NOTES --- */

  /* --- I found this Add To Cart button with spinner animation to show an item being added to the shopping cart. --- */

  /* --- I added the button to the Spinner.js page, but visit the link below to see if you can use this for the cart notification --- */

  /* --- https://foundation.zurb.com/building-blocks/blocks/button-add-cart.html --- */



  render(){

    return(
      <div>

        <div className = 'content-area-container'>

          <div className="showbox">

            <div className="loader">
            <h2>Your Order is Processing...</h2>
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
              </svg>
            </div>
          </div>





          <button data-addCart className="button button-add-cart"><span><h4>Add To Cart</h4></span></button>
            <div data-successMessage className="callout success hide">
              Added to cart, Yay!
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
