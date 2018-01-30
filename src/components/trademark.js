import React, { Component } from 'react';
import '../styles/App.css';


class Trademark extends Component {
  render() {
    return (
      <div className="Trademark">
        <div className="float-left">
          <div className="display-table">
              <div className="display-table-cell dtc-logo">
                <img src={require('./msair100.jpg')} alt="MS Air Logo" height="20"/>
              </div>

          </div>
        </div>
        <div className="float-right">
          <div className="display-table-cell dtc-copyright">
            © 2018 - MS Air, Inc.
          </div>
          <div className="display-table">
            <div className="display-table-cell dtc-terms">
              <a href="http://www.msaironline.com/static/termsofuse.php?linkid=bottom">Terms of Use</a>
            </div>
            <div className="display-table-cell dtc-privacy">
              <a href="http://www.msaironline.com/static/privacy.php?linkid=bottom">Privacy Policy</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Trademark;
