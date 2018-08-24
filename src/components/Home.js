import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import Top_Sellers from './top_sellers.js';
import * as Utilities from './utilities.js';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }


  componentDidMount() {
	var categoryUrl = "category?id=";
	var url = Utilities.getApiURL('category.php', '?');
    fetch(url)
    .then(results => {
      return results.json();

    }).then(data => {
      let products = data.category.map((pic) => {
        console.log(pic);
		
		var subcats = null;
		if(pic.subcats) {
			subcats = pic.subcats.map((subcat) => {
            return (
				<li><a href={categoryUrl+subcat.taxID}>{subcat.taxName}</a></li>
            )
        });}
        return(

          <div key={pic.results}>
            {/* <div className="content-area-container2"> */}
              <div className="product_listing">
                <div className="top-brands">

                  <div className="brand-logo">
                    <img src={pic.icon} alt="product-placeholder"></img>
                  </div>

                <div className="brand-text">
                  <a href={categoryUrl+pic.taxID}><strong>{pic.taxName}</strong></a>
				  {subcats}
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

        <div className = 'content-area-container'>

          <h4>Having trouble locating a part? Contact us using our web submission form <a href="../contact_us" target="_blank" rel="noopener noreferrer">here</a>. Or call <strong>1-877-MSAIR99</strong>.</h4>

          <div className="container1">
            <div className="container2">
              {this.state.products}

            </div>



          </div>

          <div>
            <Top_Sellers />
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

export default Home;
