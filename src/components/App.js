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
import MyAccount from '../components/myaccount';
import Checkout from '../components/checkout';
import ProductLines from '../components/product_lines';
import ContactUs from '../components/contact_us';
import ViewCart from '../components/viewcart';
import prodID409 from '../components/product_pages/prodID409';
import prodID8 from '../components/product_pages/prodID8';
import prodID341 from '../components/product_pages/prodID341';
import prodID14 from '../components/product_pages/prodID14';
import prodID643 from '../components/product_pages/prodID643';
import prodID1170 from '../components/product_pages/prodID1170';
import prodID1423 from '../components/product_pages/prodID1423';
import prodID1425 from '../components/product_pages/prodID1425';
import prodID1426 from '../components/product_pages/prodID1426';
import prodID1460 from '../components/product_pages/prodID1460';
import prodID1467 from '../components/product_pages/prodID1467';
import prodID1469 from '../components/product_pages/prodID1469';
import prodID1476 from '../components/product_pages/prodID1476';
import prodID1437 from '../components/product_pages/prodID1437';
import Category from '../components/category_pages/category';
import Desiccant_Air_Dryers from '../components/subcategory_pages/desiccant_air_dryers';
import Particulate_Filters from '../components/subcategory_pages/particulate_filters';
import prod1706 from '../components/subcategory_pages/prod1706';
import prod1707 from '../components/subcategory_pages/prod1707';
import prod1708 from '../components/subcategory_pages/prod1708';
import prod1709 from '../components/subcategory_pages/prod1709';
import prod1710 from '../components/subcategory_pages/prod1710';
import prod1711 from '../components/subcategory_pages/prod1711';
import prod1712 from '../components/subcategory_pages/prod1712';
import prod1713 from '../components/subcategory_pages/prod1713';
import prod1714 from '../components/subcategory_pages/prod1714';
import prod1715 from '../components/subcategory_pages/prod1715';
import prod1716 from '../components/subcategory_pages/prod1716';
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
                    <div><p>Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</p></div>
                  </div>
                </div>

                  <div className="title-header-right-div">
                    <div className="social-wrapper right-div">
                      <nav id="social-nav">
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
                      </nav>


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
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
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
            <Route path="/privacy" component={PrivacyPolicy}/>
            <Route path="/opt-in-form" component={OptInForm}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/myaccount" component={MyAccount}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/product_lines" component={ProductLines}/>
            <Route path="/contact_us" component={ContactUs}/>
            <Route path="/viewcart" component={ViewCart}/>
            <Route path="/product_pages/prodID409" component={prodID409}/>
            <Route path="/product_pages/prodID8" component={prodID8}/>
            <Route path="/product_pages/prodID341" component={prodID341}/>
            <Route path="/product_pages/prodID14" component={prodID14}/>
            <Route path="/product_pages/prodID643" component={prodID643}/>
            <Route path="/product_pages/prodID1170" component={prodID1170}/>
            <Route path="/product_pages/prodID1423" component={prodID1423}/>
            <Route path="/product_pages/prodID1425" component={prodID1425}/>
            <Route path="/product_pages/prodID1426" component={prodID1426}/>
            <Route path="/product_pages/prodID1460" component={prodID1460}/>
            <Route path="/product_pages/prodID1467" component={prodID1467}/>
            <Route path="/product_pages/prodID1469" component={prodID1469}/>
            <Route path="/product_pages/prodID1476" component={prodID1476}/>
            <Route path="/product_pages/prodID1437" component={prodID1437}/>
            <Route path="/category_pages/category" component={Category}/>
            <Route path="/subcategory_pages/desiccant_air_dryers" component={Desiccant_Air_Dryers}/>
            <Route path="/subcategory_pages/particulate_filters" component={Particulate_Filters}/>
            <Route path="/subcategory_pages/prod1706" component={prod1706}/>
            <Route path="/subcategory_pages/prod1707" component={prod1707}/>
            <Route path="/subcategory_pages/prod1708" component={prod1708}/>
            <Route path="/subcategory_pages/prod1709" component={prod1709}/>
            <Route path="/subcategory_pages/prod1710" component={prod1710}/>
            <Route path="/subcategory_pages/prod1711" component={prod1711}/>
            <Route path="/subcategory_pages/prod1712" component={prod1712}/>
            <Route path="/subcategory_pages/prod1713" component={prod1713}/>
            <Route path="/subcategory_pages/prod1714" component={prod1714}/>
            <Route path="/subcategory_pages/prod1715" component={prod1715}/>
            <Route path="/subcategory_pages/prod1716" component={prod1716}/>


          </Switch>
        </Baselayout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
