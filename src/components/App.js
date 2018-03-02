import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from '../components/Baselayout';
import Home from '../components/Home';
import About from '../components/About';
import TermsOfUse from '../components/terms';
import PrivacyPolicy from '../components/privacy';
import OptInForm from '../components/opt-in-form';
import logo from '../msair100.jpg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</h1>
        </header>
        {/* <p className="App-intro">
          Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications
        </p> */}

        <div className="wrapper">
          <div className="contactnav">
              <nav id="contactphone">
                <i><strong>Toll Free: 1-877-MSAIR99</strong></i>
              </nav>
          </div>
          <header id="site-header" class="body">
          <nav id="main-navigation">
            <a href="index.html">HOME</a> |
            <a href="about.html">REGISTER</a> |
            <a href="newsletter.html">LOGIN</a> |
            <a href="viewcart.html">VIEW CART</a> |
            <a href="about.html">ABOUT US</a>
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
            </Switch>
          </Baselayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
