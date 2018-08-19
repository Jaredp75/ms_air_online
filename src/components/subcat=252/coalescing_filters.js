import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';



class Coalescing_Filters extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {

    fetch('http://www.msaironline.com/qa1/api/category.php?id=252')
    .then(results => {
      return results.json();
    }).then(data => {
      let categories = data.category.map((pic) => {
        return(

          <div>
            <div className="content-area-container">
              <div className="content-area-container2">
                <div id="individual_product_page">
                  <div className="individual-product">

                    <div className="individual_product_listing">
                      <div className="individual_product_entry">
                        {pic.category}
                      </div>
                      <div id="product-image">
                        <img src="https://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter" />
                        <h5>Catalog Number:<br />T100YIA{pic.prodSku}</h5>
                      </div>


                    <div className="individual-product-details">
                      <div className="product-title">
                        <h2 className="individual-product-title">60 SCFM Coalescing Filter{pic.prodName}</h2>
                      </div>
                        <h4 className="product-brand-title">Trident{pic.brandName}</h4>
                        {/* <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.msrp}</h4> */}
                        {/* <h4 className="individual-product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h4> */}
                        <h3 className="individual-product-actual-price"><strong>$226.40{pic.prodPrice}</strong></h3>
                        <br />
                        <br />
                      <div className="individual-product-description">
                        <ul>
                          <li>Micron Rating{pic.field}: 0.01{pic.value}</li>
                          <li>SCFM{pic.field}: 60{pic.value}</li>
                          <li>{pic.prodDesc}A 0.01-micron coalescing filter to protect the desiccant from compressor oils and other contaminants.</li>
                          <br />
                          <li><a href="/subcat=252/prodID1722">More Info >></a></li>
                          <br />
                          <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
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
              <input type="text" className="quantityBox" value="1" size="2" maxlength="4" />
            </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>


{/* ---Related Items Section--- */}

      <div id="replacement_items_section">
        {/* <h4 className="replacement_items_header">Related Items</h4> */}
        <div className="side-logo">
          <img src="http://www.msaironline.com/images/brandImage/13_110x85.jpg" alt="logo-placeholder"></img>
        </div>

        {/* <div className="replacement_item_listing">
          <div className="replacement_item_entry">
            <div className="replacement_item_image">
              <img src="http://www.msaironline.com/images/prodImage/no_photo.gif" alt="Quick Connect 500 Rough In Kit - Oxygen w/ New Style Cover Plate"></img>
            </div>

          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/product_pages/prodID341">Quick Connect 500 Rough In Kit - Oxygen w/ New Style Cover Plate</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>

          </div>
        </div>
      </div> */}
      {/* <br /> */}

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/324_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Oxygen Outlet - Ohmeda Compatible"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Oxygen Outlet - Ohmeda Compatible</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>

          </div>
        </div>
      </div> */}
      {/* <br /> */}

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="https://www.msaironline.com/images/prodImage/342_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Outlet - Ohmeda Compatible /w New Style Cover"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Outlet - Ohmeda Compatible /w New Style Cover</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>

          </div>
        </div>
      </div> */}
      {/* <br /> */}

      {/* <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img src="http://www.msaironline.com/images/prodImage/no_photo.gif" width="144" height="85" alt="Quick Connect 500 Oxygen Completion Kit  - Ohmeda Compatible /w New Style Cover"></img>
          </div>
          <div className="replacement_item_details">
            <h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Oxygen Completion Kit  - Ohmeda Compatible /w New Style Cover</a></h6>
            <h6 className="replacement_item_brand_name">Chemetron</h6>

          </div>
        </div>
      </div> */}


    </div>

{/* ---Replacement Parts Section--- */}


    <div className="replacement_parts_section">
    {/* <h1 className="replacement_parts_header">Replacement Parts</h1> */}
    {/* <div className="replacement_parts_image">
          <img src="https://www.msaironline.com/images/assembly/QuickConnect_DISS_Replacement_Parts.jpg" alt="QuickConnect_DISS_Replacement_Parts"></img>
        </div> */}


  {/* <span className="replacement_parts_detail">
        <div className="replacement_parts_thumbnail">
          <img src="https://www.msaironline.com/images/prodImage/18_144x85.jpg" alt="Secondary Check Kit (6 each)"></img>
        </div>

        <h4 className="replacement_parts_name">Secondary Check Kit (6 each)</h4>
        <h4 className="replacement_parts_price"><strong>Price</strong>: $18.90</h4>
      <div className="replacement-parts-quantity-input-group">
        <form action="/action_page.php">
          <strong>Quantity</strong>:
          <input type="number" className="quantityBox" value="0" />
        </form>
      </div>

      <div className="replacement-parts-add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </span> */}


{/* <span className="replacement_parts_detail">
      <div className="replacement_parts_thumbnail">
        <img src="https://www.msaironline.com/images/prodImage/15_144x85.jpg" alt="Housing base O-ring (12 each)"></img>
      </div>

        <h4 className="replacement_parts_name">Housing base O-ring (12 each)</h4>
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
  </span> */}


  {/* <span className="replacement_parts_detail">
    <div className="replacement_parts_thumbnail">
      <img src="https://www.msaironline.com/images/prodImage/16_144x85.jpg" alt="Quick Connect Poppet 500 Series"></img>
    </div>

      <h4 className="replacement_parts_name">Quick Connect Poppet 500 Series</h4>
      <h4 className="replacement_parts_price"><strong>Price</strong>: $16.07</h4>
    <div className="replacement-parts-quantity-input-group">
      <form action="/action_page.php">
        <strong>Quantity</strong>:
        <input type="number" className="quantityBox" value="0" />
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
  </span> */}


  {/* <span className="replacement_parts_detail">
    <div className="replacement_parts_thumbnail">
      <img src="https://www.msaironline.com/images/prodImage/19_144x85.jpg" alt="Valve body with poppet-pressure"></img>
    </div>

      <h4 className="replacement_parts_name">Valve body with poppet-pressure</h4>
      <h4 className="replacement_parts_price"><strong>Price</strong>: $41.58</h4>
    <div className="replacement-parts-quantity-input-group">
      <form action="/action_page.php">
        <strong>Quantity</strong>:
        <input type="number" className="quantityBox" value="0" />
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
      <h4 className="replacement_parts_price"><strong>Price</strong>: $53.87</h4>
    <div className="replacement-parts-quantity-input-group">
      <form action="/action_page.php">
        <strong>Quantity</strong>:
        <input type="number" className="quantityBox" value="0" />
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
  </span> */}


  {/* <span className="replacement_parts_detail">
    <div className="replacement_parts_thumbnail">
      <img src="https://www.msaironline.com/images/prodImage/23_144x85.jpg" alt="Oxygen Face Plate Assembly"></img>
    </div>

      <h4 className="replacement_parts_name">Oxygen Face Plate Assembly</h4>
      <h4 className="replacement_parts_price"><strong>Price</strong>: $36.00</h4>
    <div className="replacement-parts-quantity-input-group">
      <form action="/action_page.php">
        <strong>Quantity</strong>:
        <input type="number" className="quantityBox" value="0" />
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
  </span> */}




</div>


















<div id="individual_product_page">
  <div className="individual-product">

    <div className="individual_product_listing">
      <div className="individual_product_entry">
        {pic.category}
      </div>
      <div id="product-image">
        <img src="https://www.msaironline.com/images/prodImage/1719_144x85.jpg" alt="150 SCFM Coalescing Filter" />
        <h5>Catalog Number:<br />T250YIA{pic.prodSku}</h5>
      </div>


    <div className="individual-product-details">
      <div className="product-title">
        <h2 className="individual-product-title">150 SCFM Coalescing Filter{pic.prodName}</h2>
      </div>
        <h4 className="product-brand-title">Trident{pic.brandName}</h4>
        {/* <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.msrp}</h4> */}
        {/* <h4 className="individual-product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h4> */}
        <h3 className="individual-product-actual-price"><strong>$362.26{pic.prodPrice}</strong></h3>
        <br />
        <br />
      <div className="individual-product-description">
        <ul>
          <li>Micron Rating{pic.field}: 0.01{pic.value}</li>
          <li>SCFM{pic.field}: 150{pic.value}</li>
          <li>{pic.prodDesc}A 0.01-micron coalescing filter to protect the desiccant from compressor oils and other contaminants.</li>
          <br />
          <li><a href="/subcat=252/prodID1719">More Info >></a></li>
          <br />
          <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
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
<input type="text" className="quantityBox" value="1" size="2" maxlength="4" />
</form>
<div id="add-to-cart">
<input type="submit" value="Add To Cart" />
</div>
</div>


{/* ---Related Items Section--- */}

<div id="replacement_items_section">
{/* <h4 className="replacement_items_header">Related Items</h4> */}
<div className="side-logo">
<img src="http://www.msaironline.com/images/brandImage/13_110x85.jpg" alt="logo-placeholder"></img>
</div>

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="http://www.msaironline.com/images/prodImage/no_photo.gif" alt="Quick Connect 500 Rough In Kit - Oxygen w/ New Style Cover Plate"></img>
</div>

<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/product_pages/prodID341">Quick Connect 500 Rough In Kit - Oxygen w/ New Style Cover Plate</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}
{/* <br /> */}

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="https://www.msaironline.com/images/prodImage/324_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Oxygen Outlet - Ohmeda Compatible"></img>
</div>
<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Oxygen Outlet - Ohmeda Compatible</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}
{/* <br /> */}

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="https://www.msaironline.com/images/prodImage/342_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Outlet - Ohmeda Compatible /w New Style Cover"></img>
</div>
<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Outlet - Ohmeda Compatible /w New Style Cover</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}
{/* <br /> */}

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="http://www.msaironline.com/images/prodImage/no_photo.gif" width="144" height="85" alt="Quick Connect 500 Oxygen Completion Kit  - Ohmeda Compatible /w New Style Cover"></img>
</div>
<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Oxygen Completion Kit  - Ohmeda Compatible /w New Style Cover</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}


</div>

{/* ---Replacement Parts Section--- */}


<div className="replacement_parts_section">
{/* <h1 className="replacement_parts_header">Replacement Parts</h1> */}
{/* <div className="replacement_parts_image">
<img src="https://www.msaironline.com/images/assembly/QuickConnect_DISS_Replacement_Parts.jpg" alt="QuickConnect_DISS_Replacement_Parts"></img>
</div> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/18_144x85.jpg" alt="Secondary Check Kit (6 each)"></img>
</div>

<h4 className="replacement_parts_name">Secondary Check Kit (6 each)</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $18.90</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
</form>
</div>

<div className="replacement-parts-add-to-cart">
<input type="submit" value="Add To Cart" />
</div>
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/15_144x85.jpg" alt="Housing base O-ring (12 each)"></img>
</div>

<h4 className="replacement_parts_name">Housing base O-ring (12 each)</h4>
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
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/16_144x85.jpg" alt="Quick Connect Poppet 500 Series"></img>
</div>

<h4 className="replacement_parts_name">Quick Connect Poppet 500 Series</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $16.07</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/19_144x85.jpg" alt="Valve body with poppet-pressure"></img>
</div>

<h4 className="replacement_parts_name">Valve body with poppet-pressure</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $41.58</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
<h4 className="replacement_parts_price"><strong>Price</strong>: $53.87</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/23_144x85.jpg" alt="Oxygen Face Plate Assembly"></img>
</div>

<h4 className="replacement_parts_name">Oxygen Face Plate Assembly</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $36.00</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
</span> */}




</div>



















<div id="individual_product_page">
  <div className="individual-product">

