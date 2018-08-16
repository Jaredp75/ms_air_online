import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js'
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';


export default class Login extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <div className="returning-customer">
              <div className="returning-customer-header">
                <h1>Returning Customer</h1>
              </div>
                <form className="returning-customer-form">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label className="inputUserName"><strong>* Username</strong></label>
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>

                      <div className="form-group col-md-12">
                      <label className="inputLastName"><strong>* Password</strong></label>
                      <input type="text" className="form-control" placeholder="Password" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">Login</button>
                </form>




            </div>

            <div className="new-customer">
              <div className="new-customer-header">
                <h1>New Customer</h1>
              </div>
              <div className="new-customer-para">
                <h4>Create a free MS Air account to get the benefits of a personalized shopping experience. With a free MS Air account, you will be able to conveniently place orders, make shopping lists, save your shopping cart, check the status of your recent orders and much more.</h4>
                <a href="/register"><h4>Create a New Account</h4></a>
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
