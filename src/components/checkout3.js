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
            <img src='https://www.msaironline.com/images/purchase03.gif' alt='Purchase Information' />
          </div>
          <br />
          <br />
          <div className="checkout-header">
            <strong>Shipping Address</strong>
          </div>



        <form method='POST' action='checkout2.php'>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="inputFirstName"><strong>* First Name</strong></label>
              <input type="text" className="form-control" id="inputFirstName" placeholder="First name" />
            </div>

              <div className="form-group col-md-6">
              <label className="inputLastName"><strong>* Last Name</strong></label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Last name" />
            </div>
          </div>

          <div className="form-group">
            <label className="inputAddress"><strong>* Address</strong></label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>

          <div className="form-group">
            <label className="inputAddress2"><strong>* Address 2</strong></label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>


          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="inputCity"><strong>* City</strong></label>
              <input type="text" className="form-control" id="inputCity" />
            </div>


            <div className="form-group col-md-4">
              <label className="inputState"><strong>* State</strong></label>
              <select type="text" id="inputState" className="form-control">
                <option defaultValue>Choose...</option>
                <option value="1">Alabama</option>
                <option value="2">Alaska</option>
                <option value="3">Arizona</option>
                <option value="4">Arkansas</option>
                <option value="5">California</option>
                <option value="6">Colorado</option>
                <option value="7">Connecticut</option>
                <option value="8">Delaware</option>
                <option value="9">District of Columbia</option>
                <option value="10">Florida</option>
                <option value="11">Georgia</option>
                <option value="12">Guam</option>
                <option value="13">Hawaii</option>
                <option value="14">Idaho</option>
                <option value="15">Illinois</option>
                <option value="16">Indiana</option>
                <option value="17">Iowa</option>
                <option value="18">Kansas</option>
                <option value="19">Kentucky</option>
                <option value="20">Louisiana</option>
                <option value="21">Maine</option>
                <option value="22">Maryland</option>
                <option value="23">Massachusetts</option>
                <option value="24">Michigan</option>
                <option value="25">Minnesota</option>
                <option value="26">Mississippi</option>
                <option value="27">Missouri</option>
                <option value="28">Montana</option>
                <option value="29">Nebraska</option>
                <option value="30">Nevada</option>
                <option value="31">New Hampshire</option>
                <option value="32">New Jersey</option>
                <option value="33">New Mexico</option>
                <option value="34">New York</option>
                <option value="35">North Carolina</option>
                <option value="36">North Dakota</option>
                <option value="37">Northern Marianas Islands</option>
                <option value="38">Ohio</option>
                <option value="39">Oklahoma</option>
                <option value="40">Oregon</option>
                <option value="41">Pennsylvania</option>
                <option value="42">Puerto Rico</option>
                <option value="43">Rhode Island</option>
                <option value="44">South Carolina</option>
                <option value="45">South Dakota</option>
                <option value="46">Tennessee</option>
                <option value="47">Texas</option>
                <option value="48">Utah</option>
                <option value="49">Vermont</option>
                <option value="50">Virginia</option>
                <option value="51">Virgin Islands</option>
                <option value="52">Washington</option>
                <option value="53">West Virginia</option>
                <option value="54">Wisconsin</option>
                <option value="55">Wyoming</option>
              </select>
            </div>

            <div className="form-group col-md-2">
              <label className="inputZip"><strong>* Zip</strong></label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Preview Order</button>







        </form>




























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
