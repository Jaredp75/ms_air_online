import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

export default class Register extends React.Component {
  constructor() {
    super()

    this.state = {
	  user:"",
	  pwd: "",
	  pwd2: "",
      first: "",
      last: "",
	  company: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      state: "AL",
      zipcode: "",
	  phone1: "",
	  phone2: "",
	  phone3: "",
      text: "",
	  states: ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    }
  }

  register(){
  	var url = Utilities.getApiURL('account.php', '?do=create');
	var body = "user="+this.state.user
					+"&pwd="+this.state.pwd
					+"&pwd2="+this.state.pwd2
					+"&first="+this.state.first
					+"&last="+this.state.last
					+"&company="+this.state.company
					+"&email="+this.state.email
					+"&address="+this.state.address
					+"&address2="+this.state.address2
					+"&city="+this.state.city
					+"&state="+this.state.state
					+"&zip="+this.state.zip
					+"&phone1="+this.state.phone1
					+"&phone2="+this.state.phone2
					+"&phone3="+this.state.phone3;
	alert(body);
    fetch(url, {
			method: 'POST',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: body
		})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.confirmRegistration(data);
    })
  }
  confirmRegistration(data){
	  if(data.user === this.state.user && data.is_logged_in === true){
		if(Utilities.getUrlParam('pageReturn')) {
			window.location = Utilities.getUrlParam('pageReturn')
		} else {
			window.location = "viewcart"
		}
	  } else{
		  alert("Error: "+data.error.message)
	  }
  }
  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }


  render(){
	var states = this.state.states.map((state) =>{
		return(<option>{state}</option>);
	});

    return(
      <div>
        <div className = "content-area-container">
          <div className = "header-text">
            <div className= "replacement_parts_header"><h1>New Customer Registration</h1>
            <p>(* required fields)</p>
          </div>


        <form>
			        <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputUsername"><strong>* Username</strong></label>
                  <input name='user' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputUsername" placeholder="Password" />
                </div>
			        </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPassword4"><strong>* Password</strong></label>
                  <input name='pwd' type="password" onChange={this.handleChange.bind(this)} className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
			        </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPassword4"><strong>* Verify Password</strong></label>
                  <input name='pwd2' type="password" onChange={this.handleChange.bind(this)} className="form-control" id="inputPassword4" placeholder="Verify Password" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputEmail4"><strong>* Email</strong></label>
                  <input name='email' type="email" onChange={this.handleChange.bind(this)} className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
			        </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input name='first' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputFirstName" placeholder="First name" />
                </div>
			        </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input name='last' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputLastName" placeholder="Last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputCompany"><strong> Company</strong></label>
                  <input name='company' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputCompany" placeholder="Company" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPhone"><strong>* Phone</strong></label>
                  <input name="phone1" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone1" placeholder="123-456-7890"/>
				          {/* <input name="phone2" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone2" placeholder="222"/> */}
                  {/* <input name="phone3" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone3" placeholder="3333"/> */}
                </div>
              </div>

			        <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputAddress"><strong>* Address</strong></label>
                  <input name='address' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputAddress2"><strong>Address 2</strong></label>
                  <input name="address2" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
			        </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                  <input name='city' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputCity" placeholder="City"/>
                </div>
              </div>

<div className="form-row">
                <div className="form-group col-md-4">
                  <label className="inputState"><strong>* State</strong></label>
                  <select name="state" type="text" onChange={this.handleChange.bind(this)} id="inputState" className="form-control">
					          {states}
                  </select>
                </div>
              </div>

<div className="form-row">
                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>* Zip</strong></label>
                  <input name="zip" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputZip" placeholder="Zip"/>
                </div>
              </div>




              {/* <a href="/" className="btn btn-primary" role="button"><h4>Submit</h4></a> */}



            <div className="register-submit-button">
              <button type="submit" className="btn btn-primary" onClick={(e) => this.register()}>Submit</button>
            </div>
            </div>
            </form>




            <div className="FooterLinks1">
              <HelpAndCurrency />
            </div>

            <div className="FooterLinks2">
              <AboutLinks />
            </div>


          </div>
        </div>

            <div className="about-footer">
              <div className="terms">
                <p><a href="/Terms" rel="noopener noreferrer">Terms of Use</a> | <a href="/Privacy" rel="noopener noreferrer">Privacy Policy</a></p>
              </div>
              <div className="copyright">
                <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
              </div>
            </div>




</div>
    )
  }
}
