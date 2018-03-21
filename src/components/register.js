import React from "react";
import {Link} from 'react-router-dom';
import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';


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
                <b>* State: </b>
<select id="state" name="state"><option value="---">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
<br />

                <b>* ZIP: </b><input type="text" name="zipcode" pattern="[0-9]{5}"></input><br />
                <b>* Phone: </b><input type="tel" name="phone"></input><br /><br />

              <input type="submit" value="Submit"></input>
            </form>
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
