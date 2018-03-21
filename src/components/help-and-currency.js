import React, { Component } from 'react';
import '../styles/App.css';
import AboutLinks from './footer-links/about-links.js';
const snapSize = 650;


class HelpAndCurrency extends Component {
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

    let aboutLinks = null;
    if (media <snapSize+1){
      aboutLinks = <AboutLinks />;
    }

    return (
      <div className="HelpAndCurrency">
        <div className="float-left">
          <i className="far fa-question-circle"></i>

          <span>Need help?  Visit the<a href="/"><strong>Help Center</strong></a>
          </span>
          </div>
        {aboutLinks}
        <div className="float-right">



            <div className="display-table-cell dtc-one">
              <svg>

                <path fill="#FFF" mask="url(#b)" d="M-.004 4.506h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 6.502h20v-2.5h-20m0-1.5h20v-2.5h-20"></path>
                <path fill="#FFF" mask="url(#b)" d="M-.004 8.502h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 10.498h20v-2.5h-20"></path>
                <path fill="#FFF" mask="url(#b)" d="M-.004 12.506h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 14.502h20v-2.5h-20"></path>
                <path fill="#FFF" mask="url(#b)" d="M-.004 16.502h20v-2.5h-20m0 6.5h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 18.498h20v-2.5h-20"></path>
                <path fill="#00247F" mask="url(#b)" d="M-.004 10.002H10V.006H-.003"></path>
                <path d="M8.996 1.007c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m5.292 3.996c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5M7.65 7c0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.277.224-.5.5-.5s.5.223.5.5M5.005 7c0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.277.224-.5.5-.5s.5.223.5.5M2.36 7c0 .275-.225.5-.5.5-.277 0-.5-.225-.5-.5 0-.277.223-.5.5-.5.275 0 .5.223.5.5m5.29-3.997c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.645 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.645 0c0 .276-.225.5-.5.5-.277 0-.5-.224-.5-.5s.223-.5.5-.5c.275 0 .5.224.5.5m6.636 6.004c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-3 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5" fill="#FFF" mask="url(#b)">
                </path>

              </svg>

              United States
            </div>
            <div className="display-table-cell dtc-two">
              English (USD)
            </div>
            <div className="display-table-cell dtc-three">
              $(USD)
            </div>

            </div>
      </div>
    );
  }
}

export default HelpAndCurrency;
