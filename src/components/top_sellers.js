import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import HelpAndCurrency from './help-and-currency.js';
// import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

class Top_Sellers extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }


  componentDidMount() {
	var productUrl = "product?id=";
	var url = Utilities.getApiURL('product.php?type=top', '&');
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();

    }).then(data => {
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
    })

      this.setState({products: products});
      console.log("state", this.state.products);

    })
  }





  render(){

    return(
      <div>

        <div className = 'content-area-container2'>

          <div className="top-sellers">
            <h1>TOP SELLERS</h1>
          </div>

          <div className="container1">
            <div className="container2">
              {this.state.products}

            </div>
          </div>



        </div>


      </div>


    )
  }
}

export default Top_Sellers;
