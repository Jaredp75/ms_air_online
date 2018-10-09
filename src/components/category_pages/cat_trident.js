import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Cat_Trident extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">


          <div className="brand_header">
            <a href="http://www.tridentpneumatics.com/homepage.php" rel="noopener noreferrer" target="_blank" alt="Trident Pneumatics"><img src="../trident_logo.png" alt="Trident Pneumatics"></img></a>


            <div className="dropdown">
            <button className="dropbtn">Subcategories</button>
              <div className="dropdown-content">
                <a href="/subcat=249/desiccant_air_dryers">Dessicant Air Dryers</a>
                <a href="/subcat=251/particulate_filters">Particulate Filters</a>
                <a href="/subcat=252/coalescing_filters">Coalescing Filters</a>
              </div>
            </div>
          </div>


          <div className="brand_para">
            <h1>Trident</h1>
            <h3>For almost two decades Trident Pneumatics has devoted their expertise to innovating critical compressed air solutions. Pioneering efforts from inception has resulted in several industry standard Patented products like timer drain valves, Condensate sensing drain valves, Modular dryers, Dryers for locomotives etc.
</h3>
            <p><a href="http://www.tridentpneumatics.com/homepage.php" rel="noopener noreferrer" target="_blank" alt="Trident Pneumatics">Visit Website >></a></p>
          </div>




          <div className="subcategories">
            <div className="subcat_section1">
              <a href="/subcat=249/desiccant_air_dryers" alt="Dessicant Air Dryers"><img src="https://www.msaironline.com/images/taxImage/249_100x75.jpg" alt="Dessicant Air Dryers"></img></a>
              <h2><a href="/subcat=249/desiccant_air_dryers">Dessicant Air Dryers</a></h2>
            </div>

            <div className="subcat_section2">
              <a href="/subcat=251/particulate_filters" alt="Particulate Filters"><img src="https://www.msaironline.com/images/taxImage/251_100x75.jpg" alt="Particulate Filters"></img></a>
              <h2><a href="/subcat=251/particulate_filters">Particulate Filters</a></h2>
            </div>

            <div className="subcat_section3">
              <a href="/subcat=252/coalescing_filters" alt="Coalescing Filters"><img src="https://www.msaironline.com/images/taxImage/252_100x75.jpg" alt="Coalescing Filters"></img></a>
              <h2><a href="/subcat=252/coalescing_filters">Coalescing Filters</a></h2>
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
