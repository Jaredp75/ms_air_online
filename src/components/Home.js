import React from "react";
import {Link} from 'react-router-dom';

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
          <p>Content provided by <a href="https://www.durham-nc.com/" target="_blank" rel="noopener noreferrer">Durham Convention & Visitors Bureau</a></p>
        </div>

        <div className = "select-a-tour">
          <h3>SELECT A TOUR</h3>
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
            <p>COMING SOON: <br/>African-American Heritage</p>
          </div>
        </div>

        <div className = "tour-item-coming">
          <div className = "tour-item-text">
          <p>COMING SOON: <br/>Bull City Breweries</p>
        </div>
        </div>

        <div className = "tour-item-coming">
          <div className = "tour-item-text">
            <p>COMING SOON: <br/>Public Art Walk</p>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
      </div>
    </div>
    )
  }
}
