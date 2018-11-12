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
	  phone1: null,
	  phone2: null,
	  phone3: null,
	  
	  sfirst: null,
      slast: null,
	  scompany: null,
      sstreet1: null,
      sstreet2: null,
      scity: null,
      sstate: null,
      szipcode: null,
	  sp1:null,
	  sp2: null,
	  sp3: null,
	  
      shipping: null,
	  exp_month: 1,
	  exp_year:(new Date().getFullYear()),
	  card_type:"",
	  card_number:"",
	  cvv:"",
	  terms_conds: false,
	  states: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    };
	
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  next(){
 	var url = Utilities.getApiURL('checkout.php', '?do=completePurchase');
	var body = "&first="+this.state.first
					+"&last="+this.state.last
					+"&email="+this.state.email
					+"&company="+this.state.company
					+"&street1="+this.state.street1
					+"&street2="+this.state.street2
					+"&city="+this.state.city
					+"&state="+this.state.state
					+"&zip="+this.state.zip
					+"&phone1="+this.state.phone1
					+"&phone2="+this.state.phone2
					+"&phone3="+this.state.phone3
					+"&exp_month="+this.state.exp_month
					+"&exp_year="+this.state.exp_year
					+"&card_type="+this.state.card_type
					+"&card_number="+this.state.card_number
					+"&cvv="+this.state.cvv
					+"&terms_conds="+this.state.terms_conds;		
    fetch(url, {
			method: 'POST', 
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: body
		})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.handleResponse(data);
    })
  }
  handleResponse(data) {
	  if(data.error)
		  alert("Error: "+data.error.message);
	  else
		  this.completeOrder(data);
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
		this.setState({states: states});
		
		this.setState({sfirst: data.shipping.first});
		this.setState({slast: data.shipping.last});
		this.setState({scompany: data.shipping.company});
		this.setState({sstreet1: data.shipping.street1});
		this.setState({sstreet2: data.shipping.street2});
		this.setState({scity: data.shipping.city});
		this.setState({sstate: data.shipping.state});		
		this.setState({szip: data.shipping.zip});
		this.setState({sp1: data.shipping.phone1});
		this.setState({sp2: data.shipping.phone2});
		this.setState({sp3: data.shipping.phone3});
		
		
		this.setState({first: data.shipping.first});
		this.setState({last: data.shipping.last});
		this.setState({email: data.shipping.email});
		this.setState({company: data.shipping.company});
		this.setState({street1: data.shipping.street1});
		this.setState({street2: data.shipping.street2});
		this.setState({city: data.shipping.city});
		this.setState({state: data.shipping.state});		
		this.setState({zip: data.shipping.zip});
		this.setState({phone1: data.shipping.phone1});
		this.setState({phone2: data.shipping.phone2});
		this.setState({phone3: data.shipping.phone3});
		
		var billing = (  <fieldset>        <div className="form-group col-md-6">
                  <label className="CardType"><strong>* Card Type</strong>    <i className="fab fa-cc-mastercard" />  |  <i className="fab fa-cc-visa" /></label>
                  <select name='card_type' type="text" className="form-control" id="inputCardType" onChange={this.handleChange.bind(this)} >
                    <option defaultValue >Choose...</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="VISA">VISA</option>
                  </select>
                </div>

                <div className="form-group col-md-6" id="card-number-field">
                  <label className="cardNumber"><strong>* Card Number</strong></label>
                  <input name='card_number' type="text" className="form-control" id="inputCardNumber" placeholder="Credit Card Number" onChange={this.handleChange.bind(this)} />
                </div>

                <div className="form-group col-md-6" id="expiration-date">
                  <label className="expyDate"><strong>* Expiration Date</strong></label><br />
                  <select name='exp_month'onChange={this.handleChange.bind(this)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select name='exp_year' className="expyYear" onChange={this.handleChange.bind(this)}>
                    <option value={(new Date().getFullYear())}>{(new Date().getFullYear())}</option>
                    <option value={(new Date().getFullYear())+1}>{(new Date().getFullYear())+1}</option>
                    <option value={(new Date().getFullYear())+2}>{(new Date().getFullYear())+2}</option>
                    <option value={(new Date().getFullYear())+3}>{(new Date().getFullYear())+3}</option>
                    <option value={(new Date().getFullYear())+4}>{(new Date().getFullYear())+4}</option>
                    <option value={(new Date().getFullYear())+5}>{(new Date().getFullYear())+5}</option>
					<option value={(new Date().getFullYear())+6}>{(new Date().getFullYear())+6}</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label className="cvv"><strong>* Security Code (CVV)</strong></label>
                  <input name='cvv' type="text" className="form-control" onChange={this.handleChange.bind(this)} id="cvv" placeholder="CVV" />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input type="text" name='first' className="form-control" onChange={this.handleChange.bind(this)} id="inputFirstName" defaultValue={data.shipping.first} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input type="text" name="last" onChange={this.handleChange.bind(this)} className="form-control" id="inputLastName" defaultValue={data.shipping.last} />
                </div>
				<div className="form-group col-md-6">
                  <label className="inputCompany"><strong>Company</strong></label>
                  <input type="text" name="comapny" onChange={this.handleChange.bind(this)} className="form-control" id="inputCompany" defaultValue={data.shipping.company} />
                </div>
                <div className="form-group col-md-6">
                  <label className="inputEmail"><strong>* Email</strong></label>
                  <input type="text" name="email" onChange={this.handleChange.bind(this)} className="form-control" id="inputEmail" defaultValue={data.shipping.email} />
                </div> 
                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>* Address</strong></label>
                  <input type="text" name='street1' className="form-control" onChange={this.handleChange.bind(this)} id="inputAddress" defaultValue={data.shipping.street1} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>Address 2</strong></label>
                  <input type="text" name='street2' className="form-control" onChange={this.handleChange.bind(this)} id="inputAddress2" defaultValue={data.shipping.street2} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                  <input type="text" name='city' className="form-control" onChange={this.handleChange.bind(this)} id="inputCity" defaultValue={data.shipping.city} />
                </div>

                <div className="form-group col-md-4">
                  <label className="inputState" ><strong>* State</strong></label>
                  <select type="text" name='state' onChange={this.handleChange.bind(this)} id="inputState" className="form-control">
					{this.state.states}
                  </select>
                </div>

                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>* Zip</strong></label>
                  <input name='zip' type="text" className="form-control" onChange={this.handleChange.bind(this)} id="inputZip" defaultValue={data.shipping.zip} />
                </div>


                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label className="inputPhone"><strong>* Phone</strong></label>
                      <input name="phone1" type="text" className="form-control" onChange={this.handleChange.bind(this)} id="inputPhone1" defaultValue={data.shipping.phone1} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone2">Phone 2</label>
                      <input name="phone2" type="text" className="form-control" onChange={this.handleChange.bind(this)} id="inputPhone2" defaultValue={data.shipping.phone2} pattern="[0-9]{3}" />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="inputPhone3"><strong>Phone 3</strong></label>
                      <input name="phone3" type="text" className="form-control" onChange={this.handleChange.bind(this)} id="inputPhone3" defaultValue={data.shipping.phone3} pattern="[0-9]{4}" />
                  </div>
                </div></fieldset>);
				this.setState({billing: billing});
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
                  <td >{pic.amt}</td>
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
		  if(data.totals.min_order_fee > 0)
			  min_order_fee = (<div>Min Order Fee: {data.totals.min_order_fee} </div>)
		  if(data.totals.taxes_and_handling > 0)
			  tax = (<div>Taxes & Handling: {data.totals.taxes_and_handling}</div>)
		  if(data.totals.freight > 0)
			  shipping = (<div>{data.totals.shipping_method}: {data.totals.freight}</div>)
		  if(data.totals.cart_subtotal > 0)
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
  completeOrder(data){
	  if(data.order.status == true && data.order.invoice > 10000){
		 window.location = "vieworder?id="+data.order.invoice+"confirm=true";
	  } else{
		  alert("An unexpected error has occured.  Please retry the checkout process or call us at 1-800-MSAIR99.");
		  window.location = "viewcart";
	  }
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


			  {this.state.billing}
			  


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
                  <div className="form-group col-md-4">
                    <label className="inputCity"><strong>City</strong></label>
                    <input readonly='readonly' type="text" className="form-control" id="inputCity" value={this.state.scity} />
                  </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>State</strong></label>
				  <input readonly='readonly' type="text" className="form-control" value={this.state.sstate} />
                </div>

                <div className="form-group col-md-4">
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
                  <input name='terms_conds' className="form-check-input" type="checkbox" onChange={this.handleChange.bind(this)} id="terms-checkbox" />
                    <label className="form-check-label">
                      <p>I agree to the Order Terms and Conditions</p>
                    </label>
                  </div>
                </div>


                <div className="order-confirmation-button" id="pay-now">
                  <button className="btn btn-primary" type="submit" onClick={(e) => this.next()} id="confirm-purchase"><h4>Confirm</h4></button>
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
