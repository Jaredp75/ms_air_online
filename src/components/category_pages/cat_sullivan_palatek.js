import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Cat_Sullivan_Palatek extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">


          <div className="brand_header">
            <a href="https://www.sullivan-palatek.com/" rel="noopener noreferrer" target="_blank" alt="Sullivan-Palatek"><img src="../logoSullivan.png" alt="Sullivan-Palatek"></img></a>


            <div className="dropdown">
            <button className="dropbtn">Subcategories</button>
              <div className="dropdown-content">
                <a href="/subcat=244/air_compressors">Air Compressors</a>
                {/* <a href="/subcat=251/particulate_filters">Particulate Filters</a> */}
                {/* <a href="/subcat=252/coalescing_filters">Coalescing Filters</a> */}
              </div>
            </div>
          </div>


          <div className="brand_para">
            <h1>Sullivan-Palatek</h1>
            <h3>SULLIVAN-PALATEK, INC. manufactures electric and diesel driven high performance rotary screw air compressors along with a complete line of accessory items including refrigerated and regenerative air dryers and pneumatic construction tools. Established 1984.
</h3>
            <p><a href="https://www.sullivan-palatek.com/" rel="noopener noreferrer" target="_blank" alt="Sullivan-Palatek">Visit Website >></a></p>
          </div>




          <div className="subcategories">
            <div className="subcat_section1">
              <a href="/subcat=244/air_compressors" alt="Air Compressors"><img src="https://www.msaironline.com/images/taxImage/244_100x75.jpg" alt="Air Compressors"></img></a>
              <h2><a href="/subcat=244/air_compressors">Air Compressors</a></h2>
            </div>

            {/* <div className="subcat_section2">
              <a href="/subcat=251/particulate_filters" alt="Particulate Filters"><img src="https://www.msaironline.com/images/taxImage/251_100x75.jpg" alt="Particulate Filters"></img></a>
              <h2><a href="/subcat=251/particulate_filters">Particulate Filters</a></h2>
            </div> */}

            {/* <div className="subcat_section3">
              <a href="/subcat=252/coalescing_filters" alt="Coalescing Filters"><img src="https://www.msaironline.com/images/taxImage/252_100x75.jpg" alt="Coalescing Filters"></img></a>
              <h2><a href="/subcat=252/coalescing_filters">Coalescing Filters</a></h2>
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
