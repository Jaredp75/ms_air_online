import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';



class prodID1525 extends Component {
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

    fetch('https://www.msaironline.com/qa1/api/product.php?id=1525')
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.product.map((pic) => {
        return(

          <div>
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
                        {/* <p><b>Features & Benefits</b>:</p> */}
                        {/* <li>Compact Size & 1-1/2" fittings for increased installation options<br />and easier and quicker installations</li> */}
                        {/* <li>3 Step Separation</li> */}
                        {/* <li>2-Pin Connection</li> */}
                        {/* <li>Transparent</li> */}
                        {/* <li>Exclusive resin</li> */}
                        {/* <li>Compact Size</li> */}
                        {/* <li>Recycling Options</li> */}
                        {/* <li>Easy cartridge replacement</li> */}
                        {/* <li>Identifies replacement time</li> */}
                        {/* <li>Captures dissolved mercury</li> */}
                        {/* <br /> */}
                        <li>{pic.prodDesc}</li>
                        <br />
                        <li>{pic.prodLongDesc}</li>
                        <br />
                        {/* <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li> */}
                      </ul>
                    </div>

                    {/* <div className="file_section">
                      <a href="http://www.msaironline.com/files/54.pdf"><img src="http://www.msaironline.com/images/pdf.jpg"></img></a>
                      <a href="http://www.msaironline.com/files/54.pdf"><h5>Bulldog Filter Maintenance.pdf</h5></a>
                    </div> */}



                  </div>
                </div>




              </div>







        </div>

          <div id="quantity-input-group">
            <form method="post" action="cart.php?do=add">
              Quantity:
              <input type="text" className="quantityBox" value="1" size="2" maxlength="4" />
            </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>





{/* ---Related Items Section--- */}

<div id="replacement_items_section">
        {/* <div className="replacement_parts_header"></div> */}
        {/* <h4 className="replacement_items_header">Related Items</h4> */}
        <img src="http://www.msaironline.com/images/brandImage/10_110x85.jpg" alt="logo-placeholder"></img>

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/1478_144x85.jpg" alt="Replacement Collection Container"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/product_pages/prodID341">Replacement Collection Container</a></h6>
            <h6 className="replacement_item_brand_name">Solmetex</h6>

          </div>
        </div>
      </div> */}

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/1480_144x85.jpg" width="144" height="85" alt="img-placeholder"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Recycle Kit</a></h6>
            <h6 className="replacement_item_brand_name">Solmetex</h6>

          </div>
        </div>
      </div> */}

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/417_144x85.jpg" width="144" height="85" alt="Quick-Connect 400 Oxygen Wall Outlet Station (ISO Color)"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick-Connect 400 Oxygen Wall Outlet Station (ISO Color)</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div> */}

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/417_144x85.jpg" width="144" height="85" alt="Quick-Connect 400 Oxygen Wall Outlet Station (ISO Color)"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick-Connect 400 Oxygen Wall Outlet Station (ISO Color)</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>
            <h6 className="replacement_item_actual_price"><strong>$0.00</strong></h6>
          </div>
        </div>
      </div> */}


    </div>

{/* ---Replacement Parts Section--- */}


<div className="replacement_parts_section">
      {/* <div className="replacement_parts_header"></div> */}
      {/* <h1 className="replacement_parts_header">Replacement Parts</h1> */}
      {/* <div className="replacement_parts_image">
        <img src="https://www.msaironline.com/images/assembly/QuickConnect_400_Series.jpg" alt="Quick Connect"></img>
      </div> */}
      {/* <p><h4>This item is a replacement part for the following products:</h4></p> */}
      {/* <p>Freight Shipping billed separately to contiguous 48 states. Additional fees may apply if lift gate is required. Call for details.</p> */}
      {/* <p>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</p> */}

      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="http://www.msaironline.com/images/prodImage/1478_144x85.jpg" alt="Replacement Collection Container"></img>
        </div>

        <h4 className="replacement_parts_name">Replacement Collection Container</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $287.30</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/1480_144x85.jpg" alt="Recycle Kit"></img>
        </div>

        <h4 className="replacement_parts_name">Recycle Kit</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $110.50</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/16_144x85.jpg" alt="Quick Connect Poppet 500 Series"></img>
        </div>

        <h4 className="replacement_parts_name">Quick Connect Poppet 500 Series</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/17_144x85.jpg" alt="Poppet O-ring Kit (12 each) - Quick Connect 500"></img>
        </div>

        <h4 className="replacement_parts_name">Poppet O-ring Kit (12 each) - Quick Connect 500</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/19_144x85.jpg" alt="Valve body with poppet-pressure"></img>
        </div>

        <h4 className="replacement_parts_name">Valve body with poppet-pressure</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}

      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/21_144x85.jpg" alt="Valve body kit with poppet-pressure (4 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Valve body kit with poppet-pressure (4 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/22_144x85.jpg" alt="Valve body O-ring kit (12 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Valve body O-ring kit (12 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/23_144x85.jpg" alt="Oxygen Face Plate Assembly"></img>
        </div>

        <h4 className="replacement_parts_name">Oxygen Face Plate Assembly</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}

      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/34_144x85.jpg" alt="Face Plate Springs (12 per pack)"></img>
        </div>

        <h4 className="replacement_parts_name">Face Plate Springs (12 per pack)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}



      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/35_144x85.jpg" alt="Face plate mounting screw kit (48 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Face plate mounting screw kit (48 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/37_144x85.jpg" alt="Test plug kit (12 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Test plug kit (12 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}


      {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/51_144x85.jpg" alt="Back Box Mounting Screws & Fastner Kit (24 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Back Box Mounting Screws & Fastner Kit (24 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $0.00</h4>
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
            <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span> */}









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



export default prodID1525;
