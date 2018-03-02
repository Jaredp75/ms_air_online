import React from "react";
import {Link} from 'react-router-dom';
import FooterLinks from './footer-links/footer-links.js'


export default class Login extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <h1>Returning Customer</h1>
            <h1>New Customer</h1>
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
