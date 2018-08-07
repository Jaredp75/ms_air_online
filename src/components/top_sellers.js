import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';



class Top_Sellers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {

    fetch('http://www.msaironline.com/qa1/api/product.php?type=top')
    .then(results => {
      return results.json();

    }).then(data => {
      let products = data.product.map((pic) => {
        // this.setState({products: products});
        console.log(pic);

        return (




          <div key={pic.results}>
            

            <div className="content-area-container">
              <div className="top-sellers">
                <h1>TOP SELLERS</h1>
              </div>

              {this.state.products.map((pic) => (
                <div className="row">
                  <h4 className="product-title">
                    <a href="/product_pages/prodID409">{pic.brandName}</a>
                  </h4>
                </div>
              ))}

            <div className="row" key={pic.results}>

              <div className="product_listing">
                <div className="product_entry">

                  <div className="product-image">
                    <img src={pic.icon} alt="product-placeholder"></img>
                  </div>

            <p>{pic.prodID}</p>

            <div className="product-details">
              <h4 className="product-title"><a href="/product_pages/prodID409">{pic.prodName}</a></h4>
              <h6 className="product-brand-name">{pic.brandName}</h6>
              <h6 className="product-suggested-retail-price">${pic.msrp}</h6>
              <h6 className="product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h6>
              <h6 className="product-actual-price"><strong>${pic.prodPrice}</strong></h6>
            </div>
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
          <p><a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
        </div>

        <div className="copyright">
          <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
        </div>

      </div>


    </div>



        )
      })

      this.setState({products: products});
      console.log("state", this.state.products);
    })
  }



  render() {
    return (


      <div className="container2">
        <div className="container1">
          {this.state.products}


        </div>
      </div>
    )
  }




}



export default Top_Sellers;
