import React from "react";
import {Link} from 'react-router-dom';
import FooterLinks from './footer-links/footer-links.js';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orgInfo:[],
      tourList:[]
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    fetch('http://www.msaironline.com/qa1/api/category.php').then(results =>{
      return results.json();
    }).then(data=>{
      this.setState({orgInfo: data.organization});
      this.setState({tourList: data.organization.tours})
    })
  }

  render(){
    console.log(this.state.orgInfo)
    console.log(this.state.tourList)
    return(
      <div>
        <div className = "tour-main-photo" background-image={this.state.orgInfo.org_photo}>
          <div className = "tour-main-text">
            <div><h1>{this.state.orgInfo.display_name}</h1></div>
            <div><h2>{this.state.orgInfo.description}</h2></div>
          </div>
          <p>Having trouble locating a part? Contact us using our web submission form <a href="http://www.msaironline.com/contact/contact.php?linkid=message" target="_blank" rel="noopener noreferrer">here.</a> Or call <strong>1-877-MSAIR99</strong>.</p>
        </div>

        <div className = "select-a-tour">
          <h3>TOP SELLERS</h3>
        </div>

        <div className = "tours-wrapper">
        {this.state.tourList.map( (tour) => {
          return <div className = "tour-item" key={tour.tour_id}>
            <Link to={`/tours/${tour.tour_id}`}>

            <div className = "tour-item-text">
              <p>{tour.tour_name}</p>
            </div>
            </Link>
          </div>
        })}

        <div className = "tour-item-coming">
          <div className = "tour-item-text">
            <p>Trident</p>
          </div>
        </div>

        <div className = "tour-item-coming">
          <div className = "tour-item-text">
          <p>Sullivan-Palatek</p>
        </div>
        </div>

        <div className = "tour-item-coming">
          <div className = "tour-item-text">
            <p>Zeks</p>
          </div>
        </div>
      </div>

      <div className="Footer">
        <FooterLinks />
      </div>


      <div className="about-footer">
        <div className="terms">
          <p><a href="/terms" target=" blank" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
        </div>
        <div className="copyright">
          <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
      </div>
      </div>
    </div>
    )
  }
}
