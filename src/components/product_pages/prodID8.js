import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';
// import QuantityBox from './quantity_box.js';
// import placeholder from '../img/compressor_placeholder.jpg';


export default class prodID8 extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">
          <div id="individual_product_page">
          <div className="individual-product">
            <div className="individual_product_listing">
              <div className="individual_product_entry">


            <div className="product-image">
              <img src="https://www.msaironline.com/images/prodImage/8_144x85.jpg" alt="Quick Connect 500 Vacuum Wall Outlet"></img>
              <p>Catalog Number: 64-01-5002</p>
            </div>


            <div className="individual-product-details">
              <h2 className="individual-product-title">Quick Connect 500 Vacuum Wall Outlet</h2>
              <h4 className="product-brand-title">Chemetron</h4>
              <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$48.38</strong></h3>
              <div className="individual-product-description">
                <ul>
                  <li><strong>Gas Type</strong>: Vacuum</li>
                  <li><strong>Item Type</strong>: Wall Outlet</li>
                  <li><strong>Series</strong>: Chemetron 500</li>
                  <li><strong>Style</strong>: Quick Connect</li>
                  <br />
                  <li>Quick Connect Style 500 Series</li>
                  <br />
                  <li><b>CHEMETRON WALL OUTLET</b> - Quick Connect Style 500 Series<br /> Quick-Connect Outlet Stations are complete with rough-in box, copper pigtail, test plug, plaster shield, valve, secondary check, and finish cover plate with latching mechanism. Each outlet is a modular design, and outlets are field gangable.</li>
                </ul>


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
        <h4 className="replacement_items_header">Related Items</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/11_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Medical Air Wall Outlet"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Medical Air Wall Outlet</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/47_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Bottle Slide Assembly"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Bottle Slide Assembly</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/283_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Completion Kit"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Completion Kit</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/284_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Rough In Kit - Vacuum"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Rough In Kit - Vacuum</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/294_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Wall Outlet w/ New Style Cover Plate"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Wall Outlet w/ New Style Cover Plate</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div>
    </div>


    <div className="replacement_parts_section">
      <h1 className="replacement_parts_header">Replacement Parts</h1>
      {/* <div className="replacement_parts_image">
        <img src="http://www.msaironline.com/images/assembly/QuickConnect_400_Series.jpg" alt="Quick Connect"></img>
      </div> */}


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/18_144x85.jpg" alt="Secondary Check Kit (6 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Secondary Check Kit (6 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/15_144x85.jpg" alt="Housing base O-ring (12 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Housing base O-ring (12 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/16_144x85.jpg" alt="Quick Connect Poppet 500 Series"></img>
        </div>

        <h4 className="replacement_parts_name">Quick Connect Poppet 500 Series</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/17_144x85.jpg" alt="Poppet O-ring Kit (12 each) - Quick Connect 500"></img>
        </div>

        <h4 className="replacement_parts_name">Poppet O-ring Kit (12 each) - Quick Connect 500</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/20_144x85.jpg" alt="Valve body with poppet-vacuum"></img>
        </div>

        <h4 className="replacement_parts_name">Valve body with poppet-vacuum</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>

      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/22_144x85.jpg" alt="Valve body O-ring kit (12 each)g"></img>
        </div>

        <h4 className="replacement_parts_name">Valve body O-ring kit (12 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/26_144x85.jpg" alt="Vacuum face plate assembly"></img>
        </div>

        <h4 className="replacement_parts_name">Vacuum face plate assembly</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/34_144x85.jpg" alt="Face Plate Springs (12 per pack)"></img>
        </div>

        <h4 className="replacement_parts_name">Face Plate Springs (12 per pack)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/35_144x85.jpg" alt="Face plate mounting screw kit (48 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Face plate mounting screw kit (48 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/36_144x85.jpg" alt="Vacuum Spring Kit (6 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Vacuum Spring Kit (6 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/37_144x85.jpg" alt="Test plug kit (12 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Test plug kit (12 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/51_144x85.jpg" alt="Back Box Mounting Screws & Fastner Kit (24 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Back Box Mounting Screws & Fastner Kit (24 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Qty</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>









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
