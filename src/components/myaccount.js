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
                <h3><i><u>Account Settings</u>:</i></h3>
                <ul>
                  <li><h4>View or modify your billing information</h4></li>
                  <li><h4>Update your email address</h4></li>
                  <li><h4>Change your password</h4></li>
                </ul>

                <h3><i><u>Login Assistance</u>:</i></h3>
                  <h4>Forgot your username or password? Retreive your username and reset your password.</h4>
              </div>
            </div>

            <div className="order-info">
              <div className="order-info-header">
                <h1>Order Information</h1>
              </div>
              <div className="order-info-para">
                <h3><i><u>Order History</u>:</i></h3>
                <ul>
                  <li><h4>Check your order status</h4></li>
                  <li><h4>Print an invoice</h4></li>
                  <li><h4>View your Order History</h4></li>
                </ul>


                <h3><i><u>Track An Order</u>:</i></h3>
                <h4>You will be able to track your current orders. <strong>Coming Soon!</strong></h4>
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
