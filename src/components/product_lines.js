import React from "react";
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class ProductLines extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      category: []
    };
  }


  componentDidMount() {
    fetch('')
  }







  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <h1>Product Lines</h1>
          </div>
          <div className="product-para"><p>TEXT</p>

              <select className="product_subcats">
                <option>OPTION 1</option>
                <option>OPTION 2</option>
                <option>OPTION 3</option>
              </select>


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
