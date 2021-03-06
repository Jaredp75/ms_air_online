import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class prodID1714 extends React.Component {

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
                      <img src="https://www.msaironline.com/images/prodImage/1714_144x85.jpg" alt="Dryspell 250A"></img>
                      <p>Catalog Number: PD234</p>
                    </div>


                    <div className="individual-product-details">
                      <h2 className="individual-product-title">Dryspell 250A</h2>
                      <h4 className="product-brand-title">Trident</h4>
                      {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
                      {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

                    <div className="individual-product-description">
                      <ul>
                        <li><strong>Dewpoint</strong>: (-40 Degrees F)</li>
                        <li><strong>Flow</strong>: 250 scfm</li>
                        <li><strong>Max PSI</strong>: 232 PSI</li>
                        <li><strong>Voltage</strong>: 100-240 VAC 50/60 Hz 1 Ph</li>
                        <br />
                        <li>Dryer includes controller with purge economizer.</li>
                        <br />
                        <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                      </ul>
                    </div>
                    <h3 className="individual-product-actual-price"><strong>$9,970.22</strong></h3>
                    <br />
                    <br />
                    <div className="trident_fliers">
                      <h6><strong>Files</strong>:</h6>
                        <div className="flier_name"><a href="http://www.msaironline.com/files/26.pdf" target="_blank" rel="noopener noreferrer"><img src="http://www.msaironline.com/images/pdf.jpg" alt="pdf"></img></a></div>
                          <h6><a href="http://www.msaironline.com/files/26.pdf" target="_blank" rel="noopener noreferrer">Dryspell Plus Brochure</a></h6>
                          <br />
                        <div className="flier_name"><a href="http://www.msaironline.com/files/36.pdf" target="_blank" rel="noopener noreferrer"><img src="http://www.msaironline.com/images/pdf.jpg" alt="pdf"></img></a></div>
                          <h6><a href="http://www.msaironline.com/files/36.pdf" target="_blank" rel="noopener noreferrer">Dryspell Plus 250 Fact Sheet R1</a></h6>
                    </div>
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
            <h4 className="replacement_items_header">Accessories</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img src="http://www.msaironline.com/images/prodImage/1704_144x85.jpg" alt="350 SCFM Particulate Filter"></img>
                </div>
                <div className="replacement_item_details">
                  <h6 className="replacement_item_title"><a href="/prodID8">350 SCFM Particulate Filter</a></h6>
                  <h6 className="replacement_item_brand_name">Trident</h6>
                  <h6 className="replacement_item_actual_price"><strong>$430.18</strong></h6>
                </div>
              </div>
            </div>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img src="http://www.msaironline.com/images/prodImage/1720_144x85.jpg" alt="350 SCFM Coalescing Filter"></img>
                </div>
                <div className="replacement_item_details">
                  <h6 className="replacement_item_title"><a href="/prodID8">350 SCFM Coalescing Filter</a></h6>
                  <h6 className="replacement_item_brand_name">Trident</h6>
                  <h6 className="replacement_item_actual_price"><strong>$430.18</strong></h6>
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
