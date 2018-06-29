import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class prodID1635 extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>


          <div className="content-area-container3">
            <div id="individual_product_page">
              <div className="individual-product">
                <div className="individual_product_listing">
                  <div className="individual_product_entry">


                    <div id="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1635_144x85.jpg" alt="25HP Air Compressor"></img>
                      <p>Catalog Number: 25VFD</p>
                    </div>

                    <div className="individual-product-details">
                      <h2 className="individual-product-title">25HP Air Compressor</h2>
                      <h4 className="product-brand-title">Sullivan-Palatek</h4>


                    <div className="individual-product-description">
                      <ul>
                        <li><strong>CFM</strong>: 115 CFM @ 125 psi</li>
                        <li><strong>SCFM</strong>: 25</li>
                        <li><strong>Voltage</strong>: 208/230/460V</li>
                        <br />
                        <li>Floor mounted 25HP rotary screw air compressor,<br />air cooled VSD</li>
                        <br />
                        <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                        <br />

                      </ul>
                    </div>
                      <h4 className="individual-product-suggested-retail-price">MSRP: $25,536.00</h4>
                      <h4 className="individual-product-savings">Savings: <strong>$10,602.67</strong></h4>
                      <h3 className="individual-product-actual-price"><strong>$14,933.33</strong></h3>
                  </div>
                </div>


              </div>
              <div id="quantity-input-group">
                <form action="/action_page.php">
                  Quantity:
                  <input type="number" className="quantityBox" value="0" />
                </form>
                <div id="add-to-cart">
                  <input type="submit" value="Add To Cart" />
                </div>
              </div>

            </div>
          </div>

          {/* <div id="replacement_items_section">
            <h4 className="replacement_items_header">Accessories</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
                <h6 className="replacement_item_brand_name">Trident</h6>
                <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
              </div>
            </div>
          </div>


      </div> */}
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
