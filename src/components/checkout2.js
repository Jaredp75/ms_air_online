import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

export default class Checkout2 extends React.Component {
  constructor() {
    super()
    this.state = {
	  first: "",
	  shipping_options: null,
	  code: null,
	  freight: null,
    };

  }
  next(){
 	var url = Utilities.getApiURL('checkout.php', '?do=setShippingCode&code='+this.state.code);
    fetch(url, {
			method: 'GET',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
		})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.confirmUpdate(data);
    })
  }
  confirmUpdate(data){
	  if(data.selected_shipping_method.code === this.state.code)
		  window.location = 'checkout3';
	  else
		  alert("Error: There was an error processing your request.  Please try again.");

  }
  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  componentDidMount() {
	var url = Utilities.getApiURL('checkout.php', '?do=getShippingOptions');
        fetch(url, {
			method: 'GET',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"}
		})
    .then(results => {
      return results.json();
    }).then(data => {
		/*TODO - Handle shipping errore */
		if(data.shipping_options){
			let shipping_options = data.shipping_options.ups.map((pic) => {
				return(
			<div>
              <input type="radio" id="option" name="code" value={pic.code}  onChange={this.handleChange.bind(this)}/>
              <label className="option1" >{pic.name}: ${pic.amt}</label>
            </div>
			)
			})
			this.setState({shipping_options: shipping_options});
		}else{
			alert("Error: ");
		}
		if(data.shipping_options.freight.has_freight === true) {
			this.setState({freight: "<div>Freight Message</div>"});
		}

	})

  }
  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase02.gif' alt='Purchase InclassNamemation' />
          </div>

          <div className="replacement_parts_header">
            <h1>Shipping Options</h1>
          </div>

          <fieldset>
            <legend><strong>Select a shipping option</strong></legend>
			{this.state.shipping_options}
          </fieldset>

		  {this.state.freight}
        <div className="preview-order-button">

            <button type="submit" className="btn btn-primary" onClick={(e) => this.next()}><h4>Preview Order</h4></button>

        </div>




        <div className="shipping-logo">
          <img src="https://www.msaironline.com/checkout/ups_logo.gif" alt="UPS logo"></img>
            <h5>UPS, the UPS brand mark, and the Color Brown are trademarks of United Parcel Service of America, Inc. All Rights Reserved</h5>
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
