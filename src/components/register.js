import React from "react";
import {Link} from 'react-router-dom';
import FooterLinks from './footer-links/footer-links.js'


export default class Register extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">

            <h1>New Customer Registration (* required fields)</h1>
            <div className="customer-registration">
              <form action="">
                <b>* Username: </b><input type="text" name="username"></input><br />
                <b>* Password: </b><input type="password" name="psw"></input><br />
                <b>* Verify Password: </b><input type="text" name="verifypassword"></input><br />
                <b>* First Name: </b><input type="text" name="firstname"></input><br />
                <b>* Last Name: </b><input type="text" name="lastname"></input><br />
                <b>* Company: </b><input type="text" name="company"></input><br />
                <b>* Email: </b><input type="email" name="email"></input><br />
                <b>* Address: </b><input type="text" name="address"></input><br />
                <b>Address 2: </b><input type="text" name="address2"></input><br />
                <b>* City: </b><input type="text" name="city"></input><br />
                <b>* State: </b><select class="input-medium bfh-states" data-country="US" data-state="CA"></select>
<br />

                <b>* ZIP: </b><input type="text" name="zipcode" pattern="[0-9]{5}"></input><br />
                <b>* Phone: </b><input type="tel" name="phone"></input><br /><br />

              <input type="submit" value="Submit"></input>
            </form>
            </div>

          </div>



              <div className="Footer">
                <FooterLinks />
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
