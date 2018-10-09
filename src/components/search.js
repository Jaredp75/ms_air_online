import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import Top_Sellers from './top_sellers.js';
import * as Utilities from './utilities.js';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }


  componentDidMount() {
	var productUrl = "product?id=";
	var url = Utilities.getApiURL('product.php', '?type=search&phrase='+Utilities.getUrlParam('phrase'));
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();

    }).then(data => {
	  //if(data.product) {
      let products = data.product.map((pic) => {
        console.log(pic);
        return(



          <div key={pic.results} className="individual-product-details2">
            {/* <div className="content-area-container2"> */}
              <div className="product_listing">
                <div className="product_entry">

                  <div className="product-image">
                    <img src={pic.icon} alt="product-placeholder"></img>
                    <div className="catalog-number"><h5>Catalog Number:<br />{pic.prodSku}</h5></div>
                  </div>

                <div className="product-details">
                  <h4 className="product-title"><a href={productUrl+pic.prodID}>{pic.prodName}</a></h4>
                  <h6 className="product-brand-name">{pic.brandName}</h6>
                  <h6 className="product-suggested-retail-price">${pic.msrp}</h6>
                  <h6 className="product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h6>
                  <h6 className="product-actual-price"><strong>${pic.prodPrice}</strong></h6>
                </div>
              </div>
            </div>


          {/* </div> */}

        </div>
      )
	  })/*} else {
			var products = (<div>Search results were empty.  Please try a another phase or contact us to find the part you're looking for</div>)
	  }*/

      this.setState({products: products});
      console.log("state", this.state.products);

    })
  }





  render(){

    return(
      <div className="home-brands">

        <div className = 'content-area-container'>

          <div className="home-header"><h4>Having trouble locating a part? Contact us using our web submission form <a href="../contact_us" target="_blank" rel="noopener noreferrer">here</a>. Or call <strong>1-877-MSAIR99</strong>.</h4></div>

          <div className="container3">
            <div className="container2">
              {this.state.products}
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

export default Search;
