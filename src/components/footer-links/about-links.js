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


          <div className="text-center-center-block">
            <div className="social-links"><strong><h5>Connect With Us:</h5></strong>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i id="social-fb" className="fab fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i id="social-tw" className="fab fa-twitter-square fa-3x social"></i></a>
	            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i id="social-li" className="fab fa-linkedin fa-3x social"></i></a>
	            <a href="mailto:msaironline@msaironline.com" target="_blank" rel="noopener noreferrer"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
            </div>
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
