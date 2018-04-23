import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class Category extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="category-header-text">
            <h1>Category Page</h1>
          </div>
          <div className="category-para">
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
            </ul>
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
