import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class prodID1776 extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>


          <div className="content-area-container">
            <div id="individual_product_page">
              <div className="individual-product">
                <div className="individual_product_listing">
                  <div className="individual_product_entry">


                    <div className="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1776_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                      <p>Catalog Number: ZFC45G</p>
                    </div>


                    <div className="individual-product-details">
                      <h2 className="individual-product-title">ZFC Compressed Air Filter</h2>
                      <h4 className="product-brand-title">Zeks</h4>

                    <div className="individual-product-description">
                      <ul>
                        <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                        <li><strong>Connection In/Out</strong>: 3/4"</li>
                        <li><strong>Elements Required Per Filter</strong>: 1</li>
                        <li><strong>Filter Length</strong>: 11.03"</li>
                        <li><strong>Filter Width</strong>: 3.86"</li>
                        <li><strong>Flow SCFM</strong>: 45</li>
                        <li><strong>Side Drain Port</strong>: N/A</li>
                        <br />
                        <li>ZFC Compressed Air Filter for General Purpose Filtration.</li>
                      </ul>
                    </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $261.00</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$91.35</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$169.65</strong></h3>
                  </div>
                </div>

                <div className="quantity-input-group">
                  <form action="/action_page.php">
                    Quantity:
                    <input type="number" className="quantityBox"/>
                  </form>
                </div>
              </div>

              <div className="add-to-cart">
                <input type="submit" value="Add To Cart" />
              </div>
            </div>
          </div>

          <div className="replacement_items_section">
            <h4 className="replacement_items_header">Replacement Parts</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img className="filter" src="http://www.msaironline.com/images/prodImage/1840_144x85.jpg" alt="ZFC Replacement Element"></img>
                  <p>Catalog Number: EC45G</p>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/subcat=233/prodID1840">ZFC Replacement Element</a></h6>
                <h6 className="replacement_item_brand_name">Zeks</h6>
                <div className="individual-product-description">
                  <ul>
                    <li>ZFC Replacement Element for ZFC45</li>
                  </ul>
                </div>
                <h6 className="individual-product-suggested-retail-price">MSRP: $50.00</h6>
                <h6 className="replacement_item_actual_price"><strong>$32.50</strong></h6>
              </div>
            </div>
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