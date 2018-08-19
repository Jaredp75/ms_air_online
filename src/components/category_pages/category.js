import React from "react";
import {Link} from 'react-router-dom';
// import FooterLinks from './footer-links/footer-links.js';
import HelpAndCurrency from '../help-and-currency.js';
import AboutLinks from '../footer-links/about-links.js';

export default class Category extends React.Component {

  render(){

    return(
      <div>

        <div className="content-area-container">
          <div className="category-header-text">
            <h1>Category Page</h1>
          </div>
          <div className="category-para">
            <h4>Curabitur non dui eget eros scelerisque feugiat nec et dui. Nulla vulputate neque sit amet sapien dictum, et pulvinar leo laoreet. Mauris sagittis eget sem eu consequat. Aliquam erat volutpat.</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nulla vel ipsum pellentesque porttitor vel in elit. Phasellus lectus tortor, sodales ut velit a, dictum fringilla quam.</li>
                <ul>
                  <li>Curabitur dolor dolor</li>
                  <li>placerat ac lacinia porta</li>
                  <li>dapibus non massa</li>
                </ul>
              <li>Cras a tincidunt urna. Proin condimentum eros nec turpis dictum maximus ut a nisl. Proin iaculis, ligula ut porta egestas, odio mauris volutpat sem, eget maximus nisi dui vel ex.</li>
                <ul>
                  <li>Curabitur dolor dolor</li>
                  <li>placerat ac lacinia porta</li>
                  <li>dapibus non massa</li>
                </ul>
              <li>Mauris in urna quam. Maecenas fermentum viverra magna, ut commodo turpis. Morbi eget vestibulum leo.</li>
                <ul>
                  <li>Curabitur dolor dolor</li>
                  <li>placerat ac lacinia porta</li>
                  <li>dapibus non massa</li>
                </ul>
              <li>Ut maximus, nisi eget hendrerit suscipit, nibh tortor hendrerit urna, sit amet varius velit justo a nulla.</li>
                <ul>
                  <li>Curabitur dolor dolor</li>
                  <li>placerat ac lacinia porta</li>
                  <li>dapibus non massa</li>
                </ul>
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
