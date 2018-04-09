import React from "react";
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import FooterLinks from './footer-links/footer-links.js';
import AboutLinks from './footer-links/about-links.js';
import HelpAndCurrency from './help-and-currency.js';

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
        <div className = "content-area-container">
          {/* <div className = "tour-main-text">
            <div><h1>{this.state.orgInfo.display_name}</h1></div>
            <div><h2>{this.state.orgInfo.description}</h2></div>
          </div> */}
          <p>Having trouble locating a part? Contact us using our web submission form <a href="http://www.msaironline.com/contact/contact.php?linkid=message" target="_blank" rel="noopener noreferrer">here</a>. Or call <strong>1-877-MSAIR99</strong>.</p>

          <div className="row">
            <div className="left-half">
            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../trident_logo.jpg" alt="Trident logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
                <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
                <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
                <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../sullivan-palatek logo.jpg" alt="Sullivan-Palatek logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=243&linkid=homemenu'><b>Sullivan-Palatek</b></a><br></br>
                <li><a href='store/subCat.php?cat=244&linkid=homemenu'>Air Compressors</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../zeks_logo.jpg" alt="Zeks logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=233&linkid=homemenu'><b>Zeks</b></a><br></br>
                <li><a href='store/subCat.php?cat=205&linkid=homemenu'>Replacement Elements</a></li>
                <li><a href='store/store.php?cat=234&linkid=homemenu'>Air Dryers</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../tech-west_logo.jpg" alt="Tech West logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=255&linkid=homemenu'><b>Tech West</b></a><br></br>
                <li><a href='store/subCat.php?cat=257&linkid=homemenu'>Oilless Air Compressors</a></li>
                <li><a href='store/subCat.php?cat=259&linkid=homemenu'>Large Facility Compressors</a></li>
                <li><a href='store/subCat.php?cat=258&linkid=homemenu'>ECO Dry-Vac Systems</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../chemetron_logo.jpg" alt="Chemetron Pipeline Products logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=94&linkid=homemenu'><b>Chemetron Pipeline Products</b></a><br></br>
                <li><a href='store/store.php?cat=38&linkid=homemenu'>Valve Boxes</a></li>
                <li><a href='store/store.php?cat=3&linkid=homemenu'>Medical Gas Outlets & Parts</a></li>
                <li><a href='store/store.php?cat=58&linkid=homemenu'>Air Alarms</a></li>
                <li><a href='store/store.php?cat=52&linkid=homemenu'>Valves & Handles</a></li>
                <li><a href='store/store.php?cat=50&linkid=homemenu'>Gauges</a></li>
                <li><a href='store/subCat.php?cat=54&linkid=homemenu'>Electrical Outlets</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../medentex_logo.jpg" alt="Medentex logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=260&linkid=homemenu'><b>Medentex</b></a><br></br>
                <li><a href='store/subCat.php?cat=261&linkid=homemenu'>Amalgam Separators & Parts</a></li>
                <li><a href='store/subCat.php?cat=262&linkid=homemenu'>Waste Containers</a></li>
              </div>
            </div>
          </div>


            <div className="right-half">
            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../ramvac_logo.jpg" alt="Ramvac logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=223&linkid=homemenu'><b>Ramvac</b></a><br></br>
                <li><a href='store/subCat.php?cat=224&linkid=homemenu'>Dental Vacuums</a></li>
                <li><a href='store/subCat.php?cat=230&linkid=homemenu'>Dental Vacuum Parts</a></li>
                <li><a href='store/subCat.php?cat=228&linkid=homemenu'>Compressor Parts</a></li>
                <li><a href='store/subCat.php?cat=225&linkid=homemenu'>Tanks & Tank Accessories</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../solmetax_logo.jpg" alt="Solmetex logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=231&linkid=homemenu'><b>Solmetex</b></a><br></br>
                <li><a href='store/subCat.php?cat=232&linkid=homemenu'>Amalgam Separators & Parts</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../chicago-pneumatic_logo.jpg" alt="Chicago Pneumatic logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=91&linkid=homemenu'><b>Chicago Pneumatic</b></a><br></br>
                <li><a href='store/subCat.php?cat=93&linkid=homemenu'>2 Stage Electric Air Compressors 5-10 HP</a></li>
                <li><a href='store/store.php?cat=98&linkid=homemenu'>High Performance Rotary Screw Compressors</a></li>
                <li><a href='store/subCat.php?cat=95&linkid=homemenu'>2 Stage Electric Duplex Compressor</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../chemetron_logo.jpg" alt="Chemetron Patient Care logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=109&linkid=homemenu'><b>Chemetron Patient Care</b></a><br></br>
                <li><a href='store/store.php?cat=134&linkid=homemenu'>Medical Gas Duplex Couplers</a></li>
                <li><a href='store/store.php?cat=133&linkid=homemenu'>Medical Gas Adapters</a></li>
                <li><a href='store/store.php?cat=132&linkid=homemenu'>Medical Gas Couplers</a></li>
                <li><a href='store/store.php?cat=118&linkid=homemenu'>DISS Male & Female Fittings</a></li>
              </div>
            </div>

            <div className = "top-brands">
              <div className = "brand-logo">
                <img src="../msair100.jpg" alt="MS Air logo"/>
              </div>
              <div className="brand-text">
                <a href='store/store.php?cat=71&linkid=homemenu'><b>Replacement Parts</b></a><br></br>
                <li><a href='store/subCat.php?cat=72&linkid=homemenu'>Vibration Pads</a></li>
              </div>
            </div>

          </div>
          </div>


        <div className = "select-a-tour">
          <h3>TOP SELLERS</h3>
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
