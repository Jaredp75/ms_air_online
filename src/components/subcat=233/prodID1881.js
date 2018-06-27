import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class prodID1881 extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>


          <div className="content-area-container2">
            <div id="individual_product_page">
              <div className="individual-product">
                <div className="individual_product_listing">
                  <div className="individual_product_entry">


                    <div id="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1881_144x85.jpg" alt="ZFC Replacement Element"></img>
                      <p>Catalog Number: EC710H</p>
                    </div>


                    <div className="individual-product-details">
                      <h2 className="individual-product-title">ZFC Replacement Element</h2>
                      <h4 className="product-brand-title">Zeks</h4>

                    <div className="individual-product-description">
                      <ul>
                        {/* <li><strong>Bottom Drain Port</strong>: 1/4"</li> */}
                        {/* <li><strong>Connection In/Out</strong>: 1/2"</li> */}
                        {/* <li><strong>Elements Required Per Filter</strong>: 1</li> */}
                        {/* <li><strong>Filter Length</strong>: 8.86"</li> */}
                        {/* <li><strong>Filter Width</strong>: 2.99"</li> */}
                        {/* <li><strong>Flow SCFM</strong>: 22</li> */}
                        {/* <li><strong>Side Drain Port</strong>: N/A</li> */}
                        {/* <br /> */}
                        <li>ZFC Replacement Element for ZFC710</li>
                        {/* <br /> */}
                        {/* <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li> */}
                      </ul>
                    </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $284.00</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$99.40</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$184.60</strong></h3>
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

          <div id="replacement_items_section">
            <h4 className="replacement_items_header">Replacement Parts</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img className="filter" src="http://www.msaironline.com/images/prodImage/1817_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                  <p>Catalog Number: ZFC710H</p>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/subcat=233/prodID1817">ZFC Compressed Air Filter</a></h6>
                <h6 className="replacement_item_brand_name">Zeks</h6>
                <div className="individual-product-description">
                  <ul>
                    <li>ZFC Compressed Air Filter for High Efficiency Filtration.</li>
                  </ul>
                </div>
                <h6 className="individual-product-suggested-retail-price">MSRP: $1,285.00</h6>
                <h6 className="replacement_item_actual_price"><strong>$835.25</strong></h6>
              </div>
            </div>
          </div>
      </div>

          {/* <div className="replacement_items_section">
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
