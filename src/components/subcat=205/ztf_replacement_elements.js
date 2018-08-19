import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class ZTF_Replacement_Elements extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>


          <div className="content-area-container3">
            <div id="individual_product_page">
              <div className="individual-product">
                <div className="individual_product_listing">
                  <div className="individual_product_entry">


                    <div id="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1506_144x85.jpg" alt="ZTF Replacement Element for ZTF1000A"></img>
                      <p>Catalog Number: E1000A</p>
                    </div>


                    <div className="individual-product-details">
                      <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1000A</h2>
                      <h4 className="product-brand-title">Zeks</h4>
                      {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
                      {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

                    <div className="individual-product-description">
                      <ul>
                        <li>ZTF Replacement Element</li>
                        <br />
                        <br />
                        <a href="/subcat=205/prodID1506"><strong>More Info >></strong></a>
                      </ul>
                    </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $414.00</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$144.90</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$269.10</strong></h3>
                  </div>
                  <br />

                </div>


              </div>
              <div id="quantity-input-group">
                <form action="/action_page.php">
                  Quantity:
                  <input type="number" className="quantityBox" value="0" />
                </form>
                <div id="add-to-cart">
                  <input type="submit" value="Add To Cart" />
                </div>
              </div>
              <br />
              <br />
              <img src="../zeks_logo.png" alt="Zeks logo"/>
            </div>

          </div>

          {/* <div id="replacement_items_section">
            <h4 className="replacement_items_header">Accessories</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
                <h6 className="replacement_item_brand_name">Trident</h6>
                <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
              </div>
            </div>
          </div>

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
              </div>
            <div className="replacement_item_details">
              <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
              <h6 className="replacement_item_brand_name">Trident</h6>
              <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <br />
{/* +++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1507_144x85.jpg" alt="ZTF Replacement Element for ZTF1000G"></img>
            <p>Catalog Number: E1000G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1000G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1507"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $414.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$144.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$269.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1508_144x85.jpg" alt="ZTF Replacement Element for ZTF1000H"></img>
            <p>Catalog Number: E1000H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1000H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1508"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $414.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$144.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$269.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1509_144x85.jpg" alt="ZTF Replacement Element for ZTF1000P"></img>
            <p>Catalog Number: E1000P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1000P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1509"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $414.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$144.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$269.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1510_144x85.jpg" alt="ZTF Replacement Element for ZTF100A"></img>
            <p>Catalog Number: E100A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF100A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1510"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $112.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$39.20</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$72.80</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1511_144x85.jpg" alt="ZTF Replacement Element for ZTF100G"></img>
            <p>Catalog Number: E100G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF100G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1511"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $112.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$39.20</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$72.80</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1512_144x85.jpg" alt="ZTF Replacement Element for ZTF100H"></img>
            <p>Catalog Number: E100H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF100H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1512"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $112.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$39.20</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$72.80</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1513_144x85.jpg" alt="ZTF Replacement Element for ZTF100P"></img>
            <p>Catalog Number: E100P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF100P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1513"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $112.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$39.20</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$72.80</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1514_144x85.jpg" alt="ZTF Replacement Element for ZTF1250A"></img>
            <p>Catalog Number: E1250A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1250A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1514"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $453.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$158.55</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$294.45</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1515_144x85.jpg" alt="ZTF Replacement Element for ZTF1250G"></img>
            <p>Catalog Number: E1250G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1250G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1515"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $453.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$158.55</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$294.45</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1516_144x85.jpg" alt="ZTF Replacement Element for ZTF1250H"></img>
            <p>Catalog Number: E1250H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1250H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1516"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $453.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$158.55</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$294.45</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1517_144x85.jpg" alt="ZTF Replacement Element for ZTF1250P"></img>
            <p>Catalog Number: E1250P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1250P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1517"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $453.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$158.55</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$294.45</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1518_144x85.jpg" alt="ZTF Replacement Element for ZTF150A"></img>
            <p>Catalog Number: E250P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF150A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1518"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $131.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$45.85</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$85.15</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1519_144x85.jpg" alt="ZTF Replacement Element for ZTF150G"></img>
            <p>Catalog Number: E150G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF150G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1519"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $131.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$45.85</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$85.15</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1520_144x85.jpg" alt="ZTF Replacement Element for ZTF150H"></img>
            <p>Catalog Number: E150H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF150H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1520"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $131.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$45.85</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$85.15</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1521_144x85.jpg" alt="ZTF Replacement Element for ZTF150P"></img>
            <p>Catalog Number: E150P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF150P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1521"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $131.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$45.85</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$85.15</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1522_144x85.jpg" alt="ZTF Replacement Element for ZTF15A"></img>
            <p>Catalog Number: E15A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF15A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1522"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $48.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$16.80</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$31.20</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1523_144x85.jpg" alt="ZTF Replacement Element for ZTF15G"></img>
            <p>Catalog Number: E15G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF15G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1523"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $48.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$16.80</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$31.20</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1524_144x85.jpg" alt="ZTF Replacement Element for ZTF15H"></img>
            <p>Catalog Number: E15H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF15H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1524"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $48.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$16.80</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$31.20</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1525_144x85.jpg" alt="ZTF Replacement Element for ZTF15P"></img>
            <p>Catalog Number: E15P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF15P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1525"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $48.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$16.80</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$31.20</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1526_144x85.jpg" alt="ZTF Replacement Element for ZTF1600A"></img>
            <p>Catalog Number: E1600A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1600A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1526"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $604.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$211.40</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$392.60</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1527_144x85.jpg" alt="ZTF Replacement Element for ZTF1600G"></img>
            <p>Catalog Number: E1600G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1600G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1527"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $604.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$211.40</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$392.60</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1528_144x85.jpg" alt="ZTF Replacement Element for ZTF1600H"></img>
            <p>Catalog Number: E1600H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1600H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1528"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $604.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$211.40</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$392.60</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1529_144x85.jpg" alt="ZTF Replacement Element for ZTF1600P"></img>
            <p>Catalog Number: E1600P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF1600P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1529"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $604.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$211.40</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$392.60</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1530_144x85.jpg" alt="ZTF Replacement Element for ZTF250A"></img>
            <p>Catalog Number: E250A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF250A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1530"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $227.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$79.45</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$147.55</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1531_144x85.jpg" alt="ZTF Replacement Element for ZTF250G"></img>
            <p>Catalog Number: E250G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF250G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1531"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $227.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$79.45</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$147.55</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1532_144x85.jpg" alt="ZTF Replacement Element for ZTF250H"></img>
            <p>Catalog Number: E250H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF250H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1532"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $227.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$79.45</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$147.55</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1533_144x85.jpg" alt="ZTF Replacement Element for ZTF250P"></img>
            <p>Catalog Number: E250P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF250P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1533"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $227.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$79.45</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$147.55</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1534_144x85.jpg" alt="ZTF Replacement Element for ZTF300A"></img>
            <p>Catalog Number: E300A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF300A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1534"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $242.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$84.70</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$157.30</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1535_144x85.jpg" alt="ZTF Replacement Element for ZTF300G"></img>
            <p>Catalog Number: E300G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF300G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1535"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $242.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$84.70</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$157.30</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1536_144x85.jpg" alt="ZTF Replacement Element for ZTF300H"></img>
            <p>Catalog Number: E300H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF300H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1536"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $242.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$84.70</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$157.30</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1537_144x85.jpg" alt="ZTF Replacement Element for ZTF300P"></img>
            <p>Catalog Number: E300P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF300P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1537"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $242.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$84.70</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$157.30</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1538_144x85.jpg" alt="ZTF Replacement Element for ZTF30A"></img>
            <p>Catalog Number: E30A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF30A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1538"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1539_144x85.jpg" alt="ZTF Replacement Element for ZTF30G"></img>
            <p>Catalog Number: E30G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF30G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1539"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1540_144x85.jpg" alt="ZTF Replacement Element for ZTF30H"></img>
            <p>Catalog Number: E30H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF30H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1540"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1541_144x85.jpg" alt="ZTF Replacement Element for ZTF30P"></img>
            <p>Catalog Number: E30P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF30P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1541"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $50.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$17.50</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$32.50</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1542_144x85.jpg" alt="ZTF Replacement Element for ZTF32A"></img>
            <p>Catalog Number: E32A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF32A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1542"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1543_144x85.jpg" alt="ZTF Replacement Element for ZTF32G"></img>
            <p>Catalog Number: E32G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF32G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1543"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1544_144x85.jpg" alt="ZTF Replacement Element for ZTF32H"></img>
            <p>Catalog Number: E32H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF32H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1544"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1545_144x85.jpg" alt="ZTF Replacement Element for ZTF32P"></img>
            <p>Catalog Number: E32P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF32P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1545"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $54.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$18.90</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$35.10</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1546_144x85.jpg" alt="ZTF Replacement Element for ZTF500A"></img>
            <p>Catalog Number: E500A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF500A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1546"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $303.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$106.05</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$196.95</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1547_144x85.jpg" alt="ZTF Replacement Element for ZTF500G"></img>
            <p>Catalog Number: E500G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF500G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1547"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $303.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$106.05</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$196.95</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1548_144x85.jpg" alt="ZTF Replacement Element for ZTF500H"></img>
            <p>Catalog Number: E500H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF500H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1548"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $303.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$106.05</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$196.95</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1549_144x85.jpg" alt="ZTF Replacement Element for ZTF500P"></img>
            <p>Catalog Number: E500P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF500P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1549"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $303.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$106.05</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$196.95</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1550_144x85.jpg" alt="ZTF Replacement Element for ZTF650A"></img>
            <p>Catalog Number: E650A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF650A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1550"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $318.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$111.30</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$206.70</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1551_144x85.jpg" alt="ZTF Replacement Element for ZTF650G"></img>
            <p>Catalog Number: E650G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF650G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1551"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $318.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$111.30</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$206.70</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1552_144x85.jpg" alt="ZTF Replacement Element for ZTF650H"></img>
            <p>Catalog Number: E650H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF650H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1552"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $318.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$111.30</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$206.70</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1553_144x85.jpg" alt="ZTF Replacement Element for ZTF650P"></img>
            <p>Catalog Number: E650P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF650P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1553"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $318.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$111.30</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$206.70</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1554_144x85.jpg" alt="ZTF Replacement Element for ZTF65A"></img>
            <p>Catalog Number: E65A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF65A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1554"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $65.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$22.75</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$42.25</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1555_144x85.jpg" alt="ZTF Replacement Element for ZTF65G"></img>
            <p>Catalog Number: E65G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF65G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1555"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $65.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$22.75</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$42.25</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1556_144x85.jpg" alt="ZTF Replacement Element for ZTF65H"></img>
            <p>Catalog Number: E65H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF65H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1556"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $65.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$22.75</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$42.25</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1557_144x85.jpg" alt="ZTF Replacement Element for ZTF65P"></img>
            <p>Catalog Number: E65P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF65P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1557"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $65.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$22.75</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$42.25</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1558_144x85.jpg" alt="ZTF Replacement Element for ZTF80A"></img>
            <p>Catalog Number: E80A</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF80A</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1558"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$30.10</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$55.90</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1559_144x85.jpg" alt="ZTF Replacement Element for ZTF80G"></img>
            <p>Catalog Number: E80G</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF80G</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1559"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$30.10</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$55.90</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1560_144x85.jpg" alt="ZTF Replacement Element for ZTF80H"></img>
            <p>Catalog Number: E80H</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF80H</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1560"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$30.10</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$55.90</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container3">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1561_144x85.jpg" alt="ZTF Replacement Element for ZTF80P"></img>
            <p>Catalog Number: E80P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title">ZTF Replacement Element<br />for ZTF80P</h2>
            <h4 className="product-brand-title">Zeks</h4>
            {/* <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4> */}
            {/* <h4 className="individual-product-savings">Savings: <strong>$37.62</strong></h4> */}

          <div className="individual-product-description">
            <ul>
              <li>ZTF Replacement Element</li>
              <br />
              <br />
              <a href="/subcat=205/prodID1561"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $86.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$30.10</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$55.90</strong></h3>
        </div>
        <br />

      </div>


    </div>
    <div id="quantity-input-group">
      <form action="/action_page.php">
        Quantity:
        <input type="number" className="quantityBox" value="0" />
      </form>
      <div id="add-to-cart">
        <input type="submit" value="Add To Cart" />
      </div>
    </div>
    <br />
    <br />
    <img src="../zeks_logo.png" alt="Zeks logo"/>
  </div>

</div>

{/* <div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Particulate Filter</a></h6>
      <h6 className="replacement_item_brand_name">Trident</h6>
      <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
    </div>
  </div>
</div>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1722_144x85.jpg" alt="60 SCFM Coalescing Filter"></img>
    </div>
  <div className="replacement_item_details">
    <h6 className="replacement_item_title"><a href="/prodID8">60 SCFM Coalescing Filter</a></h6>
    <h6 className="replacement_item_brand_name">Trident</h6>
    <h6 className="replacement_item_actual_price"><strong>$226.40</strong></h6>
  </div>
</div>
</div>
</div> */}
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
