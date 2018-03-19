import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from '../components/Baselayout';
import Home from '../components/Home';
import About from '../components/About';
import TermsOfUse from '../components/terms';
import PrivacyPolicy from '../components/privacy';
import OptInForm from '../components/opt-in-form';
import Login from '../components/login';
import Register from '../components/register';
import logo from '../msair100.jpg';
//import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="header">
        <div className="top-header">
          <div className="header header-v1">
            <div className="header-language-background">
              <div className="wrap-container">

                  <h3 className="welcome-msg"><strong>CALL NOW: 1-877-MSAIR99</strong></h3>
                </div>
              </div>
            </div>

        <div className="store-language-container">
        </div>

        <div className="top-links">
          <div className="links">
            <div className="top-navigation">
              <a href="myaccount.html" title="My Account" >My Account</a>  |
              <a href="checkout.html" title="Checkout" className="top-link-checkout">Checkout</a>  |
              <a href="/register" title="Register" >Register</a>  |
              <a href="/login" title="Log In" >Log In</a>
            </div>
          </div>
        </div>
      </div>

        <div className="topnav">

        </div>

        <div className="midnav">
          <div className="title-wrapper">
            <div className="title-header">
              <div className="app-header">
                <div className="App-logo">
                  <img src={logo} alt="logo" />
                </div>


                <div className="title-header">
                  <div className="app-title">MS <font color="yellow">AIR</font></div>
                    <div className="bottom-wrapper">
                      <div className="social-wrapper">
                        <nav id="social-nav">
                          <div className="social-header">
                            <h6>Connect With Us: </h6>
                          </div>
                          <div className="social-icons">

                                <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-facebook-square fa-2x"></i></a>

                              <a href="https://www.twitter.com"  rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-twitter-square fa-2x"></i></a>


                                <a href="https://www.linkedin.com/company/ms-air/" rel="noopener noreferrer" target="_blank">
                                  <i className="fab fa-linkedin fa-2x"></i></a>
                          </div>
                        </nav>
                    <div className="checkout-wrapper">
                      <div className="checkout">
                        <a href="/viewcart" className="btn btn-info btn-lg">
                          <span className="glyphicon glyphicon-shopping-cart"></span>
                            Shopping Cart
                              <i className="fas fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                <div className="app-tagline"><h5><strong>Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</strong></h5></div>
              </div>

          </div>
        </div>


          <div className="searchnav">
            <a className="active" href="/">Home</a>
            <a href="/viewcart">View Cart <i className="fas fa-shopping-cart"></i></a>
            <a href="/about">About Us</a>
            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
        </div>

        <BrowserRouter>
          <Baselayout>
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path ="/about" component={About}/>
              <Route path="/terms" component={TermsOfUse}/>
              <Route path="/privacy" component={PrivacyPolicy}/>
              <Route path="/opt-in-form" component={OptInForm}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
          </Baselayout>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
