import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class MyAccount extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">
          <div className="account-header-body">

            <div className="account-settings">
              <div className="account-settings-header">
                <h1>Account Settings</h1>
              </div>
              <div className="account-settings-para">
                <p><u>Account Settings</u>:</p>
                <ul>
                  <li>View or modify your billing information</li>
                  <li>Update your email address</li>
                  <li>Change your password</li>
                </ul>

                <p><u>Login Assistance</u>:</p>
                  <p>Forgot your username or password? Retreive your username and reset your password.</p>
              </div>
            </div>

            <div className="order-info">
              <div className="order-info-header">
                <h1>Order Information</h1>
              </div>
              <div className="order-info-para">
                <p><u>Order History</u>:</p>
                <ul>
                  <li>Check your order status</li>
                  <li>Print an invoice</li>
                  <li>View your Order History</li>
                </ul>


                <p><u>Track An Order</u>:</p>
                <p>You will be able to track your current orders. <strong>Coming Soon!</strong></p>
              </div>
            </div>





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
