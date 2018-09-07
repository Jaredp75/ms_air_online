import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

export default class ViewCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
	  totals: [],
	  error: null,
	  coupon: null
    };
	this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  updateCartQty(prodID, e){
	 var qty = e.target.value;
	 if(qty == null) {
		qty=1;
	 }
	 this.callCartApi(prodID, qty, 'PUT');
	 
  }
  deleteItem(prodID, e){
	this.callCartApi(prodID, 0, 'DELETE');
  }
  deleteItems(prodID, e){
	this.callCartApi(null, null, 'DELETE');
  }
  callCartApi(prodID, qty, mMethod){
	var url = Utilities.getApiURL('cart.php', '?id='+prodID+'&qty='+qty);
	fetch(url, {  
		method: mMethod,
		credentials: 'include'
	}).then(results => {
      return results.json();
    }).then((data) => {
		this.setCart(data);
    })
  }
  setCoupon(code){
	var url = Utilities.getApiURL('cart.php', '?code='+code);
	fetch(url, {  
		method: 'POST',
		credentials: 'include'
	}).then(results => {
      return results.json();
    }).then((data) => {
		this.setCart(data);
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
                  <td><input type='text' name='qty' size='4' maxlength='2' defaultValue={pic.qty} onChange={(e) => this.updateCartQty(pic.prodID, e)} /></td>
                  <td >{pic.prodPrice}</td>
                  <td >{pic.prodPrice * pic.qty}</td>
				  <td ><div onClick={(e) => this.deleteItem(pic.prodID, e)}>Delete</div></td>
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
		  if(data.totals.discount)
			  discount = (<div>Discount: {data.totals.discount} </div>)
		  if(data.totals.min_order_fee)
			  min_order_fee = (<div>Min Order Fee: {data.totals.min_order_fee} </div>)
		  if(data.totals.tax)
			  tax = (<div>Taxes & Handling: {data.totals.taxes_and_handling}</div>)
		  if(data.totals.shipping)
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
						{/*<div>Total: {data.totals.total}</div>*/}
					</div>
			  )
	  }
	  this.setState({totals: totals});
	  
  }
  
  componentDidMount() {
		this.getCart()

  }

	
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
		  {this.state.totals}

          <div className="shopping-cart-note">
            <p><strong>Note</strong>: If you are purchasing product for a Tax Exempt project, and can provide documentation of same, please contact MS Air toll free at <strong>(877) 672-4799</strong>.</p>
          </div>

            <div className="shopping-cart-buttons">
              <button type="button" className="btn btn-primary" onClick={(e) => this.deleteItems()}>Empty Cart</button>
                <a href="/checkout1"><button type="button" className="btn btn-primary">Next</button></a>
            </div>


            <div className="coupon-code-box">
              <div class="form-group">
                <label className="couponCode" class="col-sm-2 col-form-label">Coupon Code</label>
                  <div class="col-md-10">
                    <input name='coupon' type="text" className="form-control" id="coupon" onChange={this.handleInputChange}/>
                  </div>
				  
				  <div id="add-to-cart">
					<button onClick={(e) => this.setCoupon(this.state.coupon, e)}>Apply</button>
				  </div>
				   {this.state.error}
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
