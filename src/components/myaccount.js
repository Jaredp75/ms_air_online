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
                <p><strong>Account Settings</strong>:</p>

                  <p><i className="fa fa-check"></i>  View or modify your billing information</p>
                  <p><i className="fa fa-check"></i>  Update your email address</p>
                  <p><i className="fa fa-check"></i>  Change your password</p>
                  <br />
                  <br />
                <p><strong>Login Assistance</strong>:</p>
                  <p>Forgot your username or password?<br /><strong><a href="/register">Retreive your username and reset your password.</a></strong></p>
              </div>
            </div>

            <div className="order-info">
              <div className="order-info-header">
                <h1>Order Information</h1>
              </div>
              <div className="order-info-para">
                <p><strong>Order History</strong>:</p>

                  <p><i className="fa fa-check"></i>  Check your order status</p>
                  <p><i className="fa fa-check"></i>  Print an invoice</p>
                  <p><i className="fa fa-check"></i>  View your Order History</p>

                  <br />
                  <br />


                <p><strong>Track An Order</strong>:</p>
                <p>You will be able to track your current orders.<br /><strong>Coming Soon!</strong></p>
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