    <div className="individual_product_listing">
      <div className="individual_product_entry">
        {pic.category}
      </div>
      <div id="product-image">
        <img src="https://www.msaironline.com/images/prodImage/1720_144x85.jpg" alt="350 SCFM Coalescing Filter" />
        <h5>Catalog Number:<br />T600YIA{pic.prodSku}</h5>
      </div>


    <div className="individual-product-details">
      <div className="product-title">
        <h2 className="individual-product-title">350 SCFM Coalescing Filter{pic.prodName}</h2>
      </div>
        <h4 className="product-brand-title">Trident{pic.brandName}</h4>
        {/* <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.msrp}</h4> */}
        {/* <h4 className="individual-product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h4> */}
        <h3 className="individual-product-actual-price"><strong>$430.18{pic.prodPrice}</strong></h3>
        <br />
        <br />
      <div className="individual-product-description">
        <ul>
          <li>Micron Rating{pic.field}: 0.01{pic.value}</li>
          <li>SCFM{pic.field}: 350{pic.value}</li>
          <li>{pic.prodDesc}A 0.01-micron coalescing filter to protect the desiccant from compressor oils and other contaminants.</li>
          <br />
          <li><a href="/subcat=252/prodID1720">More Info >></a></li>
          <br />
          <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
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
<input type="text" className="quantityBox" value="1" size="2" maxlength="4" />
</form>
<div id="add-to-cart">
<input type="submit" value="Add To Cart" />
</div>
</div>


{/* ---Related Items Section--- */}

<div id="replacement_items_section">
{/* <h4 className="replacement_items_header">Related Items</h4> */}
<div className="side-logo">
<img src="http://www.msaironline.com/images/brandImage/13_110x85.jpg" alt="logo-placeholder"></img>
</div>

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="http://www.msaironline.com/images/prodImage/no_photo.gif" alt="Quick Connect 500 Rough In Kit - Oxygen w/ New Style Cover Plate"></img>
</div>

<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/product_pages/prodID341">Quick Connect 500 Rough In Kit - Oxygen w/ New Style Cover Plate</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}
{/* <br /> */}

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="https://www.msaironline.com/images/prodImage/324_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Oxygen Outlet - Ohmeda Compatible"></img>
</div>
<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Oxygen Outlet - Ohmeda Compatible</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}
{/* <br /> */}

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="https://www.msaironline.com/images/prodImage/342_144x85.jpg" width="144" height="85" alt="Quick Connect 500 Vacuum Outlet - Ohmeda Compatible /w New Style Cover"></img>
</div>
<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Vacuum Outlet - Ohmeda Compatible /w New Style Cover</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}
{/* <br /> */}

