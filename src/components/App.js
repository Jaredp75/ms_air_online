import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from '../components/Baselayout';
import Home from '../components/Home';
import About from '../components/About';
import TermsOfUse from '../components/terms';
import Top_Sellers from '../components/top_sellers';
import PrivacyPolicy from '../components/privacy';
import OptInForm from '../components/opt-in-form';
import Login from '../components/login';
import Register from '../components/register';
import MyAccount from '../components/myaccount';
import Checkout from '../components/checkout';
import Checkout1 from '../components/checkout1';
import Checkout2 from '../components/checkout2';
import Checkout3 from '../components/checkout3';
import Product from '../components/product';
import ContactUs from '../components/contact_us';
import ViewCart from '../components/viewcart';
import Category from '../components/category';
import Search from '../components/search';
import Account from '../components/account';
import Forgot from '../components/forgot';
import Reset from '../components/reset';
import Orders from '../components/orders';
import ViewOrder from '../components/vieworder';
import * as Utilities from './utilities.js';


















// import logo from '../msair100.jpg';
// import movement from '../movement.jpg';
//import './App.css';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  topNav: null,
	  //itemsInCart: null,
    };
  }
  componentDidMount() {
	var topNav = null;
  	var url = Utilities.getApiURL('session.php', '');
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
        if(data.is_logged_in === true){
			topNav = (<div id="top-links">
			  <a className="active" href="/myaccount">Hello, {data.user}. &nbsp; My Account</a>
              <a href="/login?do=logout">Logout</a>
            </div>)
			this.setState({topNav: topNav});
		} else {
			topNav = (
			 <div id="top-links">
              <a href="/register">Register</a>
              <a href="/login">Login</a>
            </div>)
			this.setState({topNav: topNav});
		}
		//if(data.items_in_cart > 0){
		//	this.setState({itemsInCart: data.items_in_cart});
		//}
    })

  }

  render() {
    return (

      <div className="App">
        <div className="header">

        <div className="top-header">

          <div className="header header-v1">
            <div className="header-language-background">
              <div className="wrap-container">
                <div className="header-wrap">
                  <div id="welcome-msg">
                    <strong>CALL NOW: 1-877-MSAIR99</strong>
                      {/* <i className="fas fa-phone-square fa-1x"></i> */}


                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="top-nav">
			{this.state.topNav}
          </div>
        </div>


        <div className="middle-header">

          <div className="title-wrapper">
            <div className="title-header">
              <div className="app-header">
                {/* <img src={movement} alt="movement" /> */}
                <div className="content">
                <div className="title-header-left-div">
                  <div id="app-title">MS <font color="yellow">AIR</font>
                    <div><p>Your source for compressed air & vacuum components for medical, dental, laboratory and industrial applications.</p></div>
                  </div>
                </div>

                  <div className="title-header-right-div">
                    <div className="social-wrapper right-div">
                      {/* <nav id="social-nav">
                        <div className="social-header">
                          <h6>Connect With Us:</h6>
                        </div>
                        <div className="social-icons">
                          <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-facebook-square fa-2x"></i></a>
                          <a href="https://www.twitter.com"  rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-twitter-square fa-2x"></i></a>
                          <a href="https://www.linkedin.com/company/ms-air/" rel="noopener noreferrer" target="_blank">
                          <i className="fab fa-linkedin fa-2x"></i></a>
                          <a href="mailto:msaironline@msaironline.com" rel="noopener noreferrer" target="_blank">
                          <i className="fas fa-envelope fa-2x"></i></a>
                        </div>
                      </nav> */}


                    <div className="checkout-wrapper">
                      <div className="checkout">
                        <a href="/viewcart" className="btn btn-info btn-lg">
                          {/* <span className="glyphicon glyphicon-shopping-cart"></span> */}
                            <p>Shopping Cart</p>
                              <i className="fas fa-shopping-cart fa-2x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>




                </div>

          </div>
        </div>
      </div>

    </div>
</div>
          <div className="bottom-header">
            <a className="active" href="/">Home</a>
            <a href="/viewcart">View Cart <i className="fas fa-shopping-cart"></i></a>
            <a href="/about">About Us</a>
            <a href="/contact_us">Contact Us</a>

            <div className="search-container">
              <form action="/search">
                <input type="text" placeholder="Search.." name="phrase"></input>
                <button type="submit" ><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>




          {/* <div className="App">
            ...
            <CategoryList categories={this.state.categories} />
          </div> */}




      <BrowserRouter>
        <Baselayout>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path="/terms" component={TermsOfUse}/>
            <Route path="/top_sellers" component={Top_Sellers}/>
            <Route path="/privacy" component={PrivacyPolicy}/>
            <Route path="/opt-in-form" component={OptInForm}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/myaccount" component={MyAccount}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/checkout1" component={Checkout1}/>
            <Route path="/checkout2" component={Checkout2}/>
            <Route path="/checkout3" component={Checkout3}/>
            <Route path="/product" component={Product}/>
            <Route path="/contact_us" component={ContactUs}/>
            <Route path="/viewcart" component={ViewCart}/>
            <Route path="/category" component={Category}/>
<<<<<<< HEAD
			      <Route path="/search" component={Search}/>
			      <Route path="/account" component={Account}/>
			      <Route path="/forgot" component={Forgot}/>
			      <Route path="/reset" component={Reset}/>
			      <Route path="/orders" component={Orders}/>
			      <Route path="/vieworder" component={ViewOrder}/>
=======
			<Route path="/search" component={Search}/>
			<Route path="/account" component={Account}/>
			<Route path="/forgot" component={Forgot}/>
			<Route path="/reset" component={Reset}/>
			<Route path="/orders" component={Orders}/>
			<Route path="/vieworder" component={ViewOrder}/>
>>>>>>> 297e89a957f60dfa9c7bae00371708df739db7ae
          </Switch>
        </Baselayout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
