import React, { Component } from 'react';


class AboutLinks extends Component {
  render() {
    return (
      <div className="AboutLinks">
            <a href="https://www.aspe.org/">
              <img src="../aspe_logo.jpg" alt="ASPE.org"/>
            </a>

            <a href="https://verify.authorize.net/anetseal/?pid=3172cc19-9c80-46a8-b7cb-84c8bfa31229&rurl=http%3A//www.msaironline.com/static/about.php%3Flinkid%3Dtopsmall">
              <img src="../authorizeNetLogo.gif" alt="Authorize.Net"/>
            </a>
          </div>
    );
  }
}

export default AboutLinks;
