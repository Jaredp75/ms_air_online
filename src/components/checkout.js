import React from "react";
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';


export default class Checkout1 extends React.Component {
  constructor() {
    super()
    this.state = {
	  first: "",
      last: "",
	  company: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      state: "AL",
      zipcode: "",
      shipping: null,
	  states: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    };

  }
  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
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
  next(){
 	var url = Utilities.getApiURL('checkout.php', '?do=setShippingAddress');
	var body = "&first="+this.state.first
					+"&last="+this.state.last
					+"&email="+this.state.email
					+"&company="+this.state.company
					+"&street1="+this.state.address
					+"&street2="+this.state.address2
					+"&city="+this.state.city
					+"&state="+this.state.state
					+"&zip="+this.state.zip
					+"&phone1="+this.state.phone1
					+"&phone2="+this.state.phone2
					+"&phone3="+this.state.phone3;
    fetch(url, {
			method: 'POST',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: body
		})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.confirmUpdate(data);
    })
  }
  confirmUpdate(data){
	  if(data.error)
		  alert("Error: "+data.error.message);
	  else
		  window.location = 'checkout2';
  }
  populateForm(a){
	var states = this.state.states.map((state) =>{
		if(state===a.state)
			return(<option selected='selected'>{state}</option>);
		else
			return(<option>{state}</option>);
	});
		this.setState({first: a.first});
		this.setState({last: a.last});
		this.setState({email: a.email});
		this.setState({company: a.company});
		this.setState({address: a.address});
		this.setState({address2: a.address2});
		this.setState({city: a.city});
		this.setState({state: a.state});
		this.setState({zip: a.zip});
		this.setState({phone1: a.phone_parts[0]});
		this.setState({phone2: a.phone_parts[1]});
		this.setState({phone3: a.phone_parts[2]});

	  var shipping = (
	  <fieldset>
			<div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input type="text" name="first" onChange={this.handleChange.bind(this)} className="form-control" id="inputFirstName" defaultValue={a.first} />
                </div>

                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input type="text" name="last" onChange={this.handleChange.bind(this)} className="form-control" id="inputLastName" defaultValue={a.last} />
                </div>
              </div>

              <div className="form-group col-md-6">
                <label className="inputAddress"><strong>* Address</strong></label>
                <input type="text" name="company" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress" defaultValue={a.company} />
              </div>

              <div className="form-group col-md-6">
                <label className="inputAddress"><strong>* Address</strong></label>
                <input type="text" name="address" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress" defaultValue={a.address} />
              </div>

              <div className="form-group col-md-6">
                <label className="inputAddress2"><strong>* Address 2</strong></label>
                <input type="text" name="address2" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress2" defaultValue={a.address2} />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                  <input type="text" name="city" onChange={this.handleChange.bind(this)} className="form-control" id="inputCity" defaultValue={a.city} />
                </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>* State</strong></label>
                  <select type="text" name="state" onChange={this.handleChange.bind(this)} id="inputState" className="form-control">
				  {states}
                  </select>
                </div>

                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>* Zip</strong></label>
                  <input type="text" name="zip" onChange={this.handleChange.bind(this)} className="form-control" id="inputZip" defaultValue={a.zip} />
              </div>

			  <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPhone"><strong>* Phone</strong></label>
                  <input name="phone1" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone1" defaultValue={this.state.phone1}/>
				  <input name="phone2" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone2" defaultValue={this.state.phone2}/>
                  <input name="phone3" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone3" defaultValue={this.state.phone3}/>
                </div>
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


			  {this.state.shipping}




        <div className="form-group" id="checkout1-next-button">
           <button type="submit" className="btn btn-primary" onClick={(e) => this.next()}><h4>Next</h4></button>
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
