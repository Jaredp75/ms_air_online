import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';



class prodID409 extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      attributes: [],
      related_parts: [],
      replacement_parts: []
    };
  }

  componentDidMount() {

    fetch('https://www.msaironline.com/qa1/api/product.php?id=409')
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.product.map((pic) => {
        console.log(pic);
        return(

          <div key={pic.results}>
            <div className="content-area-container">
              <div className="content-area-container2">
                <div id="individual_product_page">
                  <div className="individual-product">

                    <div className="individual_product_listing">
                      <div className="individual_product_entry">
                        {pic.product}
                      </div>
                      <div id="product-image">
                        <img src={pic.icon} alt="product-placeholder" />
                        <h5>Catalog Number:<br />{pic.prodSku}</h5>
                      </div>


                    <div className="individual-product-details">
                      <div className="product-title">
                        <h2 className="individual-product-title">{pic.prodName}</h2>
                      </div>
                        <h4 className="product-brand-title">{pic.brandName}</h4>
                        <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.msrp}</h4>
                        <h4 className="individual-product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h4>
                        <h3 className="individual-product-actual-price"><strong>${pic.prodPrice}</strong></h3>
                        <br />
                        <br />
                      <div className="individual-product-description">
                        <ul>
                          <li><strong>{pic.attributes[0].field}</strong>: {pic.attributes[0].value}</li>
                          <li><strong>{pic.attributes[1].field}</strong>: {pic.attributes[1].value}</li>
                          <li><strong>{pic.attributes[2].field}</strong>: {pic.attributes[2].value}</li>
                          <br />
                          <li>{pic.prodDesc}</li>
                          <br />
                          <li>{pic.prodLongDesc}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>







        </div>

          <div id="quantity-input-group">
            <form method="post" action="cart.php?do=add">
              Quantity:
              <input type="text" className="quantityBox" value="1" size="2" maxLength="4" />
            </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>


{/* ---Related Items Section--- */}

<div id="replacement_items_section">
        <h4 className="replacement_items_header">Related Items</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[0].icon} alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">{pic.related_parts[0].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[1].icon} width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">{pic.related_parts[1].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[2].icon} width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">{pic.related_parts[2].name}</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>

          </div>
        </div>
      </div>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[3].icon} width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID409">{pic.related_parts[3].icon}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>
    </div>

{/* ---Replacement Parts Section--- */}


<div className="replacement_parts_section">
      <h1 className="replacement_parts_header">Replacement Parts</h1>
      <div className="replacement_parts_image">
        <img src="https://www.msaironline.com/images/assembly/QuickConnect_400_Series.jpg" alt="Quick Connect"></img>
      </div>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[0].icon} alt="name-placeholder"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[0].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $9.45</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[1].icon} alt="name-placeholder"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[1].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $68.98</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[2].icon} alt="name-placeholder"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[2].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $3.78</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[3].icon} alt="Replacement Outlet Housing"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[3].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $13.23</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[4].icon} alt="Housing base O-ring (12 each)"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[4].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $9.45</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>

      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[5].icon} alt="Secondary Check Valve & Spring"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[5].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $68.98</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[6].icon} alt="Metal Test Plug"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[6].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $27.41</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[7].icon} alt="Plastic Test Plug"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[7].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $28.60</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[8].icon} alt="Quick Connect Poppet"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[8].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $6.62</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[9].icon} alt="Poppet O-ring"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[9].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $12.29</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[10].icon} alt="Valve Body (pressure - without poppet)"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[10].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $39.69</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[11].icon} alt="Valve Body Assembly (pressure - with poppet)"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[11].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $55.76</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[12].icon} alt="Valve body O-ring kit (12 each)"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[12].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $12.29</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[13].icon} alt="Face Plate Springs (12 per pack)"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[13].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $15.12</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[14].icon} alt="Latch Button - Oxygen"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[14].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $26.46</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[15].icon} alt="Oxygen Face Plate Assembly"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[15].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $27.41</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[16].icon} alt="Face plate mounting screw kit (48 each)"></img>
        </div>

        <h4 className="replacement_parts_name">{pic.replacement_parts[16].name}</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $21.73</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" value="0" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>






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
      console.log("state", this.state.products);
      this.setState({products: products});
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



export default prodID409;
