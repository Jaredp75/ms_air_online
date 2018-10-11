import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js'
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';



export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
	  captcha: null,
	  pageReturn: null,
    };
	this.handleInputChange = this.handleInputChange.bind(this);

  }
  componentDidMount() {
	var url = Utilities.getApiURL('captcha.php', '');
	if(Utilities.getUrlParam('do') === 'logout')
		url = Utilities.getApiURL('account.php', '?do=logout')
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
		/* TODO get captcha code*/
    })
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  forgot(){
  	var url = Utilities.getApiURL('account.php', '?do=forgot');
    fetch(url, {
			method: 'POST',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: "email="+this.state.email
		})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.alertUser(data);
    })
  }
  alertUser(data){
	  if(data.forgot_password)
		  alert(data.forgot_password.message);
	  else
		  alert("Error: "+data.error.message);
  }
  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <div className="returning-customer">
              <div className="returning-customer-header">
                <h1>Returning Customer</h1>
              </div>
                  <div className="reset-form-row">
                    <div className="form-group col-md-12">
                      <label className="inputEmail"><strong>* Email Address</strong></label>
                      <input type="text" className="form-control" name='email' placeholder="Email Address" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="inputCaptcha"><strong>* Code</strong></label>
                      <input type="text" className="form-control" name='email' placeholder="Code" onChange={this.handleInputChange}/>
                    </div>
                  </div>

									<div className="reset-password-button">
                  	<button type="submit" className="btn btn-primary btn-sm" onClick={(e) => this.forgot()}><h4>Reset Password</h4></button>
									</div>



            </div>
          </div>

					<div className="company-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/10/msair.png" alt="logo"></img>
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
