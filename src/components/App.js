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
import Checkout4 from '../components/checkout4';
import Product from '../components/product';
import ContactUs from '../components/contact_us';
import ViewCart from '../components/viewcart';
import Category from '../components/category';
import Search from '../components/search';

















// import logo from '../msair100.jpg';
// import movement from '../movement.jpg';
//import './App.css';
// import axios from 'axios';

class App extends Component {
  // state = {
  //   categories: []
  // };
  //
  //
  // componentDidMount() {
  //   axios
  //     .get("https://www.msaironline.com/qa1/api/category.php?id=224")
  //     .then(response => {
  //
  //       const newCategories = response.data.map(c => {
  //         return {
  //           taxID: c.taxID,
  //           taxName: c.taxName
  //         };
  //       });
  //
  //       const newState = Object.assign({}, this.state, {
  //         categories: newCategories
  //       });
  //
  //       this.setState(newState);
  //     })
  //     .catch(error => console.log(error));
  // }


// render() {
//   return (
//     <div className="App">
//
//       ...
//
//       <CategoryList categories={this.state.categories} />
//     </div>
//   );
// }
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
            <div id="top-links">
              <a className="active" href="/myaccount">My Account</a>
              <a href="/checkout">Checkout</a>
              <a href="/register">Register</a>
              <a href="/login">Login</a>
            </div>
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
            <Route path="/checkout4" component={Checkout4}/>
            <Route path="/product" component={Product}/>
            <Route path="/contact_us" component={ContactUs}/>
            <Route path="/viewcart" component={ViewCart}/>
            <Route path="/category" component={Category}/>
			<Route path="/search" component={Search}/>
          </Switch>
        </Baselayout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
