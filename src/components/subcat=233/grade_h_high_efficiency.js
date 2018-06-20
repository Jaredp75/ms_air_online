import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Grade_H_High_Efficiency extends React.Component {

  render(){

    return(
      <div>

        <div className='content-area-container'>

          <div className="dropdown">
          <button className="dropbtn">Subcategories</button>
            <div className="dropdown-content">
              <a href="/subcat=233/grade_p_particulate_bulk_liquid">Grade P - Particulate/Bulk Liquid</a>
              <a href="/subcat=233/grade_g_general_purpose">Grade G - General Purpose</a>
              <a href="/subcat=233/grade_a_activated_carbon">Grade A - Activated Carbon</a>
            </div>
          </div>

          <div className="content-area-container2">
            <div id="individual_product_page">
              <div className="individual-product">
                <div className="individual_product_listing">
                  <div className="individual_product_entry">


                    <div id="product-image">
                      <img src="https://www.msaironline.com/images/prodImage/1772_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                      <p>Catalog Number: ZFC22G</p>
                    </div>

                    <div className="individual-product-details">
                      <h2 className="individual-product-title"><a href="/subcat=233/prodID1772">ZFC Compressed Air Filter</a></h2>
                      <h4 className="product-brand-title">Zeks</h4>

                    <div className="individual-product-description">
                      <ul>
                        <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                        <li><strong>Connection In/Out</strong>: 1/2"</li>
                        <li><strong>Elements Required Per Filter</strong>: 1</li>
                        <li><strong>Filter Length</strong>: 8.86"</li>
                        <li><strong>Filter Width</strong>: 2.99"</li>
                        <li><strong>Flow SCFM</strong>: 22</li>
                        <li><strong>Side Drain Port</strong>: N/A</li>
                        <br />
                        <li>ZFC Compressed Air Filter for General Purpose Filtration.</li>

                        <a href="/subcat=233/prodID1772"><strong>More Info >></strong></a>
                      </ul>
                    </div>
                      <h4 className="individual-product-suggested-retail-price">MSRP: $215.00</h4>
                      <h4 className="individual-product-savings">Savings: <strong>$75.25</strong></h4>
                      <h3 className="individual-product-actual-price"><strong>$139.75</strong></h3>
                  </div>

                  </div>
                </div>
                <div id="quantity-input-group">
                  <form action="/action_page.php">
                    Quantity:
                    <input type="number" className="quantityBox"/>
                  </form>
                  <div id="add-to-cart">
                    <input type="submit" value="Add To Cart" />
                  </div>

              </div>


            </div>
          </div>


          <div id="replacement_items_section">
            <h4 className="replacement_items_header">Replacement Parts</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img className="filter" src="http://www.msaironline.com/images/prodImage/1836_144x85.jpg" alt="ZFC Replacement Element"></img>
                  <p>Catalog Number: EC22G</p>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/subcat=233/prodID1836">ZFC Replacement Element</a></h6>
                <h6 className="replacement_item_brand_name">Zeks</h6>
                <div className="individual-product-description">
                  <ul>
                    <li>ZFC Replacement Element for ZFC22</li>
                  </ul>
                </div>
                <h6 className="individual-product-suggested-retail-price">MSRP: $44.00</h6>
                <h6 className="replacement_item_actual_price"><strong>$28.60</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1776_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC45G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1776">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 3/4"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 11.03"</li>
                  <li><strong>Filter Width</strong>: 3.86"</li>
                  <li><strong>Flow SCFM</strong>: 45</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1776"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $261.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$91.35</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$169.65</strong></h3>
            </div>

          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1840_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC45G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1840">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC45</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $50.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$32.50</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1780_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC65G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1780">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 3/4"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 11.03"</li>
                  <li><strong>Filter Width</strong>: 3.86"</li>
                  <li><strong>Flow SCFM</strong>: 65</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1780"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $323.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$113.05</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$209.95</strong></h3>
            </div>
          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1844_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC65G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1844">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC65</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $56.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$36.40</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1784_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC88G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1784">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 1"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 12.56"</li>
                  <li><strong>Filter Width</strong>: 5.08"</li>
                  <li><strong>Flow SCFM</strong>: 88</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1784"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $347.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$121.45</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$225.55</strong></h3>
            </div>
          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1848_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC88G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1848">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC88</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $74.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$48.10</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1788_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC110G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1788">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 1"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 12.56"</li>
                  <li><strong>Filter Width</strong>: 5.08"</li>
                  <li><strong>Flow SCFM</strong>: 110</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1788"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $408.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$142.80</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$265.20</strong></h3>
            </div>
          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1852_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC110G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1852">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC110</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $84.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$54.60</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1792_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC135G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1792">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 1"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 12.56"</li>
                  <li><strong>Filter Width</strong>: 5.08"</li>
                  <li><strong>Flow SCFM</strong>: 135</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1792"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $464.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$162.40</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$301.60</strong></h3>
            </div>
          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1856_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC135G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1856">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC135</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $105.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$68.25</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1796_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC235G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1796">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 1 1/2"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 16.11"</li>
                  <li><strong>Filter Width</strong>: 5.08"</li>
                  <li><strong>Flow SCFM</strong>: 235</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1796"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $666.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$233.10</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$432.90</strong></h3>
            </div>
          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1860_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC235G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1860">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC235</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $169.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$109.85</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1800_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC290G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1800">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 1 1/2"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 16.11"</li>
                  <li><strong>Filter Width</strong>: 5.08"</li>
                  <li><strong>Flow SCFM</strong>: 290</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1800"><strong>More Info >></strong></a>
                </ul>
              </div>
              <h4 className="individual-product-suggested-retail-price">MSRP: $697.00</h4>
              <h4 className="individual-product-savings">Savings: <strong>$243.95</strong></h4>
              <h3 className="individual-product-actual-price"><strong>$453.05</strong></h3>
            </div>
          </div>


        </div>
        <div id="quantity-input-group">
          <form action="/action_page.php">
            Quantity:
            <input type="number" className="quantityBox"/>
          </form>
          <div id="add-to-cart">
            <input type="submit" value="Add To Cart" />
          </div>
        </div>

      </div>
    </div>

    <div id="replacement_items_section">
      <h4 className="replacement_items_header">Replacement Parts</h4>

      <div className="replacement_item_listing">
        <div className="replacement_item_entry">
          <div className="replacement_item_image">
            <img className="filter" src="http://www.msaironline.com/images/prodImage/1864_144x85.jpg" alt="ZFC Replacement Element"></img>
            <p>Catalog Number: EC290G</p>
          </div>
        <div className="replacement_item_details">
          <h6 className="replacement_item_title"><a href="/subcat=233/prodID1864">ZFC Replacement Element</a></h6>
          <h6 className="replacement_item_brand_name">Zeks</h6>
          <div className="individual-product-description">
            <ul>
              <li>ZFC Replacement Element for ZFC290</li>
            </ul>
          </div>
          <h6 className="individual-product-suggested-retail-price">MSRP: $208.00</h6>
          <h6 className="replacement_item_actual_price"><strong>$135.20</strong></h6>
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
                    <img src="https://www.msaironline.com/images/prodImage/1804_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                    <p>Catalog Number: ZFC350G</p>
                  </div>


                  <div className="individual-product-details">
                    <h2 className="individual-product-title"><a href="/subcat=233/prodID1804">ZFC Compressed Air Filter</a></h2>
                    <h4 className="product-brand-title">Zeks</h4>

                  <div className="individual-product-description">
                    <ul>
                      <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                      <li><strong>Connection In/Out</strong>: 2"</li>
                      <li><strong>Elements Required Per Filter</strong>: 1</li>
                      <li><strong>Filter Length</strong>: 20.40"</li>
                      <li><strong>Filter Width</strong>: 6.69"</li>
                      <li><strong>Flow SCFM</strong>: 350</li>
                      <li><strong>Side Drain Port</strong>: N/A</li>
                      <br />
                      <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                      <a href="/subcat=233/prodID1804"><strong>More Info >></strong></a>
                    </ul>
                  </div>
                    <h4 className="individual-product-suggested-retail-price">MSRP: $777.00</h4>
                    <h4 className="individual-product-savings">Savings: <strong>$271.95</strong></h4>
                    <h3 className="individual-product-actual-price"><strong>$505.05</strong></h3>
                </div>
              </div>


            </div>
            <div id="quantity-input-group">
              <form action="/action_page.php">
                Quantity:
                <input type="number" className="quantityBox"/>
              </form>
              <div id="add-to-cart">
                <input type="submit" value="Add To Cart" />
              </div>
            </div>

          </div>
        </div>

          <div id="replacement_items_section">
            <h4 className="replacement_items_header">Replacement Parts</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img className="filter" src="http://www.msaironline.com/images/prodImage/1868_144x85.jpg" alt="ZFC Replacement Element"></img>
                  <p>Catalog Number: EC350G</p>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/subcat=233/prodID1868">ZFC Replacement Element</a></h6>
                <h6 className="replacement_item_brand_name">Zeks</h6>
                <div className="individual-product-description">
                  <ul>
                    <li>ZFC Replacement Element for ZFC350</li>
                  </ul>
                </div>
                  <h6 className="individual-product-suggested-retail-price">MSRP: $228.00</h6>
                  <h6 className="replacement_item_actual_price"><strong>$148.20</strong></h6>
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
                    <img src="https://www.msaironline.com/images/prodImage/1808_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                    <p>Catalog Number: ZFC470G</p>
                  </div>


                  <div className="individual-product-details">
                    <h2 className="individual-product-title"><a href="/subcat=233/prodID1808">ZFC Compressed Air Filter</a></h2>
                    <h4 className="product-brand-title">Zeks</h4>

                  <div className="individual-product-description">
                    <ul>
                      <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                      <li><strong>Connection In/Out</strong>: 2"</li>
                      <li><strong>Elements Required Per Filter</strong>: 1</li>
                      <li><strong>Filter Length</strong>: 20.40"</li>
                      <li><strong>Filter Width</strong>: 6.69"</li>
                      <li><strong>Flow SCFM</strong>: 470</li>
                      <li><strong>Side Drain Port</strong>: N/A</li>
                      <br />
                      <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                      <a href="/subcat=233/prodID1808"><strong>More Info >></strong></a>
                    </ul>
                  </div>
                  <h4 className="individual-product-suggested-retail-price">MSRP: $1,019.00</h4>
                  <h4 className="individual-product-savings">Savings: <strong>$356.65</strong></h4>
                  <h3 className="individual-product-actual-price"><strong>$662.35</strong></h3>
                </div>
              </div>


            </div>
            <div id="quantity-input-group">
              <form action="/action_page.php">
                Quantity:
                <input type="number" className="quantityBox"/>
              </form>
              <div id="add-to-cart">
                <input type="submit" value="Add To Cart" />
              </div>
            </div>

          </div>
        </div>

        <div id="replacement_items_section">
          <h4 className="replacement_items_header">Replacement Parts</h4>

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="filter" src="http://www.msaironline.com/images/prodImage/1872_144x85.jpg" alt="ZFC Replacement Element"></img>
                <p>Catalog Number: EC470G</p>
              </div>
            <div className="replacement_item_details">
              <h6 className="replacement_item_title"><a href="/subcat=233/prodID1872">ZFC Replacement Element</a></h6>
              <h6 className="replacement_item_brand_name">Zeks</h6>
              <div className="individual-product-description">
                <ul>
                  <li>ZFC Replacement Element for ZFC470</li>
                </ul>
              </div>
              <h6 className="individual-product-suggested-retail-price">MSRP: $260.00</h6>
              <h6 className="replacement_item_actual_price"><strong>$169.00</strong></h6>
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
                    <img src="https://www.msaironline.com/images/prodImage/1812_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                    <p>Catalog Number: ZFC600G</p>
                  </div>


                  <div className="individual-product-details">
                    <h2 className="individual-product-title"><a href="/subcat=233/prodID1812">ZFC Compressed Air Filter</a></h2>
                    <h4 className="product-brand-title">Zeks</h4>

                  <div className="individual-product-description">
                    <ul>
                      <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                      <li><strong>Connection In/Out</strong>: 2"</li>
                      <li><strong>Elements Required Per Filter</strong>: 1</li>
                      <li><strong>Filter Length</strong>: 20.40"</li>
                      <li><strong>Filter Width</strong>: 6.69"</li>
                      <li><strong>Flow SCFM</strong>: 600</li>
                      <li><strong>Side Drain Port</strong>: N/A</li>
                      <br />
                      <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                      <a href="/subcat=233/prodID1812"><strong>More Info >></strong></a>
                    </ul>
                  </div>
                  <h4 className="individual-product-suggested-retail-price">MSRP: $1,204.00</h4>
                  <h4 className="individual-product-savings">Savings: <strong>$421.40</strong></h4>
                  <h3 className="individual-product-actual-price"><strong>$782.60</strong></h3>
                </div>
              </div>


            </div>
            <div id="quantity-input-group">
              <form action="/action_page.php">
                Quantity:
                <input type="number" className="quantityBox"/>
              </form>
              <div id="add-to-cart">
                <input type="submit" value="Add To Cart" />
              </div>
            </div>

          </div>
        </div>

        <div id="replacement_items_section">
          <h4 className="replacement_items_header">Replacement Parts</h4>

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="filter" src="http://www.msaironline.com/images/prodImage/1876_144x85.jpg" alt="ZFC Replacement Element"></img>
                <p>Catalog Number: EC600G</p>
              </div>
            <div className="replacement_item_details">
              <h6 className="replacement_item_title"><a href="/subcat=233/prodID1876">ZFC Replacement Element</a></h6>
              <h6 className="replacement_item_brand_name">Zeks</h6>
              <div className="individual-product-description">
                <ul>
                  <li>ZFC Replacement Element for ZFC600</li>
                </ul>
              </div>
              <h6 className="individual-product-suggested-retail-price">MSRP: $273.00</h6>
              <h6 className="replacement_item_actual_price"><strong>$177.45</strong></h6>
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
                    <img src="https://www.msaironline.com/images/prodImage/1816_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                    <p>Catalog Number: ZFC710G</p>
                  </div>


                  <div className="individual-product-details">
                    <h2 className="individual-product-title"><a href="/subcat=233/prodID1816">ZFC Compressed Air Filter</a></h2>
                    <h4 className="product-brand-title">Zeks</h4>

                  <div className="individual-product-description">
                    <ul>
                      <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                      <li><strong>Connection In/Out</strong>: 3"</li>
                      <li><strong>Elements Required Per Filter</strong>: 1</li>
                      <li><strong>Filter Length</strong>: 23.63"</li>
                      <li><strong>Filter Width</strong>: 8.07"</li>
                      <li><strong>Flow SCFM</strong>: 710</li>
                      <li><strong>Side Drain Port</strong>: N/A</li>
                      <br />
                      <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                      <a href="/subcat=233/prodID1816"><strong>More Info >></strong></a>
                    </ul>
                  </div>
                  <h4 className="individual-product-suggested-retail-price">MSRP: $1,285.00</h4>
                  <h4 className="individual-product-savings">Savings: <strong>$449.75</strong></h4>
                  <h3 className="individual-product-actual-price"><strong>$835.25</strong></h3>
                </div>
              </div>


            </div>
            <div id="quantity-input-group">
              <form action="/action_page.php">
                Quantity:
                <input type="number" className="quantityBox"/>
              </form>
              <div id="add-to-cart">
                <input type="submit" value="Add To Cart" />
              </div>
            </div>

          </div>
        </div>

        <div id="replacement_items_section">
          <h4 className="replacement_items_header">Replacement Parts</h4>

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="filter" src="http://www.msaironline.com/images/prodImage/1880_144x85.jpg" alt="ZFC Replacement Element"></img>
                <p>Catalog Number: EC710G</p>
              </div>
            <div className="replacement_item_details">
              <h6 className="replacement_item_title"><a href="/subcat=233/prodID1880">ZFC Replacement Element</a></h6>
              <h6 className="replacement_item_brand_name">Zeks</h6>
              <div className="individual-product-description">
                <ul>
                  <li>ZFC Replacement Element for ZFC710</li>
                </ul>
              </div>
              <h6 className="individual-product-suggested-retail-price">MSRP: $284.00</h6>
              <h6 className="replacement_item_actual_price"><strong>$184.60</strong></h6>
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
                    <img src="https://www.msaironline.com/images/prodImage/1820_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                    <p>Catalog Number: ZFC920G</p>
                  </div>


                  <div className="individual-product-details">
                    <h2 className="individual-product-title"><a href="/subcat=233/prodID1820">ZFC Compressed Air Filter</a></h2>
                    <h4 className="product-brand-title">Zeks</h4>

                  <div className="individual-product-description">
                    <ul>
                      <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                      <li><strong>Connection In/Out</strong>: 3"</li>
                      <li><strong>Elements Required Per Filter</strong>: 1</li>
                      <li><strong>Filter Length</strong>: 27.56"</li>
                      <li><strong>Filter Width</strong>: 8.07"</li>
                      <li><strong>Flow SCFM</strong>: 920</li>
                      <li><strong>Side Drain Port</strong>: N/A</li>
                      <br />
                      <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                      <a href="/subcat=233/prodID1820"><strong>More Info >></strong></a>
                    </ul>
                  </div>
                  <h4 className="individual-product-suggested-retail-price">MSRP: $1,653.00</h4>
                  <h4 className="individual-product-savings">Savings: <strong>$578.55</strong></h4>
                  <h3 className="individual-product-actual-price"><strong>$1,074.45</strong></h3>
                </div>
              </div>


            </div>
            <div id="quantity-input-group">
              <form action="/action_page.php">
                Quantity:
                <input type="number" className="quantityBox"/>
              </form>
              <div id="add-to-cart">
                <input type="submit" value="Add To Cart" />
              </div>
            </div>

          </div>
        </div>

        <div id="replacement_items_section">
          <h4 className="replacement_items_header">Replacement Parts</h4>

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="filter" src="http://www.msaironline.com/images/prodImage/1884_144x85.jpg" alt="ZFC Replacement Element"></img>
                <p>Catalog Number: EC920G</p>
              </div>
            <div className="replacement_item_details">
              <h6 className="replacement_item_title"><a href="/subcat=233/prodID1884">ZFC Replacement Element</a></h6>
              <h6 className="replacement_item_brand_name">Zeks</h6>
              <div className="individual-product-description">
                <ul>
                  <li>ZFC Replacement Element for ZFC920</li>
                </ul>
              </div>
              <h6 className="individual-product-suggested-retail-price">MSRP: $341.00</h6>
              <h6 className="replacement_item_actual_price"><strong>$221.65</strong></h6>
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
                        <img src="https://www.msaironline.com/images/prodImage/1824_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                        <p>Catalog Number: ZFC1080G</p>
                      </div>


                      <div className="individual-product-details">
                        <h2 className="individual-product-title"><a href="/subcat=233/prodID1824">ZFC Compressed Air Filter</a></h2>
                        <h4 className="product-brand-title">Zeks</h4>

                      <div className="individual-product-description">
                        <ul>
                          <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                          <li><strong>Connection In/Out</strong>: 3"</li>
                          <li><strong>Elements Required Per Filter</strong>: 1</li>
                          <li><strong>Filter Length</strong>: 27.56"</li>
                          <li><strong>Filter Width</strong>: 8.07"</li>
                          <li><strong>Flow SCFM</strong>: 1080</li>
                          <li><strong>Side Drain Port</strong>: N/A</li>
                          <br />
                          <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                          <a href="/subcat=233/prodID1824"><strong>More Info >></strong></a>
                        </ul>
                      </div>
                        <h4 className="individual-product-suggested-retail-price">MSRP: $1,717.00</h4>
                        <h4 className="individual-product-savings">Savings: <strong>$600.95</strong></h4>
                        <h3 className="individual-product-actual-price"><strong>$1,116.05</strong></h3>
                    </div>
                  </div>


                </div>
                <div id="quantity-input-group">
                  <form action="/action_page.php">
                  Quantity:
                  <input type="number" className="quantityBox"/>
                </form>
                <div id="add-to-cart">
                  <input type="submit" value="Add To Cart" />
                </div>
              </div>

                </div>
              </div>

              <div id="replacement_items_section">
                <h4 className="replacement_items_header">Replacement Parts</h4>

                <div className="replacement_item_listing">
                  <div className="replacement_item_entry">
                    <div className="replacement_item_image">
                      <img className="filter" src="http://www.msaironline.com/images/prodImage/1888_144x85.jpg" alt="ZFC Replacement Element"></img>
                      <p>Catalog Number: EC1080G</p>
                    </div>
                    <div className="replacement_item_details">
                      <h6 className="replacement_item_title"><a href="/subcat=233/prodID1888">ZFC Replacement Element</a></h6>
                      <h6 className="replacement_item_brand_name">Zeks</h6>
                      <div className="individual-product-description">
                        <ul>
                          <li>ZFC Replacement Element for ZFC1080</li>
                        </ul>
                      </div>
                        <h6 className="individual-product-suggested-retail-price">MSRP: $379.00</h6>
                        <h6 className="replacement_item_actual_price"><strong>$246.35</strong></h6>
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
                    <img src="https://www.msaironline.com/images/prodImage/1828_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                    <p>Catalog Number: ZFC1350G</p>
                  </div>


                  <div className="individual-product-details">
                    <h2 className="individual-product-title"><a href="/subcat=233/prodID1828">ZFC Compressed Air Filter</a></h2>
                    <h4 className="product-brand-title">Zeks</h4>

                  <div className="individual-product-description">
                    <ul>
                      <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                      <li><strong>Connection In/Out</strong>: 3"</li>
                      <li><strong>Elements Required Per Filter</strong>: 1</li>
                      <li><strong>Filter Length</strong>: 36.62"</li>
                      <li><strong>Filter Width</strong>: 8.07"</li>
                      <li><strong>Flow SCFM</strong>: 1350</li>
                      <li><strong>Side Drain Port</strong>: N/A</li>
                      <br />
                      <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                      <a href="/subcat=233/prodID1828"><strong>More Info >></strong></a>
                    </ul>
                  </div>
                  <h4 className="individual-product-suggested-retail-price">MSRP: $1,889.00</h4>
                  <h4 className="individual-product-savings">Savings: <strong>$661.15</strong></h4>
                  <h3 className="individual-product-actual-price"><strong>$1,227.85</strong></h3>
                </div>
              </div>


            </div>
            <div id="quantity-input-group">
              <form action="/action_page.php">
              Quantity:
              <input type="number" className="quantityBox"/>
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>

            </div>
          </div>

          <div id="replacement_items_section">
            <h4 className="replacement_items_header">Replacement Parts</h4>

            <div className="replacement_item_listing">
              <div className="replacement_item_entry">
                <div className="replacement_item_image">
                  <img className="filter" src="http://www.msaironline.com/images/prodImage/1892_144x85.jpg" alt="ZFC Replacement Element"></img>
                  <p>Catalog Number: EC1350G</p>
                </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/subcat=233/prodID1892">ZFC Replacement Element</a></h6>
                <h6 className="replacement_item_brand_name">Zeks</h6>
                <div className="individual-product-description">
                  <ul>
                    <li>ZFC Replacement Element for ZFC1350</li>
                  </ul>
                </div>
                <h6 className="individual-product-suggested-retail-price">MSRP: $473.00</h6>
                <h6 className="replacement_item_actual_price"><strong>$307.45</strong></h6>
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
                <img src="https://www.msaironline.com/images/prodImage/1832_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
                <p>Catalog Number: ZFC1600G</p>
              </div>


              <div className="individual-product-details">
                <h2 className="individual-product-title"><a href="/subcat=233/prodID1832">ZFC Compressed Air Filter</a></h2>
                <h4 className="product-brand-title">Zeks</h4>

              <div className="individual-product-description">
                <ul>
                  <li><strong>Bottom Drain Port</strong>: 1/4"</li>
                  <li><strong>Connection In/Out</strong>: 3"</li>
                  <li><strong>Elements Required Per Filter</strong>: 1</li>
                  <li><strong>Filter Length</strong>: 36.62"</li>
                  <li><strong>Filter Width</strong>: 8.07"</li>
                  <li><strong>Flow SCFM</strong>: 1600</li>
                  <li><strong>Side Drain Port</strong>: N/A</li>
                  <br />
                  <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>

                  <a href="/subcat=233/prodID1832"><strong>More Info >></strong></a>
                </ul>
              </div>
                <h4 className="individual-product-suggested-retail-price">MSRP: $2,155.00</h4>
                <h4 className="individual-product-savings">Savings: <strong>$754.25</strong></h4>
                <h3 className="individual-product-actual-price"><strong>$1,400.75</strong></h3>
            </div>
          </div>


          </div>
          <div id="quantity-input-group">
            <form action="/action_page.php">
              Quantity:
              <input type="number" className="quantityBox"/>
            </form>
            <div id="add-to-cart">
              <input type="submit" value="Add To Cart" />
            </div>
          </div>

        </div>
      </div>

        <div id="replacement_items_section">
          <h4 className="replacement_items_header">Replacement Parts</h4>

          <div className="replacement_item_listing">
            <div className="replacement_item_entry">
              <div className="replacement_item_image">
                <img className="filter" src="http://www.msaironline.com/images/prodImage/1892_144x85.jpg" alt="ZFC Replacement Element"></img>
                <p>Catalog Number: EC1600G</p>
              </div>
              <div className="replacement_item_details">
                <h6 className="replacement_item_title"><a href="/subcat=233/prodID1892">ZFC Replacement Element</a></h6>
                <h6 className="replacement_item_brand_name">Zeks</h6>
                <div className="individual-product-description">
                  <ul>
                    <li>ZFC Replacement Element for ZFC1600</li>
                  </ul>
                </div>
                <h6 className="individual-product-suggested-retail-price">MSRP: $519.00</h6>
                <h6 className="replacement_item_actual_price"><strong>$337.35</strong></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />



















{/* ++++++++++++++++++++++++++++ */}

{/* <div className="content-area-container">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div className="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1811_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
            <p>Catalog Number: ZFC600P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title"><a href="/subcat=233/prodID1811">ZFC Compressed Air Filter</a></h2>
            <h4 className="product-brand-title">Zeks</h4>

          <div className="individual-product-description">
            <ul>
              <li><strong>Bottom Drain Port</strong>: 1/4"</li>
              <li><strong>Connection In/Out</strong>: 2"</li>
              <li><strong>Elements Required Per Filter</strong>: 1</li>
              <li><strong>Filter Length</strong>: 20.40"</li>
              <li><strong>Filter Width</strong>: 6.69"</li>
              <li><strong>Flow SCFM</strong>: 600</li>
              <li><strong>Side Drain Port</strong>: N/A</li>
              <br />
              <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>
              <br />
              <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
              <br />
              <a href="/subcat=244/prodID1811"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $1204.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$782.60</strong></h3>
        </div>
      </div>

      <div className="quantity-input-group">
        <form action="/action_page.php">
          Quantity:
          <input type="number" className="quantityBox"/>
        </form>
      </div>
    </div>

    <div className="add-to-cart">
      <input type="submit" value="Add To Cart" />
    </div>
  </div>
</div>

<div className="replacement_items_section">
  <h4 className="replacement_items_header">Replacement Parts</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img className="filter" src="http://www.msaironline.com/images/prodImage/1875_144x85.jpg" alt="ZFC Replacement Element"></img>
        <p>Catalog Number: EC350P</p>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID1875">ZFC Replacement Element</a></h6>
      <h6 className="replacement_item_brand_name">Zeks</h6>
      <div className="individual-product-description">
        <ul>
          <li>ZFC Replacement Element for ZFC600</li>
        </ul>
      </div>
      <h6 className="individual-product-suggested-retail-price">MSRP: $273.00</h6>
      <h6 className="replacement_item_actual_price"><strong>$177.45</strong></h6>
    </div>
  </div>
</div>
</div>
</div>
<br /> */}









{/* ++++++++++++++++++++++++++++ */}

{/* <div className="content-area-container">
  <div id="individual_product_page">
    <div className="individual-product">
      <div className="individual_product_listing">
        <div className="individual_product_entry">


          <div className="product-image">
            <img src="https://www.msaironline.com/images/prodImage/1803_144x85.jpg" alt="ZFC Compressed Air Filter"></img>
            <p>Catalog Number: ZFC350P</p>
          </div>


          <div className="individual-product-details">
            <h2 className="individual-product-title"><a href="/subcat=233/prodID1803">ZFC Compressed Air Filter</a></h2>
            <h4 className="product-brand-title">Zeks</h4>

          <div className="individual-product-description">
            <ul>
              <li><strong>Bottom Drain Port</strong>: 1/4"</li>
              <li><strong>Connection In/Out</strong>: 2"</li>
              <li><strong>Elements Required Per Filter</strong>: 1</li>
              <li><strong>Filter Length</strong>: 20.40"</li>
              <li><strong>Filter Width</strong>: 6.69"</li>
              <li><strong>Flow SCFM</strong>: 350</li>
              <li><strong>Side Drain Port</strong>: N/A</li>
              <br />
              <li>ZFC Compressed Air Filter for Particulate/Bulk Liquid.</li>
              <br />
              <li>Call Toll Free <strong>(877) 672-4799</strong> for detailed pricing.</li>
              <br />
              <a href="/subcat=244/prodID1803"><strong>More Info >></strong></a>
            </ul>
          </div>
          <h4 className="individual-product-suggested-retail-price">MSRP: $777.00</h4>
          <h4 className="individual-product-savings">Savings: <strong>$</strong></h4>
          <h3 className="individual-product-actual-price"><strong>$505.05</strong></h3>
        </div>
      </div>

      <div className="quantity-input-group">
        <form action="/action_page.php">
          Quantity:
          <input type="number" className="quantityBox"/>
        </form>
      </div>
    </div>

    <div className="add-to-cart">
      <input type="submit" value="Add To Cart" />
    </div>
  </div>
</div>

<div className="replacement_items_section">
  <h4 className="replacement_items_header">Replacement Parts</h4>

  <div className="replacement_item_listing">
    <div className="replacement_item_entry">
      <div className="replacement_item_image">
        <img className="filter" src="http://www.msaironline.com/images/prodImage/1835_144x85.jpg" alt="ZFC Replacement Element"></img>
        <p>Catalog Number: EC350P</p>
      </div>
    <div className="replacement_item_details">
      <h6 className="replacement_item_title"><a href="/prodID8">ZFC Replacement Element</a></h6>
      <h6 className="replacement_item_brand_name">Zeks</h6>
      <div className="individual-product-description">
        <ul>
          <li>ZFC Replacement Element for ZFC350</li>
        </ul>
      </div>
      <h6 className="individual-product-suggested-retail-price">MSRP: $228.00</h6>
      <h6 className="replacement_item_actual_price"><strong>$148.20</strong></h6>
    </div>
  </div>
</div>
</div>
</div> */}
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
