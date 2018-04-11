import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import placeholder from '../img/compressor_placeholder.jpg';


export default class QuantityBox extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>

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
              <h4 className="individual-product-title"><a href="/individual_product">Product Title</a></h4>
              <h6 className="individual-product-suggested-retail-price">MSRP: $0.00</h6>
              <h6 className="individual-product-savings">Savings: <strong>$0.00</strong></h6>
              <h6 className="individual-product-actual-price"><strong>$0.00</strong></h6>
              <div className="individual-product-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lobortis quam, at suscipit diam. Cras sit amet quam faucibus risus consectetur fermentum placerat quis quam. Maecenas eget commodo ligula. Mauris semper ipsum tortor, vel maximus libero ultricies non. Aliquam.</p>
              </div>

            </div>

          </div>
        </div>

        <div className="quantity-input-group">
          {/* <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                  <span className="glyphicon glyphicon-minus"></span>
              </button>
          </span>
          <input type="text" className="quant[1]" className="form-control input-number" value="1" min="1" max="10" />
          <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                  <span className="glyphicon glyphicon-plus"></span>
              </button>
          </span> */}
      </div>


        <div className="add-to-cart">
          <button type="submit">Add To Cart</button>
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
