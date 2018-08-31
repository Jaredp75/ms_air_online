import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class ViewCart extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>


          <div className="replacement_parts_header">
            <h1>Shopping Cart</h1>
          </div>
          <div className="order-complete-table">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="row"></th>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Sample data</td>
                  <td>1</td>
                  <td>$0.00</td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Sample data</td>
                  <td>1</td>
                  <td>$0.00</td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sample data</td>
                  <td>1</td>
                  <td>$0.00</td>
                  <td>$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>


          <div className="shopping-cart-note">
            <p><strong>Note</strong>: If you are purchasing product for a Tax Exempt project, and can provide documentation of same, please contact MS Air toll free at <strong>(877) 672-4799</strong>.</p>
          </div>

            <div className="shopping-cart-buttons">
              <button type="button" className="btn btn-primary">Update Cart</button>
              <button type="button" className="btn btn-primary">Empty Cart</button>
                <a href="/checkout1"><button type="button" className="btn btn-primary">Next</button></a>
            </div>


            <div className="coupon-code-box">
              <div class="form-group">
                <label className="couponCode" class="col-sm-2 col-form-label">Coupon Code</label>
                  <div class="col-md-10">
                    <input type="text" className="form-control" id="inputCoupon" />
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
