import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
// import QuantityBox from './quantity_box.js';
// import placeholder from '../img/compressor_placeholder.jpg';


export default class prodID409 extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">
          <div className="individual_product_page">
          <div className="individual-product">
            <div className="individual_product_listing">
              <div className="individual_product_entry">
                {/* <div className="product-image">
                  <img src={ placeholder } alt="product-placeholder"></img>
                </div>
                <div className="product-details">
                  <h2 className="product-title">{.} {.}</h2>
                  <h4 className="product-suggested-retail-price">{.}</h4>
                  <h4 className="product-savings">Savings: {.}</h4>
                  <h4 className="product-actual-price">{.}</h4>
                </div> */}

            <div className="product-image">
              <img src="https://www.msaironline.com/images/prodImage/409_144x85.jpg" alt="product-placeholder"></img>
            </div>
            <div className="individual-product-details">
              <h2 className="individual-product-title">Quick-Connect 400 Oxygen Wall Outlet Station</h2>
              <h4 className="product-brand-title">Chemetron</h4>
              <h4 className="individual-product-suggested-retail-price">MSRP: $77.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$33.69</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$43.31</strong></h3>
              <div className="individual-product-description">
                <p>* Single - 400 Series - Top Inlet<br /> * Quick-Connect Outlet Stations are complete with rough-in box, copper pigtail for brazing, test plug, plaster shield, valve, secondary check, and finish cover plate with latching mechanism.</p>

              </div>
            </div>
          </div>

          <div className="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
          </div>
        </div>

        <div className="add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </div>
    </div>

      <div className="replacement_items_section">
        <h4 className="replacement_items_header">Replacement Items</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/414_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">Quick-Connect 400 Nitrous Oxide Wall Outlet Station</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/415_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">Quick-Connect 400 Nitrogen, Dynacon Wall Outlet Station</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/416_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">Quick-Connect 400 WAGD Wall Outlet Station</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/417_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">Quick-Connect 400 Oxygen Wall Outlet Station (ISO Color)</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
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
