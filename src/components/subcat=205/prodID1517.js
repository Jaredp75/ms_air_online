import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class prodID1517 extends React.Component {

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
                      <img src="https://www.msaironline.com/images/prodImage/1517_144x85.jpg" alt="ZTF Replacement Element for ZTF1250P"></img>
                      <p>Catalog Number: E1250P</p>
                    </div>


                    <div className="individual-product-details">
                      <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1250P</h2>
                      <h4 className="product-brand-title">Zeks</h4>
                      {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
                      {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

                    <div className="individual-product-description">
                      <ul>
                        <li>ZTF Replacement Element</li>
                      </ul>
                    </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $453.00</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$158.55</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$294.45</strong></h3>
                  </div>
                  <br />

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
              <br />
              <br />
              <img src="../zeks_logo.png" alt="Zeks logo"/>
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

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
              </div>
            <div className="replacement_item_details">
              <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
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
