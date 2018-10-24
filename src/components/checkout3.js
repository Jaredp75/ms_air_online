import React from "react";
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

export default class Checkout3 extends React.Component {
  constructor() {
    super()
    this.state = {
	  products: null,
	  totals: null,
	  first: "",
      last: "",
	  company: "",
      email: "",
      street1: "",
      street2: "",
      city: "",
      state: null,
      zipcode: "",
      shipping: null,
	  states: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    };
	
  }
  componentDidMount() {
		this.getShipping();
		this.getCart();
  }
  getShipping(){
	  var url = Utilities.getApiURL('checkout.php', '');
        fetch(url, {
			method: 'GET', 
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
		})
    .then(results => {
      return results.json();
    }).then(data => {
		var states = this.state.states.map((state) =>{
			if(state===data.shipping.state)
				return(<option selected='selected'>{state}</option>);
			else
				return(<option>{state}</option>);
		});
		this.setState({first: data.shipping.first});
		this.setState({last: data.shipping.last});
		this.setState({company: data.shipping.company});
		this.setState({street1: data.shipping.street1});
		this.setState({street2: data.shipping.street2});
		this.setState({city: data.shipping.city});
		this.setState({state: data.shipping.state});
		this.setState({states: states});
		this.setState({zip: data.shipping.zip});
		this.setState({phone1: data.shipping.phone1});
		this.setState({phone2: data.shipping.phone2});
		this.setState({phone3: data.shipping.phone3});
	})	
  }
  getCart(data){
  	var url = Utilities.getApiURL('cart.php', '');
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.setCart(data);
    })
  }
  setCart(data){
	  var error = null;
	  if(data.error){
		error = (<div>{data.error.message}</div>)
		this.setState({error: error});
	  }
	  if(data.product){
      let products = data.product.map((pic) => {
		return(
				<tr>
                  <td>{pic.prodName} {pic.prodID}</td>
                  <td>{pic.qty}</td>
                  <td >{pic.prodPrice}</td>
                  <td >{pic.prodPrice * pic.qty}</td>
				</tr>
		)
	  	})
		this.setState({products: products});
        console.log("state", this.state.products);
	  } else{
		  	let products = null
			this.setState({products: products});
	  }
	  var totals = null
	  var discount = null
	  var min_order_fee = null
	  var tax = null
	  var shipping = null
	  var subtotal = null
	  if(data.totals) {
		  if(data.totals.discount > 0)
			  discount = (<div>Discount: {data.totals.discount} </div>)
		  if(data.totals.min_order_fee)
			  min_order_fee = (<div>Min Order Fee: {data.totals.min_order_fee} </div>)
		  if(data.totals.taxes_and_handling)
			  tax = (<div>Taxes & Handling: {data.totals.taxes_and_handling}</div>)
		  if(data.totals.freight)
			  shipping = (<div>{data.totals.shipping_method}: {data.totals.freight}</div>)
		  if(data.totals.cart_subtotal)
			  subtotal = (<div>Subtotal: {data.totals.cart_subtotal}</div>)
		  totals = (
					<div>
						{subtotal}
						{min_order_fee}
						{discount}
						{tax}
						{shipping}
						Total: {data.totals.total}
					</div>
			  )
	  }
	  this.setState({totals: totals});

  }
  setBilling(){
  }
  completeOrder(){
  }
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

                  <select className="expyYear">
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
                  <input type="text" className="form-control" id="inputFirstName" defaultValue={this.state.first} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input type="text" className="form-control" id="inputLastName" defaultValue={this.state.last} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>* Address</strong></label>
                  <input type="text" className="form-control" id="inputAddress" defaultValue={this.state.street1} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>Address 2</strong></label>
                  <input type="text" className="form-control" id="inputAddress2" defaultValue={this.state.street2} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                  <input type="text" className="form-control" id="inputCity" defaultValue={this.state.city} />
                </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>* State</strong></label>
                  <select type="text" id="inputState" className="form-control">
					{this.state.states}
                  </select>
                </div>

                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>* Zip</strong></label>
                  <input type="text" className="form-control" id="inputZip" defaultValue={this.state.zip} />
                </div>


                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="inputPhone"><strong>* Phone</strong></label>
                      <input name="phone1" type="text" className="form-control" id="inputPhone1" defaultValue={this.state.phone1} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone2">Phone 2</label>
                      <input name="phone2" type="text" className="form-control" id="inputPhone2" defaultValue={this.state.phone2} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone3"><strong>Phone 3</strong></label>
                      <input name="phone3" type="text" className="form-control" id="inputPhone3" defaultValue={this.state.phone3} pattern="[0-9]{4}" />
                  </div>
                </div>



              </fieldset>


            <div className="replacement_parts_header">
              <h1>Shipping Information</h1>
            </div>

              <fieldset>

                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>First Name</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputFirstName" value={this.state.first} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>Last Name</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputLastName" value={this.state.last} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>Address</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputAddress" value={this.state.street1} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>Address 2</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputAddress2" value={this.state.street2} />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="inputCity"><strong>City</strong></label>
                    <input readonly='readonly' type="text" className="form-control" id="inputCity" value={this.state.city} />
                  </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>State</strong></label>
				  <input readonly='readonly' type="text" className="form-control" value={this.state.state} />
                </div>

                <div className="form-group col-md-4">
                  <label className="inputZip"><strong>Zip</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputZip" value={this.state.zip} />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="inputPhone"><strong>Phone</strong></label>
                      <input name="phone1" readonly='readonly' type="text" className="form-control" id="inputPhone1" value={this.state.phone1} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone2">Phone 2</label>
                      <input name="phone2" readonly='readonly' type="text" className="form-control" id="inputPhone2" value={this.state.phone2} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone3"><strong>Phone 3</strong></label>
                      <input name="phone3" readonly='readonly' type="text" className="form-control" id="inputPhone3"value={this.state.phone3} pattern="[0-9]{4}" />
                  </div>
                </div>
				<div><a href='checkout1'>Edit Shipping Address</a></div>
              </div>

              <div className="order-summary-table">
                <div className="replacement_parts_header">
                  <h1>Review Order</h1>
                </div>
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
				  {this.state.products}
                  </tbody>
                </table>
              </div>
				<div>
				{this.state.totals}
				</div>
              <div className="terms-and-conditions-checkbox">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="terms-checkbox" />
                    <label className="form-check-label">
                      <p>I agree to the Order Terms and Conditions</p>
                    </label>
                  </div>
                </div>


                <div className="order-confirmation-button" id="pay-now">
                  <button className="btn btn-primary" type="submit" id="confirm-purchase"><h4>Confirm</h4></button>
                </div>









              </fieldset>














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
