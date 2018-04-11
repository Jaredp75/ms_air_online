import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
// import QuantityBox from './quantity_box.js';
import placeholder from '../img/compressor_placeholder.jpg';


export default class IndividualProduct extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">
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
              <img src={ placeholder } alt="product-placeholder"></img>
            </div>
            <div className="individual-product-details">
              <h2 className="individual-product-title">Product Title</h2>
              <h4 className="individual-product-suggested-retail-price">MSRP: $0.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$0.00</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$0.00</strong></h3>
              <div className="individual-product-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lobortis quam, at suscipit diam. Cras sit amet quam faucibus risus consectetur fermentum placerat quis quam. Maecenas eget commodo ligula. Mauris semper ipsum tortor, vel maximus libero ultricies non. Aliquam.</p>
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
