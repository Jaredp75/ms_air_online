import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

class Checkout1 extends Component {
  constructor() {
    super();
    this.state = {
      shipping: null,
	  states: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    };
  }

  componentDidMount() {
	var url = Utilities.getApiURL('account.php', '');
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
        if(data.is_logged_in === false){
			window.location = 'login?pageReturn=checkout1'
		} else {
			this.populateForm(data.account)
		}
    })
  }
  populateForm(a){
	var states = this.state.states.map((state) =>{
		if(state===a.state)
			return(<option selected='selected'>{state}</option>);
		else
			return(<option>{state}</option>);
	});

	  var shipping = (
	  <fieldset>
			<div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input type="text" className="form-control" id="inputFirstName" value={a.first} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input type="text" className="form-control" id="inputLastName" value={a.last} />
                </div>
              </div>

              <div className="form-group col-md-6">
                <label className="inputAddress"><strong>* Address</strong></label>
                <input type="text" className="form-control" id="inputAddress" value={a.address} />
              </div>

              <div className="form-group col-md-6">
                <label className="inputAddress2"><strong>* Address 2</strong></label>
                <input type="text" className="form-control" id="inputAddress2" value={a.address2} />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                  <input type="text" className="form-control" id="inputCity" value={a.city} />
                </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>* State</strong></label>
                  <select type="text" id="inputState" className="form-control">
				  {states}
                  </select>
                </div>

                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>* Zip</strong></label>
                  <input type="text" className="form-control" id="inputZip" value={a.zip} />
              </div>
            </div>


          </fieldset>);
			this.setState({shipping: shipping});
  }


  render(){

    return(

      <div>

        <div className = 'content-area-container'>
          <div className="checkout-header-image">
            <img src='https://www.msaironline.com/images/purchase01.gif' alt='Purchase Information' />
          </div>

          <div className="replacement_parts_header">
            <h1>Shipping Address</h1>
          </div>

          <form method="POST" className="shipping-address" action="checkout2.php">


			  {this.state.shipping}





        </form>

        <div className="form-group" id="checkout1-next-button">
            <a href="/checkout2"><button type="submit" className="btn btn-primary"><h4>Next</h4></button></a>
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

export default Checkout1;
