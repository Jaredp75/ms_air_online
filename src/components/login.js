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
      user: null,
	  pwd: null,
	  pageReturn: null,
    };
	this.handleInputChange = this.handleInputChange.bind(this);

  }
  componentDidMount() {
	var url = Utilities.getApiURL('session.php', '');
	var redirectLocaion = 'myaccount'
	if(Utilities.getUrlParam('do') === 'logout')
		url = Utilities.getApiURL('account.php', '?do=logout')
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
        if(data.is_logged_in === true){
			window.location = redirectLocaion
		}
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
  login(){
  	var url = Utilities.getApiURL('account.php', '?do=login');
    fetch(url, {
			method: 'POST',
			credentials: 'include',
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: "user="+this.state.user+"&pwd="+this.state.pwd
		})
    .then(results => {
      return results.json();
    }).then((data) => {
        this.isLoggedIn(data);
    })
  }
  isLoggedIn(data){
	  if(data.user === this.state.user && data.is_logged_in === true){
		if(Utilities.getUrlParam('pageReturn')) {
			window.location = Utilities.getUrlParam('pageReturn')
		} else {
			window.location = "/"
		}
	  } else{
		  alert("Error: "+data.error.message)
	  }
  }
  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="login-header-text">
            <div className="returning-customer">
              <div className="returning-customer-header">
                <h1>Returning Customer</h1>
              </div>
                <form className="returning-login">
                  <div className="login-form-row">
                    <div className="form-group col-md-12">
                      <label className="inputUserName"><strong>* Username</strong></label>
                      <input type="text" className="form-control" name='user' placeholder="Username" onChange={this.handleInputChange}/>
                    </div>

                      <div className="form-group col-md-12">
                      <label className="inputLastName"><strong>* Password</strong></label>
                      <input type="password" className="form-control" name='pwd' placeholder="Password" onChange={this.handleInputChange}/>
                    </div>
                  </div>





                  <button type="submit" className="btn btn-primary"  onClick={(e) => this.login()}><h4>Login</h4></button>

                  </form>




            </div>

            <div className="new-customer">
              <div className="new-customer-header">
                <h1>New Customer</h1>
              </div>
              <div className="new-customer-para">
                <h4>Create a free MS Air account to get the benefits of a personalized shopping experience. With a free MS Air account, you will be able to conveniently place orders, make shopping lists, save your shopping cart, check the status of your recent orders and much more.</h4>
                <br />
                <br />

                <a href="/register" className="btn btn-primary" role="button"><h4>Create a New Account</h4></a>
              </div>

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
