import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class Checkout extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase04.gif' alt='Purchase Information' />
          </div>

          <div className="replacement_parts_header">
            <h1>Order Complete</h1>
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
