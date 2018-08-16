import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class About extends React.Component {

  render(){

    return(
      <div>

        <div className='content-area-container'>
          <div className="header-text">
            <h1>ABOUT US</h1>
          </div>
          <div className="about-para"><p>Specializing in Compressed Air & Vacuum Systems, for Medical, Dental, Laboratory & Industrial Applications since 2005.

          We are committed to offering top-quality customer service and competitive pricing for the following product lines:</p>
        </div>

          <div className="about-subhead">
            <ul>
              <li><b>AeroVac</b> - Replacement Parts</li>
              <li><b>Becker</b> - Vacuum Pumps, Parts</li>
              <li><b>Busch</b> - Vacuum Pumps, Parts</li>
              <li><b>Champion</b> - Air Compressors</li>
              <li><b>Chemetron</b> - Medical Gas Equipment</li>
              <li><b>Chicago Pneumatic</b> - Air Compressors</li>
              <li><b>Curtis</b> - Air Compressors</li>
              <li><b>Customair</b> - Dental Air Compressors & Vacuum Pumps</li>
              <li><b>Deltech</b> - Air Dryers, Filters</li>
              <li><b>Dominick Hunter</b> - Air Dryers, Filters</li>
              <li><b>GAST</b> - Air Compressors, Vacuum Pumps, Parts</li>
              <li><b>Global Vac</b> - Liquid Ring Vacuum Equipment</li>
              <li><b>Hankison</b> - Air Dryers, Filters, Parts</li>
              <li><b>Ingersoll Rand</b> - Air Compressors, Parts</li>
              <li><b>International Control Products (ICP)</b> - NFPA & Industrial Control Panels</li>
              <li><b>Kaeser</b> - Air Compressors, Parts</li>
              <li><b>Kobelco</b> - Air Compressors, Parts</li>
              <li><b>Manchester</b> - Air Receivers</li>
              <li><b>Metalflex</b> - Flex Connectors</li>
              <li><b>Numatics</b> - Replacement Parts</li>
              <li><b>Oxequip</b> - Medical Gas Equipment</li>
              <li><b>Penway</b> - Air Receivers</li>
              <li><b>Powerex</b> - Air Compressors, Vacuum Pumps, Parts</li>
              <li><b>Quincy</b> - Air Compressors, Vacuum Pumps, Parts</li>
              <li><b>RamVac</b> - Dental Air Compressors & Vacuum Pumps, Parts</li>
              <li><b>Rietschle</b> - Vacuum Pumps, Parts</li>
              <li><b>SiHi</b> - Liquid Ring Pumps</li>
              <li><b>Solberg</b> - Filtration</li>
              <li><b>Solmetex</b> - Amalgam Separators, Parts</li>
              <li><b>Sullair</b> - Air Compressors, Parts</li>
              <li><b>Sullivan Palatek</b> - Air Compressors</li>
              <li><b>TechWest</b> - Dental Air Compressors & Vacuum Pumps, Parts</li>
              <li><b>Timeter</b> - Patient Care Equipment</li>
              <li><b>Travaini</b> - Liquid Ring Vacuum Pumps</li>
              <li><b>Ultra Air</b> - Replacement Parts</li>
              <li><b>Trident</b> - Desiccant Dryers, Filters, Parts</li>
              <li><b>Watts</b> - Filters, Regulators, Lubricators</li>
              <li><b>Zander</b> - Air Dryers, Filters, Parts</li>
              <li><b>Zeks</b> - Air Dryers, Filters, Parts</li>
            </ul>

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
