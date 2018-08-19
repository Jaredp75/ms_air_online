import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Cat_Zeks extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">


          <div className="brand_header">
            <a href="https://www.zeks.com" rel="noopener noreferrer" target="_blank" alt="Zeks"><img src="../zeks_logo.jpg" alt="Zeks"></img></a>


            <div className="dropdown">
            <button className="dropbtn">Subcategories</button>
              <div className="dropdown-content">
                <a href="/subcat=233/compressed_air_filters">Compressed Air Filters</a>
                <a href="/subcat=233/ztf_replacement_parts">Replacement Parts</a>
                <a href="/subcat=233/air_dryers">Air Dryers</a>
              </div>
            </div>
          </div>


          <div className="brand_para">
            <h1>Zeks</h1>
            <h3>ZEKS Compressed Air Solutions is a leading manufacturer and provider of compressed air treatment equipment. The company manufactures a complete line of refrigerated dryers and desiccant dryers as well as filters, compressed air system controllers, and accessories.</h3>
            <p><a href="https://www.zeks.com" rel="noopener noreferrer" target="_blank" alt="Zeks">Visit Website >></a></p>
          </div>




          <div className="subcategories">
            <div className="subcat_section1">
              <a href="/subcat=233/compressed_air_filters" alt="Compressed Air Filters"><img src="https://www.msaironline.com/images/taxImage/204_100x75.jpg" alt="Compressed Air Filters"></img></a>
              <h2><a href="/subcat=233/compressed_air_filters">Compressed Air Filters</a></h2>
            </div>

            <div className="subcat_section2">
              <a href="/subcat=233/ztf_replacement_parts" alt="ZTF Replacement Parts"><img src="https://www.msaironline.com/images/taxImage/205_100x75.jpg" alt="ZTF Replacement Parts"></img></a>
              <h2><a href="/subcat=233/ztf_replacement_parts">Replacement Parts</a></h2>
            </div>

            <div className="subcat_section3">
              <a href="/subcat=233/air_dryers" alt="Air Dryers"><img src="https://www.msaironline.com/images/taxImage/234_100x75.jpg" alt="Air Dryers"></img></a>
              <h2><a href="/subcat=233/air_dryers">Air Dryers</a></h2>
            </div>

            <div className="subcat_section4">
              <a href="/subcat=233/filters" alt="Filters"><img src="https://www.msaironline.com/images/taxImage/235_144x85.jpg" alt="Filters"></img></a>
              <h2><a href="/subcat=233/filters">Filters</a></h2>
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
