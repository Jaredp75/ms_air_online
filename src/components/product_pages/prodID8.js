import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';



class prodID8 extends Component {
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

    fetch('https://www.msaironline.com/qa1/api/product.php?id=8')
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.product.map((pic) => {
        console.log(pic);
        return(

          <div key={pic.product}>
            <div className="content-area-container">
              <div className="content-area-container2">
                <div id="individual_product_page">
                  <div className="individual-product">

                    <div className="individual_product_listing">
                      <div className="individual_product_entry">
                        {pic.product}
                      </div>
                      <div id="product-image">
                        <img src={pic.icon} key={pic.icon} alt={pic.brandName} />
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
                          <li><strong>{pic.attributes[3].field}</strong>: {pic.attributes[3].value}</li>
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

        <div id="replacement_items_section">
        <h4 className="replacement_items_header">Related Items</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[0].icon} alt={pic.related_parts[0].name}></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="../product_pages/prodID8">{pic.related_parts[0].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>
      <br />

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/no_photo.gif" alt={pic.related_parts[1].name}></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="../product_pages/prodID8">{pic.related_parts[1].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>
      <br />

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/no_photo.gif" width="144" height="85" alt={pic.related_parts[2].name}></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">{pic.related_parts[2].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>
      <br />

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/no_photo.gif" width="144" height="85" alt={pic.related_parts[3].name}></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">{pic.related_parts[3].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>
      <br />

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src={pic.related_parts[4].icon} width="144" height="85" alt={pic.related_parts[4].name}></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">{pic.related_parts[4].name}</a></h6>
            {/* <h6 className="replacement_item_brand_name">Chemetron</h6> */}

          </div>
        </div>
      </div>
    </div>



      <div className="replacement_parts_section">
        <h1 className="replacement_parts_header">Replacement Parts</h1>
      <div className="replacement_parts_image">
        <img src="https://www.msaironline.com/images/assembly/QuickConnect_DISS_Replacement_Parts.jpg" alt="Quick Connect"></img>
      </div>

      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[0].icon} alt={pic.replacement_parts[0].name}></img>
        </div>

          <h4 className="replacement_parts_name">Secondary Check Kit (6 each){pic.replacement_parts[0].name}</h4>
          {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $18.90{pic.replacement_parts[0].msrp}</h4> */}
        <div className="replacement-parts-quantity-input-group">
          <form action="/action_page.php">
            <strong>Quantity</strong>:
              <input type="number" className="quantityBox" />
          </form>
        </div>

        <div className="replacement-parts-add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </span>


      <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src={pic.replacement_parts[1].icon} alt={pic.replacement_parts[1].name}></img>
        </div>

          <h4 className="replacement_parts_name">{pic.replacement_parts[1].name}</h4>
          {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $9.45</h4> */}
          <div className="replacement-parts-quantity-input-group">
            <form action="/action_page.php">
              <strong>Quantity</strong>:
                <input type="number" className="quantityBox" />
            </form>
          </div>

          <div className="replacement-parts-add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </span>


        <span className="replacement_parts_detail">
          <div className="replacement_parts_thumbnail">
            <img src={pic.replacement_parts[2].icon} alt={pic.replacement_parts[2].name}></img>
          </div>

            <h4 className="replacement_parts_name">{pic.replacement_parts[2].name}</h4>
            {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $16.07</h4> */}
          <div className="replacement-parts-quantity-input-group">
            <form action="/action_page.php">
              <strong>Quantity</strong>:
                <input type="number" className="quantityBox" />
            </form>
          </div>

          <div className="replacement-parts-add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </span>


        <span className="replacement_parts_detail">
          <div className="replacement_parts_thumbnail">
            <img src={pic.replacement_parts[3].icon} alt={pic.replacement_parts[3].name}></img>
          </div>

            <h4 className="replacement_parts_name">{pic.replacement_parts[3].name}</h4>
            {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $12.29</h4> */}
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>


          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src={pic.replacement_parts[4].icon} alt={pic.replacement_parts[4].name}></img>
            </div>

              <h4 className="replacement_parts_name">{pic.replacement_parts[4].name}</h4>
              {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $41.58</h4> */}
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>


          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src={pic.replacement_parts[5].icon} alt={pic.replacement_parts[5].name}></img>
            </div>

              <h4 className="replacement_parts_name">{pic.replacement_parts[5].name}</h4>
              {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $12.29</h4> */}
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>


          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src={pic.replacement_parts[6].icon} alt={pic.replacement_parts[6].name}></img>
            </div>

              <h4 className="replacement_parts_name">{pic.replacement_parts[6].name}</h4>
              {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $37.80</h4> */}
            <div className="replacement-parts-quantity-input-group">
              <form action="/action_page.php">
                <strong>Quantity</strong>:
                  <input type="number" className="quantityBox" />
              </form>
            </div>

            <div className="replacement-parts-add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </span>


          <span className="replacement_parts_detail">
            <div className="replacement_parts_thumbnail">
              <img src={pic.replacement_parts[7].icon} alt={pic.replacement_parts[7].name}></img>
            </div>

              <h4 className="replacement_parts_name">{pic.replacement_parts[7].name}</h4>
              {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $15.12</h4> */}
              <div className="replacement-parts-quantity-input-group">
                <form action="/action_page.php">
                  <strong>Quantity</strong>:
                    <input type="number" className="quantityBox" />
                  </form>
                </div>

                <div className="replacement-parts-add-to-cart">
                  <input type="submit" value="Add To Cart" />
                </div>
              </span>


              <span className="replacement_parts_detail">
                <div className="replacement_parts_thumbnail">
                  <img src={pic.replacement_parts[8].icon} alt={pic.replacement_parts[8].name}></img>
                </div>

                  <h4 className="replacement_parts_name">{pic.replacement_parts[8].name}</h4>
                  {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $21.73</h4> */}
                  <div className="replacement-parts-quantity-input-group">
                    <form action="/action_page.php">
                      <strong>Quantity</strong>:
                        <input type="number" className="quantityBox" />
                    </form>
                  </div>

                  <div className="replacement-parts-add-to-cart">
                    <input type="submit" value="Add To Cart" />
                  </div>
                </span>


                <span className="replacement_parts_detail">
                  <div className="replacement_parts_thumbnail">
                    <img src={pic.replacement_parts[9].icon} alt={pic.replacement_parts[9].name}></img>
                  </div>

                    <h4 className="replacement_parts_name">{pic.replacement_parts[9].name}</h4>
                    {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $19.84</h4> */}
                    <div className="replacement-parts-quantity-input-group">
                      <form action="/action_page.php">
                        <strong>Quantity</strong>:
                          <input type="number" className="quantityBox" />
                      </form>
                    </div>

                    <div className="replacement-parts-add-to-cart">
                      <input type="submit" value="Add To Cart" />
                    </div>
                  </span>


                  <span className="replacement_parts_detail">
                    <div className="replacement_parts_thumbnail">
                      <img src={pic.replacement_parts[10].icon} alt={pic.replacement_parts[10].name}></img>
                    </div>

                      <h4 className="replacement_parts_name">{pic.replacement_parts[10].name}</h4>
                      {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $14.18</h4> */}
                    <div className="replacement-parts-quantity-input-group">
                      <form action="/action_page.php">
                      <strong>Quantity</strong>:
                        <input type="number" className="quantityBox" />
                      </form>
                    </div>

                    <div className="replacement-parts-add-to-cart">
                      <input type="submit" value="Add To Cart" />
                    </div>
                  </span>


                  <span className="replacement_parts_detail">
                    <div className="replacement_parts_thumbnail">
                      <img src={pic.replacement_parts[11].icon} alt={pic.replacement_parts[11].name}></img>
                    </div>

                      <h4 className="replacement_parts_name">{pic.replacement_parts[11].name}</h4>
                      {/* <h4 className="replacement_parts_price"><strong>Price</strong>: $11.34</h4> */}
                    <div className="replacement-parts-quantity-input-group">
                      <form action="/action_page.php">
                        <strong>Quantity</strong>:
                          <input type="number" className="quantityBox" />
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



export default prodID8;
