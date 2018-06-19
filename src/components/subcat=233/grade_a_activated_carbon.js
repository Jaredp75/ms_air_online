import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Grade_A_Activated_Carbon extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>

          <div className="dropdown">
          <button className="dropbtn">Subcategories</button>
            <div className="dropdown-content">
              <a href="/subcat=233/grade_a_particulate_bulk_liquid">Grade P - Particulate/Bulk Liquid</a>
              <a href="subcat=233/grade_g_general_purpose">Grade G - General Purpose</a>
              <a href="/subcat=233/grade_h_high_efficiency">Grade H - High Efficiency</a>
              <a href="/subcat=233/grade_a_activated_carbon">Grade A - Activated Carbon</a>
            </div>
          </div>

          <div className="content-area-container2">
            <div id="individual_product_page">
              <div className="individual-product">
                <div className="individual_product_listing">
                  <div className="individual_product_entry">


                    <div id="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1633_144x85.jpg" alt="15HP Air Compressor"></img>
                      <p>Catalog Number: 15VFD</p>
                    </div>


                    <div className="individual-product-details">
                      <h2 className="individual-product-title"><a href="/subcat=244/prodID1633">15HP Air Compressor</a></h2>
                      <h4 className="product-brand-title">Sullivan-Palatek</h4>

                    <div className="individual-product-description">
                      <ul>
                        <li><strong>CFM</strong>: 55 CFM @ 125 psi</li>
                        <li><strong>HP</strong>: 15</li>
                        <li><strong>Voltage</strong>: 208/230/460V</li>
                        <br />
                        <li>Floor mounted 15HP rotary screw air compressor, air cooled VSD</li>
                        <br />
                        <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                        <br />
                        <a href="/subcat=244/prodID1633"><strong>More Info >></strong></a>
                      </ul>
                    </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $21,665.70</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$8,995.70</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$12,670.00</strong></h3>
                  </div>
                </div>

                <div id="quantity-input-group">
                  <form action="/action_page.php">
                    Qty:
                    <input type="number" className="quantityBox" value="0" />
                  </form>
                  <div id="add-to-cart">
                    <input type="submit" value="Add To Cart" />
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div id="replacement_items_section">
            <h4 className="replacement_items_header">Accessories</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

        <div className="content-area-container2">
          <div id="individual_product_page">
            <div className="individual-product">
              <div className="individual_product_listing">
                <div className="individual_product_entry">


                    <div id="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1634_144x85.jpg" alt="20HP Air Compressor"></img>
                      <p>Catalog Number: 20VFD</p>
                    </div>

                    <div className="individual-product-details">
                      <h2 className="individual-product-title"><a href="/subcat=252/prodID1719">20HP Air Compressor</a></h2>
                      <h4 className="product-brand-title">Sullivan-Palatek</h4>


                    <div className="individual-product-description">
                      <ul>
                        <li><strong>CFM</strong>: 80 CFM @ 125 psi</li>
                        <li><strong>SCFM</strong>: 20</li>
                        <li><strong>Voltage</strong>: 208/230/460V</li>
                        <br />
                        <li>Floor mounted 25HP rotary screw air compressor, air cooled VSD</li>
                        <br />
                        <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                        <br />
                        <a href="/subcat=244/prodID1634"><strong>More Info >></strong></a>
                      </ul>
                    </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $23,105.90</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$9,593.68</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$13,512.22</strong></h3>
                  </div>
                </div>

                <div id="quantity-input-group">
                  <form action="/action_page.php">
                  Qty:
                  <input type="number" className="quantityBox" value="0" />
                </form>
                <div id="add-to-cart">
                  <input type="submit" value="Add To Cart" />
                </div>
              </div>
            </div>


          </div>
        </div>

        <div id="replacement_items_section">
          <h4 className="replacement_items_header">Accessories</h4>

        <div className="replacement_item_listing">
          <div className="replacement_item_entry">
            <div className="replacement_item_image">
              <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1635_144x85.jpg" alt="25HP Air Compressor"></img>
                <p>Catalog Number: 25VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1635">25HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Sullivan-Palatek</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 115 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 25</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 25HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1635"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $25,536.00</h4>
                <h4 className="individual-product-savings">Savings: <strong>$10,602.67</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$14,933.33</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1636_144x85.jpg" alt="30HP Air Compressor"></img>
                <p>Catalog Number: 30VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1636">30HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Sullivan-Palatek</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 125 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 30</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 30HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1636"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $25,921.70</h4>
                <h4 className="individual-product-savings">Savings: <strong>$10,762.81</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$15,158.89</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1637_144x85.jpg" alt="40HP Air Compressor"></img>
                <p>Catalog Number: 40VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1637">40HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Sullivan-Palatek</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 166 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 40</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 40HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1637"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $29,497.50</h4>
                <h4 className="individual-product-savings">Savings: <strong>$12,247.50</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$17,250.00</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1638_144x85.jpg" alt="50HP Air Compressor"></img>
                <p>Catalog Number: 50VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1638">50HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Sullivan-Palatek</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 225 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 50</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 50HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1638"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $35,165.20</h4>
                <h4 className="individual-product-savings">Savings: <strong>$14,600.76</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$20,564.44</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1639_144x85.jpg" alt="60HP Air Compressor"></img>
                <p>Catalog Number: 100VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1639">60HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Sullivan-Palatek</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 280 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 60</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 60HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1639"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $45,638.00</h4>
                <h4 className="individual-product-savings">Savings: <strong>$18,949.11</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$26,688.89</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

    {/* ++++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1640_144x85.jpg" alt="75HP Air Compressor"></img>
                <p>Catalog Number: 100VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1640">75HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Trident</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 440 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 100</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 75HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1640"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $49,489.30</h4>
                <h4 className="individual-product-savings">Savings: <strong>$20,548.19</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$28,941.11</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
      </div>
    </div>
    <br />

{/* +++++++++++++++++++++++++++ */}

    <div className="content-area-container2">
      <div id="individual_product_page">
        <div className="individual-product">
          <div className="individual_product_listing">
            <div className="individual_product_entry">


              <div id="product-image">
                <img src="https://www.msaironline.com/images/prodImage/1641_144x85.jpg" alt="100HP Air Compressor"></img>
                <p>Catalog Number: 100VFD</p>
              </div>

              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=244/prodID1641">100HP Air Compressor</a></h2>
                <h4 className="product-brand-title">Trident</h4>


              <div className="individual-product-description">
                <ul>
                  <li><strong>CFM</strong>: 440 CFM @ 125 psi</li>
                  <li><strong>SCFM</strong>: 100</li>
                  <li><strong>Voltage</strong>: 208/230/460V</li>
                  <br />
                  <li>Floor mounted 100HP rotary screw air compressor, air cooled VSD</li>
                  <br />
                  <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
                  <br />
                  <a href="/subcat=244/prodID1641"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $59128.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$24,550.22</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$34,577.78</strong></h3>
            </div>
          </div>

          <div id="quantity-input-group">
            <form action="/action_page.php">
              Qty:
              <input type="number" className="quantityBox" value="0" />
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>
        </div>


      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Accessories</h4>

    <div className="replacement_item_listing">
      <div className="replacement_item_entry">
        <div className="replacement_item_image">
          <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
  </div>
