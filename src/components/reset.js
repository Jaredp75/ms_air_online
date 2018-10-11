import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js'
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';



export default class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
	  current_pwd: null,
	  new_pwd: null,
	  confirm_pwd: null,
	  captcha: null,
    };
	this.handleInputChange = this.handleInputChange.bind(this);

  }
  componentDidMount() {
	var url = Utilities.getApiURL('decode.php', '?id='+Utilities.getUrlParam('u'));
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
		 this.setState({user : data.id});
    })
	this.setState({current_pwd : Utilities.getUrlParam('p')});
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  captcha(){
	this.resetPwd();
  	/*var url = Utilities.getApiURL('account.php', '?do=reset');
	var body = "user="+this.state.user
					+"&current_pwd="+this.state.current_pwd
					+"&new_pwd="+this.state.new_pwd
					+"&confirm_pwd="+this.state.confirm_pwd
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
    })*/
  }
  resetPwd(){
  	var url = Utilities.getApiURL('account.php', '?do=reset');
	var body = "user="+this.state.user
					+"&current_pwd="+this.state.current_pwd
					+"&new_pwd="+this.state.new_pwd
					+"&confirm_pwd="+this.state.confirm_pwd;
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
        this.alertUser(data);
    })
  }
  alertUser(data){
	  if(data.error)
		  alert("Error: "+data.error.message);
	  else
		  alert("Your password has been successfully reset");
  }
  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <div className="returning-customer">
              <div className="returning-customer-header">
                <h1>Reset Your Password</h1>
              </div>

                  <div className="reset-form-row">
                    <div className="form-group col-md-12">
                      <label className="inputEmail"><strong>* Username</strong></label>
                      <input type="text" className="form-control" name='user' placeholder="Username" value={this.state.user} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="inputEmail"><strong>* Temporary Password</strong></label>
                      <input type="password" className="form-control" name='current_pwd' placeholder="Temporary Password" value={this.state.current_pwd} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="inputEmail"><strong>* New Password</strong></label>
                      <input type="password" className="form-control" name='new_pwd' placeholder="New Password" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="inputEmail"><strong>* Verify Password</strong></label>
                      <input type="password" className="form-control" name='confirm_pwd' placeholder="Verify Password" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group col-md-12">
                      <label className="inputEmail"><strong>* Code</strong></label>
                      <input type="text" className="form-control" name='captcha' placeholder="Code" onChange={this.handleInputChange}/>
                    </div>
                  </div>

									<div className="reset-password-button">
                  	<button type="submit" className="btn btn-primary btn-sm"  onClick={(e) => this.captcha()}><h4>Submit</h4></button>
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
