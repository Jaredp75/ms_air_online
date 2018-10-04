import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

class Checkout3 extends Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase03.gif' alt='Purchase Information' />
          </div>

          <div className="replacement_parts_header">
            <h1>Billing Information</h1>
          </div>

            <form method="POST" className="billing-information" action="checkout3.php">
              <fieldset>
                <div className="form-group col-md-6">
                  <label className="CardType"><strong>* Card Type</strong>    <i className="fab fa-cc-mastercard" />  |  <i className="fab fa-cc-visa" /></label>
                  <select type="text" className="form-control" id="inputCardType">
                    <option defaultValue>Choose...</option>
                    <option value="1">MasterCard</option>
                    <option value="2">VISA</option>
                  </select>
                </div>

                <div className="form-group col-md-6" id="card-number-field">
                  <label className="cardNumber"><strong>* Card Number</strong></label>
                  <input type="text" className="form-control" id="inputCardNumber" placeholder="1111-2222-3333-4444" />
                </div>

                <div className="form-group col-md-6" id="expiration-date">
                  <label className="expyDate"><strong>* Expiration Date</strong></label><br />
                  <select>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>

                  <select>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label className="cvv"><strong>* Security Code (CVV)</strong></label>
                  <input type="text" className="form-control" id="cvv" placeholder="352" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input type="text" className="form-control" id="inputFirstName" placeholder="First name" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input type="text" className="form-control" id="inputLastName" placeholder="Last name" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>* Address</strong></label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>* Address 2</strong></label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                  <input type="text" className="form-control" id="inputCity" placeholder="New York" />
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
                  <input type="text" className="form-control" id="inputZip" placeholder="10001" />
                </div>

                <div className="form-group col-md-2">
                  <label className="inputPhone"><strong>* Phone</strong></label>
                  <input type="text" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                </div>



              </fieldset>
            </form>


            <div className="replacement_parts_header">
              <h1>Shipping Information</h1>
            </div>

            <form method="POST" className="shipping-information" action="checkout3.php">
              <fieldset>

                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input type="text" className="form-control" id="inputFirstName" placeholder="First name" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input type="text" className="form-control" id="inputLastName" placeholder="Last name" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>* Address</strong></label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>* Address 2</strong></label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="inputCity"><strong>* City</strong></label>
                    <input type="text" className="form-control" id="inputCity" placeholder="New York" />
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
                  <input type="text" className="form-control" id="inputZip" placeholder="10001" />
                </div>

                <div className="form-group col-md-2">
                  <label className="inputPhone"><strong>* Phone</strong></label>
                  <input type="text" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                </div>
              </div>

              <div className="order-summary-table">
                <div className="replacement_parts_header">
                  <h1>Review Order</h1>
                </div>
                <table className="table table-hover">
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

              <div className="terms-and-conditions-checkbox">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="terms-checkbox" />
                    <label className="form-check-label">
                      I agree to the Order Terms and Conditions
                    </label>
                  </div>
                </div>


                <div className="order-confirmation-button" id="pay-now">
                  <button className="btn btn-primary" type="submit" id="confirm-purchase"><h4>Confirm</h4></button>
                </div>









              </fieldset>



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

export default Checkout3;