{/* <div className="replacement_item_listing">
<div className="replacement_item_entry">
<div className="replacement_item_image">
<img src="http://www.msaironline.com/images/prodImage/no_photo.gif" width="144" height="85" alt="Quick Connect 500 Oxygen Completion Kit  - Ohmeda Compatible /w New Style Cover"></img>
</div>
<div className="replacement_item_details">
<h6 className="replacement_item_title"><a href="/prodID8">Quick Connect 500 Oxygen Completion Kit  - Ohmeda Compatible /w New Style Cover</a></h6>
<h6 className="replacement_item_brand_name">Chemetron</h6>

</div>
</div>
</div> */}


</div>

{/* ---Replacement Parts Section--- */}


<div className="replacement_parts_section">
{/* <h1 className="replacement_parts_header">Replacement Parts</h1> */}
{/* <div className="replacement_parts_image">
<img src="https://www.msaironline.com/images/assembly/QuickConnect_DISS_Replacement_Parts.jpg" alt="QuickConnect_DISS_Replacement_Parts"></img>
</div> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/18_144x85.jpg" alt="Secondary Check Kit (6 each)"></img>
</div>

<h4 className="replacement_parts_name">Secondary Check Kit (6 each)</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $18.90</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
</form>
</div>

<div className="replacement-parts-add-to-cart">
<input type="submit" value="Add To Cart" />
</div>
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/15_144x85.jpg" alt="Housing base O-ring (12 each)"></img>
</div>

<h4 className="replacement_parts_name">Housing base O-ring (12 each)</h4>
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
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/16_144x85.jpg" alt="Quick Connect Poppet 500 Series"></img>
</div>

<h4 className="replacement_parts_name">Quick Connect Poppet 500 Series</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $16.07</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/19_144x85.jpg" alt="Valve body with poppet-pressure"></img>
</div>

<h4 className="replacement_parts_name">Valve body with poppet-pressure</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $41.58</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
<h4 className="replacement_parts_price"><strong>Price</strong>: $53.87</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
</span> */}


{/* <span className="replacement_parts_detail">
<div className="replacement_parts_thumbnail">
<img src="https://www.msaironline.com/images/prodImage/23_144x85.jpg" alt="Oxygen Face Plate Assembly"></img>
</div>

<h4 className="replacement_parts_name">Oxygen Face Plate Assembly</h4>
<h4 className="replacement_parts_price"><strong>Price</strong>: $36.00</h4>
<div className="replacement-parts-quantity-input-group">
<form action="/action_page.php">
<strong>Quantity</strong>:
<input type="number" className="quantityBox" value="0" />
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
      console.log("state", this.state.categories);
      this.setState({categories: categories});
    })
  }



  render() {
    return (

      <div className="container2">
        <div className="container1">
          {this.state.categories}
        </div>
      </div>
    )
  }





}



export default Coalescing_Filters;
