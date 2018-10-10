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
	  cpwd:"",
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
  componentDidMount() {
	var url = Utilities.getApiURL('account.php', '');
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then(data => {
		this.setState({user: data.account.user});
		this.setState({first: data.account.first});
		this.setState({last: data.account.last});
		this.setState({company: data.account.company});
		this.setState({address: data.account.address});
		this.setState({address2: data.account.address2});
		this.setState({city: data.account.city});
		this.setState({state: data.account.state});
		this.setState({email: data.account.email});
		this.setState({zip: data.account.zip});
		this.setState({phone1: data.account.phone_parts[0]});
		this.setState({phone2: data.account.phone_parts[1]});
		this.setState({phone3: data.account.phone_parts[2]});
		//this.setState({phone: data.account.});


	})
  }
  register(){
  	var url = Utilities.getApiURL('account.php', '?do=update');
	var body = "user="+this.state.user
					+"&cpwd="+this.state.cpwd
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
        this.confirmUpdate(data);
    })
  }
  confirmUpdate(data){
	  if(data.error)
		  alert("Error: "+data.error.message);
	  else
		  alert("Your acount information has been updated.");
  }
  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }


  render(){
	var states = this.state.states.map((state) =>{
		if(state === this.state.state)
			return(<option selected='selected'>{state}</option>);
		else
			return(<option>{state}</option>);

	});

    return(
      <div>
        <div className = "content-area-container">
          <div className = "header-text">
            <div className= "replacement_parts_header"><h1>My Account Information</h1>
            <p>(* required fields)</p>
          </div>


			         <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputUsername"><strong>Username</strong></label>
                  <input name='user' readonly type="text" className="form-control" id="inputUsername" placeholder="Username" value={this.state.user} />
                </div>
			         </div>
			         <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPassword4"><strong>* Current Password</strong></label>
                  <input name='cpwd' type="password" onChange={this.handleChange.bind(this)} className="form-control" id="inputPassword4" placeholder="Current Password" />
                </div>
			         </div>
			         <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPassword4"><strong>* New Password</strong></label>
                  <input name='pwd' type="password" onChange={this.handleChange.bind(this)} className="form-control" id="inputPassword4" placeholder="New Password" />
                </div>
              </div>
			        <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputPassword4"><strong>* Confirm New Password</strong></label>
                  <input name='pwd2' type="password" onChange={this.handleChange.bind(this)} className="form-control" id="inputPassword4" placeholder="Confirm New Password" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputFirstName"><strong>* First Name</strong></label>
                  <input name='first' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputFirstName" placeholder=" First Name" value={this.state.first} />
                </div>
			         </div>
				       <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputLastName"><strong>* Last Name</strong></label>
                  <input name='last' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputLastName" placeholder="Last Name" value={this.state.last} />
                </div>
              </div>
				      <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputCompany"><strong> Company</strong></label>
                  <input name='company' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputCompany" placeholder="Company Name" value={this.state.company} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputEmail4"><strong>* Email</strong></label>
                  <input name='email' type="email" onChange={this.handleChange.bind(this)} className="form-control" id="inputEmail4" placeholder="Email" value={this.state.email} />
                </div>
			         </div>

			         <div className="form-row">
                 <div className="form-group col-md-12">
                   <label className="inputAddress"><strong>* Address</strong></label>
                    <input name='address' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.address} />
                 </div>
				       </div>
				       <div className="form-row">
                 <div className="form-group col-md-12">
                   <label className="inputAddress2"><strong>Address 2</strong></label>
                    <input name="address2" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.address2} />
                </div>
			         </div>

               <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="inputCity"><strong>* City</strong></label>
                    <input name='city' type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputCity" placeholder="City" value={this.state.city} />
                </div>

                <div className="form-group col-md-4">
                  <label className="inputState"><strong>* State</strong></label>
                  <select name="state" type="text" onChange={this.handleChange.bind(this)} id="inputState" className="form-control">
					  {states}
                  </select>
                </div>

                <div className="form-group col-md-2">
                  <label className="inputZip"><strong>* Zip</strong></label>
                  <input name="zip" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputZip" placeholder="Zip" value={this.state.zip}/>
                </div>
              </div>

			   <div className="form-row">
                <div className="form-group col-md-1">
                  <label className="inputPhone"><strong>* Phone</strong></label>
                    <input name="phone1" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone1" placeholder="123" pattern="[0-9]{3}" value={this.state.phone1}/>
                </div>
                <div className="form-group col-md-1">
                  <label className="inputPhone2">Phone 2</label>
                    <input name="phone2" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone2" placeholder="456" pattern="[0-9]{3}" value={this.state.phone2} />
                </div>
                <div className="form-group col-md-1">
                  <label className="inputPhone3"><strong>Phone 3</strong></label>
                    <input name="phone3" type="text" onChange={this.handleChange.bind(this)} className="form-control" id="inputPhone3" placeholder="7890" pattern="[0-9]{4}" value={this.state.phone3}/>
                </div>
              </div>





          <div className="account-submit-button">
            <button type="submit" className="btn btn-primary" onClick={(e) => this.register()}>Submit</button>
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
