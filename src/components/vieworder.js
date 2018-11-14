import React from "react";
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

export default class Checkout3 extends React.Component {
  constructor() {
    super()
    this.state = {
	  billing: null,
	  products: null,
	  totals: null,
	  first: null,
      last: null,
	  company: null,
      email: null,
      street1: null,
      street2: null,
      city: null,
      state: null,
      zipcode: null,
	  phone: null,
	  card_type: null,
	  card_num: null,
	  card_exp: null,

	  sfirst: null,
      slast: null,
	  scompany: null,
      sstreet1: null,
      sstreet2: null,
      scity: null,
      sstate: null,
      szipcode: null,
	  sphone:null,

      shipping: null,
	  exp_month: 1,
	  exp_year:(new Date().getFullYear()),
	  terms_conds: false,
	  states: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
	  confirmation_page:""
    };

  }
  componentDidMount() {
		if(Utilities.getUrlParam('confirm')===1) {
			var confirmation_page = (
			          <div className="checkout-header-image">
						<img src='https://www.msaironline.com/images/purchase04.gif' alt='Purchase Information' />
					</div>);
			this.setState({confirmation_page: confirmation_page});
		}
		var url = Utilities.getApiURL('history.php', '?id='+Utilities.getUrlParam('id'));
		this.getOrder(url);
  }
  getOrder(url){
        fetch(url, {
			method: 'GET',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
		})
    .then(results => {
      return results.json();
    }).then(data => {
		this.setOrderDetails(data);
		this.setCart(data);
	})
  }
  setOrderDetails(data){
	  	this.setState({sfirst: data.shipping[0].os_first});
		this.setState({slast: data.shipping[0].os_last});
		this.setState({scompany: data.shipping[0].os_company});
		this.setState({sstreet1: data.shipping[0].os_address1});
		this.setState({sstreet2: data.shipping[0].os_address2});
		this.setState({scity: data.shipping[0].os_city});
		this.setState({sstate: data.shipping[0].os_state});
		this.setState({szip: data.shipping[0].os_zip});
		this.setState({sphone: data.shipping[0].os_phone});

		this.setState({first: data.billing[0].ob_first});
		this.setState({last: data.billing[0].ob_last});
		this.setState({email: data.billing[0].ob_email});
		this.setState({company: data.billing[0].ob_company});
		this.setState({street1: data.billing[0].ob_address1});
		this.setState({street2: data.billing[0].ob_address2});
		this.setState({city: data.billing[0].ob_city});
		this.setState({state: data.billing[0].ob_state});
		this.setState({zip: data.billing[0].ob_zip});
		this.setState({phone: data.billing[0].ob_phone});

		var card_pre = "************";
		this.setState({card_type: data.billing[0].oc_type});
		this.setState({card_number: card_pre+data.billing[0].oc_number});
		this.setState({card_exp: data.billing[0].oc_exp_month+"/"+data.billing[0].oc_exp_year});
  }
  setCart(data){

      let products = data.products.map((pic) => {
		return(
				<tr>
                  <td>{pic.prodName} {pic.prodID}</td>
                  <td>{pic.op_qty}</td>
                  <td>{pic.op_price}</td>
                  <td>{pic.amt}</td>
				</tr>
		)
	  	})
		this.setState({products: products});
        console.log("state", this.state.products);

	  var totals = null
	  var discount = null
	  var min_order_fee = null
	  var tax = null
	  var shipping = null
	  var subtotal = null
		  if(data.summary[0].discount > 0)
			  discount = (<div><b>Discount</b>: ${data.summary[0].discount} </div>)
		  if(data.summary[0].order_min > 0)
			  min_order_fee = (<div><b>Min Order Fee</b>: ${data.summary[0].order_min} </div>)
		  if(data.summary[0].order_tax > 0)
			  tax = (<div><b>Taxes & Handling</b>: ${data.summary[0].order_tax}</div>)
		  if(data.shipping[0].os_amount > 0)
			  shipping = (<div><b>{data.shipping[0].service}</b>: ${data.shipping[0].os_amount}</div>)
		  totals = (
					<div>
						{subtotal}
						{min_order_fee}
						{discount}
						{tax}
						{shipping}
						<div><b>Total</b>: ${data.summary[0].order_due}</div>
					</div>
			  )
	  this.setState({totals: totals});

  }
  setBilling(){
  }
  completeOrder(data){
	  if(data.order.status === true && data.order.invoice > 10000){
			//TODO -redirect to order complete page
	  } else{
		  //TODO - check order history / wait and resent order / other?
	  }
  }
  render(){

    return(
      <div>

        <div className = 'content-area-container'>

		{this.state.confirmation_page}
          <div className="replacement_parts_header">
            <h1>Billing Information</h1>
          </div>


			  <fieldset>
          <div className="form-group col-md-6">
            <label className="CardType"><strong>* Card Type</strong>    <i className="fab fa-cc-mastercard" />  |  <i className="fab fa-cc-visa" /></label>
              <input readonly='readonly' name='card_type' type="text" className="form-control" id="inputCardType" value={this.state.card_type}/>
          </div>

          <div className="form-group col-md-6" id="card-number-field">
            <label className="cardNumber"><strong>* Card Number</strong></label>
              <input readonly='readonly' name='card_number' type="text" className="form-control" id="inputCardNumber" value={this.state.card_number} />
          </div>

          <div className="form-group col-md-6" id="expiration-date">
            <label className="expyDate"><strong>* Expiration Date</strong></label><br />
              <input readonly='readonly' name='card_number' type="text" className="form-control" id="inputCardNumber" value={this.state.card_exp} />
          </div>

          <div className="form-group col-md-6" id="cvv">
            <label className="expyDate"><strong>* CVV</strong></label><br />
              <input readonly='readonly' name='card_number' type="text" className="form-control" id="inputCardNumber" value={this.state.card_cvv} />
          </div>

          <div className="form-group col-md-6">
            <label className="inputFirstName"><strong>* First Name</strong></label>
              <input readonly='readonly' type="text" name='first' className="form-control"  id="inputFirstName" value={this.state.first} />
          </div>

          <div className="form-group col-md-6">
            <label className="inputLastName"><strong>* Last Name</strong></label>
              <input readonly='readonly' type="text" name="last"  className="form-control" id="inputLastName" value={this.state.last} />
          </div>

				  <div className="form-group col-md-6">
            <label className="inputCompany"><strong>Company</strong></label>
              <input readonly='readonly' type="text" name="comapny"  className="form-control" id="inputCompany" value={this.state.company} />
          </div>

          <div className="form-group col-md-6">
            <label className="inputEmail"><strong>* Email</strong></label>
              <input readonly='readonly' type="text" name="email"  className="form-control" id="inputEmail" value={this.state.email} />
          </div>

          <div className="form-group col-md-6">
            <label className="inputAddress"><strong>* Address</strong></label>
              <input readonly='readonly' type="text" name='street1' className="form-control"  id="inputAddress" value={this.state.street1} />
          </div>

          <div className="form-group col-md-6">
            <label className="inputAddress2"><strong>Address 2</strong></label>
              <input readonly='readonly' type="text" name='street2' className="form-control"  id="inputAddress2" value={this.state.street2} />
          </div>

          <div className="form-group col-md-6">
            <label className="inputCity"><strong>* City</strong></label>
              <input readonly='readonly' type="text" name='city' className="form-control"  id="inputCity" value={this.state.city} />
          </div>

          <div className="form-group col-md-4">
            <label className="inputState"><strong>* State</strong></label>
              <input readonly='readonly' type="text" name='state' className="form-control"  id="inputState" value={this.state.state} />
          </div>

          <div className="form-group col-md-2">
            <label className="inputZip"><strong>* Zip</strong></label>
              <input readonly='readonly' name='zip' type="text" className="form-control"  id="inputZip" value={this.state.zip} />
          </div>


          <div className="form-row">
            <div className="form-group col-md-4">
              <label className="inputPhone"><strong>Phone</strong></label>
                <input name="phone1" readonly='readonly' type="text" className="form-control" id="inputPhone1" value={this.state.sp1} pattern="[0-9]{3}" />
            </div>
            <div className="form-group col-md-4">
              <label className="inputPhone2">Phone 2</label>
                <input name="phone2" readonly='readonly' type="text" className="form-control" id="inputPhone2" value={this.state.sp2} pattern="[0-9]{3}" />
            </div>
            <div className="form-group col-md-4">
              <label className="inputPhone3"><strong>Phone 3</strong></label>
                <input name="phone3" readonly='readonly' type="text" className="form-control" id="inputPhone3"value={this.state.sp3} pattern="[0-9]{4}" />
            </div>
          </div>
        </fieldset>



            <div className="replacement_parts_header">
              <h1>Shipping Information</h1>
            </div>

              <fieldset>
                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>First Name</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputFirstName" value={this.state.sfirst} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>Last Name</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputLastName" value={this.state.slast} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>Address</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputAddress" value={this.state.sstreet1} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>Address 2</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputAddress2" value={this.state.sstreet2} />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label className="inputCity"><strong>City</strong></label>
                    <input readonly='readonly' type="text" className="form-control" id="inputCity" value={this.state.scity} />
                  </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>State</strong></label>
				              <input readonly='readonly' type="text" className="form-control" value={this.state.sstate} />
                </div>

                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>Zip</strong></label>
                  <input readonly='readonly' type="text" className="form-control" id="inputZip" value={this.state.szip} />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="inputPhone"><strong>Phone</strong></label>
                      <input name="phone1" readonly='readonly' type="text" className="form-control" id="inputPhone1" value={this.state.sp1} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone2">Phone 2</label>
                      <input name="phone2" readonly='readonly' type="text" className="form-control" id="inputPhone2" value={this.state.sp2} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone3"><strong>Phone 3</strong></label>
                      <input name="phone3" readonly='readonly' type="text" className="form-control" id="inputPhone3"value={this.state.sp3} pattern="[0-9]{4}" />
                  </div>
                </div>

              </div>
              </fieldset>




                <div className="replacement_parts_header">
                  <h1>Order Details</h1>
                </div>

                <fieldset>
                <div className="order-summary-table">
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
				<div className="subtotal-section">
				{this.state.totals}
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
