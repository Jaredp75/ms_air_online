import React from "react";
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import FooterLinks from './footer-links/footer-links.js';
import placeholder from '../img/compressor_placeholder.jpg';
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
  //   fetch('http://www.msaironline.com/qa1/api/category.php')
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
          <p>Having trouble locating a part? Contact us using our web submission form <a href="http://www.msaironline.com/contact/contact.php?linkid=message" target="_blank" rel="noopener noreferrer">here</a>. Or call <strong>1-877-MSAIR99</strong>.</p>

          <div className="row">
            <div className="left-half">
            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../trident_pneumatics.png" alt="Trident logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Trident</b></a><br></br>
                <li><a href='/subcategory'>Desiccant Air Dryers</a></li>
                <li><a href='/subcategory'>Coalescing Filters</a></li>
                <li><a href='/subcategory'>Particulate Filters</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../logoSullivan.png" alt="Sullivan-Palatek logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Sullivan-Palatek</b></a><br></br>
                <li><a href='/subcategory'>Air Compressors</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../zeks_logo.png" alt="Zeks logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Zeks</b></a><br></br>
                <li><a href='/subcategory'>Replacement Elements</a></li>
                <li><a href='/subcategory'>Air Dryers</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../tech-west_logo.jpg" alt="Tech West logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Tech West</b></a><br></br>
                <li><a href='/subcategory'>Oilless Air Compressors</a></li>
                <li><a href='/subcategory'>Large Facility Compressors</a></li>
                <li><a href='/subcategory'>ECO Dry-Vac Systems</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../chemetron_logo.jpg" alt="Chemetron Pipeline Products logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Chemetron Pipeline Products</b></a><br></br>
                <li><a href='/subcategory'>Valve Boxes</a></li>
                <li><a href='/subcategory'>Medical Gas Outlets & Parts</a></li>
                <li><a href='/subcategory'>Air Alarms</a></li>
                <li><a href='/subcategory'>Valves & Handles</a></li>
                <li><a href='/subcategory'>Gauges</a></li>
                <li><a href='/subcategory'>Electrical Outlets</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../medentex_logo.jpg" alt="Medentex logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Medentex</b></a><br></br>
                <li><a href='/subcategory'>Amalgam Separators & Parts</a></li>
                <li><a href='/subcategory'>Waste Containers</a></li>
              </div>
            </div>
          </div>


            <div className="right-half">
            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../ramvac_logo.jpg" alt="Ramvac logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/categoryu'><b>Ramvac</b></a><br></br>
                <li><a href='/subcategory'>Dental Vacuums</a></li>
                <li><a href='/subcategory'>Dental Vacuum Parts</a></li>
                <li><a href='/subcategory'>Compressor Parts</a></li>
                <li><a href='/subcategory'>Tanks & Tank Accessories</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../solmetax_logo.jpg" alt="Solmetex logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Solmetex</b></a><br></br>
                <li><a href='/subcategory'>Amalgam Separators & Parts</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../chicago-pneumatic_logo.jpg" alt="Chicago Pneumatic logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Chicago Pneumatic</b></a><br></br>
                <li><a href='/subcategory'>2 Stage Electric Air Compressors 5-10 HP</a></li>
                <li><a href='/subcategory'>High Performance Rotary Screw Compressors</a></li>
                <li><a href='/subcategory'>2 Stage Electric Duplex Compressor</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../chemetron_logo.jpg" alt="Chemetron Patient Care logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Chemetron Patient Care</b></a><br></br>
                <li><a href='/subcategory'>Medical Gas Duplex Couplers</a></li>
                <li><a href='/subcategory'>Medical Gas Adapters</a></li>
                <li><a href='/subcategory'>Medical Gas Couplers</a></li>
                <li><a href='/subcategory'>DISS Male & Female Fittings</a></li>
              </div>
            </div>

            <div className="top-brands">
              <div className="brand-logo">
                <a href='/category'>
                  <img src="../msair100.jpg" alt="MS Air logo"/>
                </a>
              </div>
              <div className="brand-text">
                <a href='/category'><b>Replacement Parts</b></a><br></br>
                <li><a href='/subcategory'>Vibration Pads</a></li>
              </div>
            </div>

          </div>
          </div>


        <div className="top-sellers">
          <h1>TOP SELLERS</h1>
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
            <img src={ placeholder } alt="product-placeholder"></img>
          </div>
          <div className="product-details">
            <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
            <h6 className="product-suggested-retail-price">$0.00</h6>
            <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
            <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
          <img src={ placeholder } alt="product-placeholder"></img>
        </div>
        <div className="product-details">
          <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
          <h6 className="product-suggested-retail-price">$0.00</h6>
          <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
          <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
        <img src={ placeholder } alt="product-placeholder"></img>
      </div>
      <div className="product-details">
        <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
        <h6 className="product-suggested-retail-price">$0.00</h6>
        <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
        <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
      <img src={ placeholder } alt="product-placeholder"></img>
    </div>
    <div className="product-details">
      <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
      <h6 className="product-suggested-retail-price">$0.00</h6>
      <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
      <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
    <h6 className="product-suggested-retail-price">$0.00</h6>
    <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
    <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
    <h6 className="product-suggested-retail-price">$0.00</h6>
    <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
    <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
    <h6 className="product-suggested-retail-price">$0.00</h6>
    <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
    <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
    <img src={ placeholder } alt="product-placeholder"></img>
  </div>
  <div className="product-details">
    <h4 className="product-title"><a href="/individual_product">Product Title</a></h4>
    <h6 className="product-suggested-retail-price">$0.00</h6>
    <h6 className="product-savings">Savings: <strong>$0.00</strong></h6>
    <h6 className="product-actual-price"><strong>$0.00</strong></h6>
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
  }
}
