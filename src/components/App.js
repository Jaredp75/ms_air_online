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
        <div className="topnav">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="App-header">
            <header className="App-title">Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</header>
          </div>

          <div className="search-wrapper">
            <div className="search">
              <input type="text" class="searchTerm" placeholder="Search the site..."></input>
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
           </div>
          </div>
      </div>






        <div className="wrapper">
          <div className="contactnav">
              <nav id="contactphone">
                <i><strong>Call Us Toll Free: 1-877-MSAIR99</strong></i>
              </nav>
          </div>
          <header id="site-header" class="body">
          <nav id="main-navigation">
            <a href="/">HOME</a> |
            <a href="/register">REGISTER</a> |
            <a href="/login">LOGIN</a> |
            <a href="/viewcart">VIEW CART</a> |
            <a href="/about">ABOUT US</a>
          </nav>
        </header>
      </div>

        <div className="checkout-wrapper">
          <nav id="social-nav">
            <strong>Follow Us:</strong> <i class="fab fa-facebook-square"></i> | <i class="fab fa-twitter-square"></i> | <a href="https://www.linkedin.com/company/ms-air/" target="_blank" rel="noopener noreferrer"></a><i class="fab fa-linkedin"></i>
          </nav>
          <header id="site-header" class="body">

            <nav id="main-navigation">
              <a href="contact.html">Contact Us</a> |
              <a href="myaccount.html">My Account</a> |
              <a href="checkout.html">Checkout <i class="fas fa-shopping-cart"></i></a>
            </nav>
          </header>
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