</div>
<br />

{/* ++++++++++++++++++++++++++++ */}

<div className="content-area-container2">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div id="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1642_144x85.jpg" alt="125HP Air Compressor"></img>
            <p>Catalog Number: 20VFD</p>
          </div>

          <div className="individual-product-details">
            <h2 className="individual-product-title"><a href="/subcat=244/prodID1642">125HP Air Compressor</a></h2>
            <h4 className="product-brand-title">Sullivan-Palatek</h4>


          <div className="individual-product-description">
            <ul>
              <li><strong>CFM</strong>: 625 CFM @ 125 psi</li>
              <li><strong>SCFM</strong>: 125</li>
              <li><strong>Voltage</strong>: 208/230/460V</li>
              <br />
              <li>Floor mounted 125HP rotary screw air compressor, air cooled VSD</li>
              <br />
              <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
              <br />
              <a href="/subcat=244/prodID1642"><strong>More Info >></strong></a>
            </ul>
          </div>
            <h4 className="individual-product-suggested-retail-price">MSRP: $80,465.00</h4>
            <h4 className="individual-product-savings">Savings: <strong>$33,409.44</strong></h4>
            <h3 className="individual-product-actual-price"><strong>$47,055.56</strong></h3>
        </div>
      </div>

      <div id="quantity-input-group">
        <form action="/action_page.php">
          Qty:
          <input type="number" className="quantityBox" value="0" />
        </form>
        <div id="add-to-cart">
          <input type="submit" value="Add To Cart" />
        </div>
      </div>
    </div>


  </div>
</div>

<div id="replacement_items_section">
  <h4 className="replacement_items_header">Accessories</h4>

<div className="replacement_item_listing">
  <div className="replacement_item_entry">
    <div className="replacement_item_image">
      <img className="thumbnail" src="http://www.msaironline.com/images/prodImage/1702_144x85.jpg" alt="60 SCFM Particulate Filter"></img>
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
  </div>
</div>
<br />









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
