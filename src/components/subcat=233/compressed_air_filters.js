import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Compressed_Air_Filters extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>

          <div className="dropdown">
          <button className="dropbtn">Subcategories</button>
            <div className="dropdown-content">
              <a href="/subcat=233/grade_p_particulate_bulk_liquid">Grade P - Particulate/Bulk Liquid</a>
              <a href="/subcat=233/grade_g_general_purpose">Grade G - General Purpose</a>
              <a href="/subcat=233/grade_h_high_efficiency">Grade H - High Efficiency</a>
              <a href="/subcat=233/grade_a_activated_carbon">Grade A - Activated Carbon</a>
            </div>
          </div>

          <div className="subcategories">
            <div className="subcat_section1">
              <a href="/subcat=233/grade_p_particulate_bulk_liquid" alt="Grade P - Particulate/Bulk Liquid"><img src="https://www.msaironline.com/images/prodImage/1771_144x85.jpg" alt="Grade P - Particulate/Bulk Liquid"></img></a>
              <h2><a href="/subcat=233/grade_p_particulate_bulk_liquid">Grade P<br />Particulate/<br />Bulk Liquid</a></h2>
            </div>

            <div className="subcat_section2">
              <a href="/subcat=233/grade_g_general_purpose" alt="Grade G - General Purpose"><img src="https://www.msaironline.com/images/prodImage/1771_144x85.jpg" alt="Grade G - General Purpose"></img></a>
              <h2><a href="/subcat=233/grade_g_general_purpose">Grade G<br />General Purpose</a></h2>
            </div>

            <div className="subcat_section3">
              <a href="/subcat=233/grade_h_high_efficiency" alt="Grade H - High Efficiency"><img src="https://www.msaironline.com/images/prodImage/1771_144x85.jpg" alt="Grade H - High Efficiency"></img></a>
              <h2><a href="/subcat=233/grade_h_high_efficiency">Grade H<br />High Efficiency</a></h2>
            </div>

            <div className="subcat_section4">
              <a href="/subcat=233/grade_a_activated_carbon" alt="Grade A - Activated Carbon"><img src="https://www.msaironline.com/images/taxImage/234_100x75.jpg" alt="Grade A - Activated Carbon"></img></a>
              <h2><a href="/subcat=233/grade_a_activated_carbon">Grade A<br />Activated Carbon</a></h2>
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
