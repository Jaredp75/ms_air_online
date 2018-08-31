import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';

export default class TermsOfUse extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="replacement_parts_header">
            <h1>Terms of Use</h1>
          </div>
          <div className="terms-para"><p>We use reasonable precautions to keep the personal information you disclose both in your browsing and your purchases. However, we are not responsible for any breach of security.</p>

          <h3><strong>OBTAINING YOUR CONSENT</strong></h3>
          <p>By using our Web site, you give MS Air Inc. permission to collect information about the pages served to you as an anonymous user for the purpose of calculating aggregate site statistics. If you register at MS Air Inc., you authorize MS Air to use information you provide to personalize the information we deliver to you and to use your demographic information when calculating aggregate customer data. MS Air may occasionally amend this policy. We suggest that you bookmark this page and check to see if it has changed from time to time.</p>

          <h3><strong>Disclaimer</strong></h3>
        <p>MSAirOnline.com HEREBY EXPRESSLY DISCLAIMS ALL WARRANTIES EITHER EXPRESSED OR IMPLIED WARRRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THIS DISCLAIMER BY THE SELLER IN NO WAY AFFECTS THE TERMS OF THE MANUFACTURER'S WARRANTY IF ANY. THE SELLER RETAINS TITLE TO GOODS HEREIN BEING PURCHASED UNTIL GOODS ARE PAID FOR BY THE PURCHASER AND AT THAT TIME TITLE PASSES TO THE PURCHASER. IF GOODS HEREIN BEING PURCHASED ARE BEING PURCHASED FOR PURPOSES OF EXPORT, PURHASER MUST OBTAIN FROM THE UNITED STATES FEDERAL GOVERNEMENT CERTIN EXPORT DOCUMENTATION BEFORE SHIPPING TO A FOREIGN COUNTRY. IN ADDITION, MANUFACTURERS' WARRANTIES FOR EXPORTED GOODS MAY VARY OR EVEN BE NULL AND VOID. IF YOU HAVE QUESTIONS, PLEASE INQUIRE. ANY AND ALL LIABILITY IS ONLY FOR THE PRODUCTS PURCHASED.</p>

          <p>ALL BRANDS AND MODELS REMAIN TRADEMARKS OF THEIR RESPECTIVE OWNERS, AND ARE LISTED FOR REFERENCE AND COMPARISON PURPOSES ONLY. WE MAKE EVERY EFFORT TO ENSURE THAT THE INFORMATION CONTAINED ON THIS SITE IS ACCURATE, BUT WE TAKE NO RESPONSIBILITY FOR FAULTY, OUT DATED, OR OTHERWISE INACCURATE INFORMATION ON THIS SITE, INCLUDING PRICING, PRODUCT EDITORIALS, PRODUCT SPECIFICATIONS, PRODUCT PICTURES AND AVAILABILITY. MSAirOnline.com SHALL NOT BE LIABLE FOR ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES CAUSED DIRECTLY OR INDIRECTLY BY ANYTHING ON THIS SITE.</p>

          <p>IN ADDITION, FOR ALL PRICES AND PRODUCTS, WE RESERVE THE RIGHT TO MAKE ADJUSTMENTS DUE TO CHANGING MARKET CONDITIONS, ERRORS, OR TYPOGRAPHICAL ERRORS IN ADVERTISEMENTS. MSAirOnline.com IS NOT RESPONSIBLE FOR MANUFACTURER PRICE CHANGES, WHICH MAY OCCUR AT ANY TIME WITHOUT NOTICE. FINALLY, MSAirOnline.com RESERVES THE RIGHT TO DISCONTINUE PRODUCTS AT ANY TIME WITH NO PRIOR WARNING (IN SUCH CASES, THE CUSTOMER WILL BE CONTACTED TO SECURE PRIOR APPROVAL TO PROCESS THE ORDER AT THE NEW PREVAILING PRICES).</p>

          <p>MSAirOnline.com DOES NOT WARRANT THAT THIS SITE, ITS SERVERS, OR E-MAIL SENT FROM MSAirOnline.com ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. MSAirOnline.com WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS SITE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, AND CONSEQUENTIAL DAMAGES.</p>
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
