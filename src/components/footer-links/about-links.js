import React, { Component } from 'react';


class AboutLinks extends Component {
  render() {
    return (
      <div className="AboutLinks">
        <div className="aspeLink">
            <a href="https://www.aspe.org/" target="_blank" rel="noopener noreferrer">
              <img src="../aspe_logo.png" alt="ASPE.org"/>
            </a>
          </div>
          <div className="authorizeLink">
            <a href="https://verify.authorize.net/anetseal/?pid=3172cc19-9c80-46a8-b7cb-84c8bfa31229&rurl=http%3A//www.msaironline.com/static/about.php%3Flinkid%3Dtopsmall" target="_blank" rel="noopener noreferrer">
              <img src="../secure90x72.gif" alt="Authorize.Net"/>
            </a>
          </div>
          </div>
    );
  }
}

export default AboutLinks;
