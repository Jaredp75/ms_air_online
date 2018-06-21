import React from "react";
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import FooterLinks from './footer-links/footer-links.js';
// import placeholder from '../img/compressor_placeholder.jpg';
import AboutLinks from './footer-links/about-links.js';
import HelpAndCurrency from './help-and-currency.js';
// import QuantityBox from './quantity_box.js';

export default class Home extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     category:[]
  //   }
  //   this.componentDidMount = this.componentDidMount.bind(this);
  // }

  // componentDidMount(){
  //   fetch('https://www.msaironline.com/qa1/api/category.php')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           category: result.category
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  //   }

  //   render() {
  //     const { error, isLoaded, category } = this.state;
  //     if (error) {
  //       return<div>Error: {error.message}</div>;
  //     } else if (!isLoaded) {
  //       return <div>Loading...</div>;
  //     } else {
  //       return (
  //         {category.map(category => (
  //           <div className="category_listing">
  //             <p>Category</p>
  //             <h4 className="category">{category.taxName}</h4>
  //           </div>
  //         ))},
  //       );
  //     }
  //   }
  // }
  //
  // Category.propTypes = {
  //   category: PropTypes.array,
  //   actions: PropTypes.object
  // };
  //
  // function mapStateToProps(state) {
  //   return {
  //     ...state.category
  //   };
  // }
  //
  // function mapDispatchToProps(dispatch) {
  //   return { actions: bindActionCreators(actionCreators, dispatch) };
  // }
  //
  // export default connect(mapStateToProps, mapDispatchToProps)(category);
  //     return results.json();
  //   }).then(data=>{
  //     this.setState({orgInfo: data.organization});
  //     this.setState({tourList: data.organization.tours})
  //   })
  // }

  render(){
    // console.log(this.state.category)
    // console.log(this.state.taxName)
    return(
      <div>
        <div className="content-area-container">
          {/* <div className = "tour-main-text">
            <div><h1>{this.state.orgInfo.display_name}</h1></div>
            <div><h2>{this.state.orgInfo.description}</h2></div>
          </div> */}
          <p>Having trouble locating a part? Contact us using our web submission form <a href="../contact_us" target="_blank" rel="noopener noreferrer">here</a>. Or call <strong>1-877-MSAIR99</strong>.</p>

          <div className="row">
            <div className="left-half">
            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/cat_trident'>
                  <img src="../trident_pneumatics.png" alt="Trident logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/cat_trident'><b>Trident</b></a><br></br>
                <li><a href='/subcat=249/desiccant_air_dryers'>Desiccant Air Dryers</a></li>
                <li><a href='/subcat=252/coalescing_filters'>Coalescing Filters</a></li>
                <li><a href='/subcat=251/particulate_filters'>Particulate Filters</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/cat_sullivan_palatek'>
                  <img src="../logoSullivan.png" alt="Sullivan-Palatek logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/cat_sullivan_palatek'><b>Sullivan-Palatek</b></a><br></br>
                <li><a href='/subcat=244/air_compressors'>Air Compressors</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/cat_zeks'>
                  <img src="../zeks_logo.png" alt="Zeks logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/cat_zeks'><b>Zeks</b></a><br></br>
                <li><a href='/subcat=233/compressed_air_filters'>Compressed Air Filters</a></li>
                <li><a href='/subcat=233/ztf_replacement_parts'>Replacement Elements</a></li>
                <li><a href='/subcat=233/air_dryers'>Air Dryers</a></li>
                <li><a href='/subcat=233/filters'>Filters</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../tech-west_logo.jpg" alt="Tech West logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Tech West</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Oilless Air Compressors</a></li>
                <li><a href='/subcategory_pages/subcategory'>Large Facility Compressors</a></li>
                <li><a href='/subcategory_pages/subcategory'>ECO Dry-Vac Systems</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../chemetron_logo.jpg" alt="Chemetron Pipeline Products logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Chemetron Pipeline Products</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Valve Boxes</a></li>
                <li><a href='/subcategory_pages/subcategory'>Medical Gas Outlets & Parts</a></li>
                <li><a href='/subcategory_pages/subcategory'>Air Alarms</a></li>
                <li><a href='/subcategory_pages/subcategory'>Valves & Handles</a></li>
                <li><a href='/subcategory_pages/subcategory'>Gauges</a></li>
                <li><a href='/subcategory_pages/subcategory'>Electrical Outlets</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../medentex_logo.jpg" alt="Medentex logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Medentex</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Amalgam Separators & Parts</a></li>
                <li><a href='/subcategory_pages/subcategory'>Waste Containers</a></li>
              </div>
            </div>
          </div>


            <div className="right-half">
            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../ramvac_logo.jpg" alt="Ramvac logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Ramvac</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Dental Vacuums</a></li>
                <li><a href='/subcategory_pages/subcategory'>Dental Vacuum Parts</a></li>
                <li><a href='/subcategory_pages/subcategory'>Compressor Parts</a></li>
                <li><a href='/subcategory_pages/subcategory'>Tanks & Tank Accessories</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../solmetax_logo.jpg" alt="Solmetex logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Solmetex</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Amalgam Separators & Parts</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../chicago-pneumatic_logo.jpg" alt="Chicago Pneumatic logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Chicago Pneumatic</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>2 Stage Electric Air Compressors 5-10 HP</a></li>
                <li><a href='/subcategory_pages/subcategory'>High Performance Rotary Screw Compressors</a></li>
                <li><a href='/subcategory_pages/subcategory'>2 Stage Electric Duplex Compressor</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../chemetron_logo.jpg" alt="Chemetron Patient Care logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Chemetron Patient Care</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Medical Gas Duplex Couplers</a></li>
                <li><a href='/subcategory_pages/subcategory'>Medical Gas Adapters</a></li>
                <li><a href='/subcategory_pages/subcategory'>Medical Gas Couplers</a></li>
                <li><a href='/subcategory_pages/subcategory'>DISS Male & Female Fittings</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category_pages/category'>
                  <img src="../msair.png" width="100px" alt="MS Air logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category_pages/category'><b>Replacement Parts</b></a><br></br>
                <li><a href='/subcategory_pages/subcategory'>Vibration Pads</a></li>
              </div>
            </div>

          </div>
          </div>


        <div className="top-sellers">
          <h1>TOP SELLERS</h1>
        </div>
        <div className="row">
        <div className="left-half">
        <div className="product_listing">
          <div className="product_entry">
          {/* <div className="product-image">
            <img src={ placeholder } alt="product-placeholder"></img>
          </div>
          <div className="product-details">
            <h2 className="product-title">{.} {.}</h2>
            <h4 className="product-suggested-retail-price">{.}</h4>
            <h4 className="product-savings">Savings: {.}</h4>
            <h4 className="product-actual-price">{.}</h4>
          </div> */}


          <div className="product-image">
            <img src="https://www.msaironline.com/images/prodImage/409_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
          </div>
          <div className="product-details">
            <h4 className="product-title"><a href="/product_pages/prodID409">Quick-Connect 400 Oxygen Wall Outlet Station</a></h4>
            <h6 className="product-brand-name">Chemetron</h6>
            <h6 className="product-suggested-retail-price">$77.00</h6>
            <h6 className="product-savings">Savings: <strong>$33.69</strong></h6>
            <h6 className="product-actual-price"><strong>$43.31</strong></h6>
          </div>
        </div>
      </div>


      <div className="product_listing">
        <div className="product_entry">
        {/* <div className="product-image">
          <img src={ placeholder } alt="product-placeholder"></img>
        </div>
        <div className="product-details">
          <h2 className="product-title">{.} {.}</h2>
          <h4 className="product-suggested-retail-price">{.}</h4>
          <h4 className="product-savings">Savings: {.}</h4>
          <h4 className="product-actual-price">{.}</h4>
        </div> */}


        <div className="product-image">
          <img src="https://www.msaironline.com/images/prodImage/8_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
        </div>
        <div className="product-details">
          <h4 className="product-title"><a href="/product_pages/prodID8">Quick Connect 500 Vacuum Wall Outlet</a></h4>
          <h6 className="product-brand-name">Chemetron</h6>
          <h6 className="product-suggested-retail-price">$86.00</h6>
          <h6 className="product-savings">Savings: <strong>$37.62</strong></h6>
          <h6 className="product-actual-price"><strong>$48.38</strong></h6>
        </div>
      </div>
    </div>

    <div className="product_listing">
      <div className="product_entry">
      {/* <div className="product-image">
        <img src={ placeholder } alt="product-placeholder"></img>
      </div>
      <div className="product-details">
        <h2 className="product-title">{.} {.}</h2>
        <h4 className="product-suggested-retail-price">{.}</h4>
        <h4 className="product-savings">Savings: {.}</h4>
        <h4 className="product-actual-price">{.}</h4>
      </div> */}


      <div className="product-image">
        <img src="https://www.msaironline.com/images/prodImage/341_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
      </div>
      <div className="product-details">
        <h4 className="product-title"><a href="/product_pages/prodID341">Quick Connect 500 Oxygen Outlet -<br /> Ohmeda Compatible /w New Style Cover</a></h4>
        <h6 className="product-brand-name">Chemetron</h6>
        <h6 className="product-suggested-retail-price">$78.00</h6>
        <h6 className="product-savings">Savings: <strong>$34.12</strong></h6>
        <h6 className="product-actual-price"><strong>$43.88</strong></h6>
      </div>
    </div>
  </div>

  <div className="product_listing">
    <div className="product_entry">
    {/* <div className="product-image">
      <img src={ placeholder } alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h2 className="product-title">{.} {.}</h2>
      <h4 className="product-suggested-retail-price">{.}</h4>
      <h4 className="product-savings">Savings: {.}</h4>
      <h4 className="product-actual-price">{.}</h4>
    </div> */}


    <div className="product-image">
      <img src="https://www.msaironline.com/images/prodImage/14_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/product_pages/prodID14">Quick Connect 500 Oxygen Wall Outlet</a></h4>
      <h6 className="product-brand-name">Chemetron</h6>
      <h6 className="product-suggested-retail-price">$86.00</h6>
      <h6 className="product-savings">Savings: <strong>$37.62</strong></h6>
      <h6 className="product-actual-price"><strong>$48.38</strong></h6>
    </div>
  </div>
</div>

<div className="product_listing">
  <div className="product_entry">
  {/* <div className="product-image">
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h2 className="product-title">{.} {.}</h2>
    <h4 className="product-suggested-retail-price">{.}</h4>
    <h4 className="product-savings">Savings: {.}</h4>
    <h4 className="product-actual-price">{.}</h4>
  </div> */}


  <div className="product-image">
    <img src="https://www.msaironline.com/images/prodImage/643_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/product_pages/prodID643">Oxygen Face Plate Assembly</a></h4>
    <h6 className="product-brand-name">Chemetron</h6>
    <h6 className="product-suggested-retail-price">$30.45</h6>
    <h6 className="product-savings">Savings: <strong>$3.04</strong></h6>
    <h6 className="product-actual-price"><strong>$27.41</strong></h6>
  </div>
</div>
</div>

<div className="product_listing">
  <div className="product_entry">
  {/* <div className="product-image">
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h2 className="product-title">{.} {.}</h2>
    <h4 className="product-suggested-retail-price">{.}</h4>
    <h4 className="product-savings">Savings: {.}</h4>
    <h4 className="product-actual-price">{.}</h4>
  </div> */}


  <div className="product-image">
    <img src="https://www.msaironline.com/images/prodImage/1170_144x85.jpg" width="144" height="85" alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/product_pages/prodID1170">DISS Male to 1/4\" NPT Male Fitting - Air</a></h4>
    <h6 className="product-brand-name">Chemetron</h6>
    <h6 className="product-suggested-retail-price">$17.22</h6>
    <h6 className="product-savings">Savings: <strong>$5.07</strong></h6>
    <h6 className="product-actual-price"><strong>$12.15</strong></h6>
  </div>
</div>
</div>

<div className="product_listing">
  <div className="product_entry">
  {/* <div className="product-image">
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h2 className="product-title">{.} {.}</h2>
    <h4 className="product-suggested-retail-price">{.}</h4>
    <h4 className="product-savings">Savings: {.}</h4>
    <h4 className="product-actual-price">{.}</h4>
  </div> */}


  <div className="product-image">
    <img src="https://www.msaironline.com/images/prodImage/1423_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/product_pages/prodID1423">Bulldog QT 1 Dental Vacuum</a></h4>
    <h6 className="product-brand-name">Ramvac</h6>
    <h6 className="product-suggested-retail-price">$10,740.00</h6>
    <h6 className="product-savings">Savings: <strong>$2,471.00</strong></h6>
    <h6 className="product-actual-price"><strong>$8,269.00</strong></h6>
  </div>
</div>
</div>
</div>




<div className="right-half">
<div className="product_listing">
  <div className="product_entry">
  {/* <div className="product-image">
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h2 className="product-title">{.} {.}</h2>
    <h4 className="product-suggested-retail-price">{.}</h4>
    <h4 className="product-savings">Savings: {.}</h4>
    <h4 className="product-actual-price">{.}</h4>
  </div> */}


  <div className="product-image">
    <img src="https://www.msaironline.com/images/prodImage/1425_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/product_pages/prodID1425">Bison 3 Dental Vacuum 16 Amp</a></h4>
    <h6 className="product-brand-name">Ramvac</h6>
    <h6 className="product-suggested-retail-price">$15,096.00</h6>
    <h6 className="product-savings">Savings: <strong>$3,472.08</strong></h6>
    <h6 className="product-actual-price"><strong>$11,623.92</strong></h6>
  </div>
</div>
</div>

        {/* <div className = "tours-wrapper">
        {this.state.tourList.map( (tour) => {
          return <div className = "tour-item" key={tour.tour_id}>
            <Link to={`/tours/${tour.tour_id}`}>

            <div className = "tour-item-text">
              <p>{tour.tour_name}</p>
            </div>
            </Link>
          </div>
        })}

</div> */}

<div className="product_listing">
  <div className="product_entry">
    <div className="product-image">
      <img src="https://www.msaironline.com/images/prodImage/1426_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/product_pages/prodID1426">Bison 5  Dental Vacuum 16 Amp</a></h4>
      <h6 className="product-brand-name">Ramvac</h6>
      <h6 className="product-suggested-retail-price">$16,412.00</h6>
      <h6 className="product-savings">Savings: <strong>$3,774.76</strong></h6>
      <h6 className="product-actual-price"><strong>$12,637.24</strong></h6>
    </div>
  </div>
</div>


<div className="product_listing">
  <div className="product_entry">
    <div className="product-image">
      <img src="https://www.msaironline.com/images/prodImage/1460_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/product_pages/prodID1460">Liquid Starter Pack - <br />Ramvac</a></h4>
      <h6 className="product-brand-name">Ramvac</h6>
      <h6 className="product-suggested-retail-price">$132.00</h6>
      <h6 className="product-savings">Savings: <strong>$30.36</strong></h6>
      <h6 className="product-actual-price"><strong>$101.64</strong></h6>
    </div>
  </div>
</div>


<div className="product_listing">
  <div className="product_entry">
    <div className="product-image">
      <img src="https://www.msaironline.com/images/prodImage/1467_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/product_pages/prodID1467">Bulldog Service Filter Set</a></h4>
      <h6 className="product-brand-name">Ramvac</h6>
      <h6 className="product-suggested-retail-price">$192.00</h6>
      <h6 className="product-savings">Savings: <strong>$44.16</strong></h6>
      <h6 className="product-actual-price"><strong>$147.84</strong></h6>
    </div>
  </div>
</div>


<div className="product_listing">
  <div className="product_entry">
    <div className="product-image">
      <img src="https://www.msaironline.com/images/prodImage/1469_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/product_pages/prodID1469">Bison Service Filter Set</a></h4>
      <h6 className="product-brand-name">Ramvac</h6>
      <h6 className="product-suggested-retail-price">$240.00</h6>
      <h6 className="product-savings">Savings: <strong>$55.20</strong></h6>
      <h6 className="product-actual-price"><strong>$184.80</strong></h6>
    </div>
  </div>
</div>


<div className="product_listing">
  <div className="product_entry">
    <div className="product-image">
      <img src="https://www.msaironline.com/images/prodImage/1476_144x85.jpg" width="144" height="144" alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/product_pages/prodID1476">Hg5-Amalgam Separator</a></h4>
      <h6 className="product-brand-name">Solmetex</h6>
      <h6 className="product-suggested-retail-price">$877.55</h6>
      <h6 className="product-savings">Savings: <strong>$197.45</strong></h6>
      <h6 className="product-actual-price"><strong>$680.10</strong></h6>
    </div>
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
