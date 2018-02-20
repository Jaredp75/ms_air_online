import React, { Component } from 'react';
import AboutLinks from "./about-links.js";

const snapSize = 650;

class FooterLinks extends Component {
  constructor(props){
    super(props);
      this.state= {
        media: null,
        parent: {}
      }
      this.setMedia = this.setMedia.bind(this)
  };

  setMedia() {
    this.setState({media: window.innerWidth});
  }

  componentWillMount(){
    this.setMedia();
  }

  componentDidMount(){
    window.addEventListener("resize", this.setMedia);
  }


  render() {
    let media = this.state.media;

    let shareLinks = null;
    if (media > snapSize){
      shareLinks = <ShareLinks />;
    }

    return (
      <div className="FooterLinks">
        <AboutLinks />
        {/* This is where ShareLinks will render if @media>600 */}
        {shareLinks}
      </div>
    );
  }
}


export default FooterLinks;
