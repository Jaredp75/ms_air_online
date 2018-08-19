import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

class Category extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }


  componentDidMount() {
    fetch('http://www.msaironline.com/qa1/api/category.php')
    .then(results => {
      return results.json();

    }).then(data => {
      let products = data.category.map((pic) => {
        console.log(pic);
        return(
          <div key={pic.results}>


            <div className="content-area-container2">
            <div id="individual_product_page">
            {/* <div className="individual-product"> */}
            {/* <div className="individual_product_listing"> */}
            {/* <div className="individual_product_entry">


            </div> */}
            {/* {pic.product} */}

                {/* <div className="product_listing"> */}
                  {/* <div className="product_entry"> */}

                    <div id="category-image">
                      <img src={pic.icon} alt={pic.taxName} />
                      {/* <h5>Catalog Number:<br />{pic.product[0].prodSku}</h5> */}
                    </div>

                  {/* <div className="individual-product-details"> */}
                    {/* <div className="product-title"> */}
                      <h2 className="individual-category-name"><a href="/">{pic.taxName}</a></h2>
                    {/* </div> */}
                    {/* <h4 className="product-brand-title">{pic.product[0].brandName}</h4> */}
                    {/* <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.product[0].msrp}</h4> */}
                    {/* <h6 className="individual-product-savings">Savings: <strong>${pic.product[0].msrp - pic.product[0].prodPrice}</strong></h6> */}
                    {/* <h6 className="individual-product-actual-price"><strong>${pic.product[0].prodPrice}</strong></h6> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}

                  {/* <div className="individual-product-description">
                    <ul>
                      <li><strong>{pic.product[0].attributes[0].field}</strong>: {pic.product[0].attributes[0].value}</li>
                      <li><strong>{pic.product[0].attributes[1].field}</strong>: {pic.product[0].attributes[1].value}</li>
                      <li><strong>{pic.product[0].attributes[2].field}</strong>: {pic.product[0].attributes[2].value}</li>
                      <li><strong>{pic.product[0].attributes[3].field}</strong>: {pic.product[0].attributes[3].value}</li>
                      <li><strong>{pic.product[0].attributes[4].field}</strong>: {pic.product[0].attributes[4].value}</li>
                      <li><strong>{pic.product[0].attributes[5].field}</strong>: {pic.product[0].attributes[5].value}</li>
                      <li><strong>{pic.product[0].attributes[6].field}</strong>: {pic.product[0].attributes[6].value}</li>
                      <li><strong>{pic.product[0].attributes[7].field}</strong>: {pic.product[0].attributes[7].value}</li>
                      <br />
                      <li>{pic.product[0].prodDesc}</li>
                      <br />
                      <li>{pic.product[0].prodLongDesc}</li>
                      <br />
                      <li>{pic.product[0].message[0]}</li>
                      <br />
                      <li>{pic.product[0].message[1]}</li>
                    </ul>
                  </div> */}














          {/* </div> */}
          {/* </div> */}
          </div>


          {/* <div id="quantity-input-group">
          <form method="post" action="cart.php?do=add">
            Quantity:
            <input type="text" className="quantityBox" value="1" size="2" maxLength="4" />
          </form>
        <div id="add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </div> */}



      {/* <div id="replacement_items_section">

        <h4 className="replacement_items_header">Related Items</h4>

        <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[0].icon} alt={pic.related_parts[0].name}></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="../product_pages/prodID8">{pic.related_parts[0].name}</a></h6>


          </div>
        </div>
      </div>


      </div> */}







          </div>

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

          <div className="container1">
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

export default Category;
