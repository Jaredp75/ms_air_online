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
        <div className = "content-area-container">
          <div className = "tour-main-text">
            <div><h1>{this.state.orgInfo.display_name}</h1></div>
            <div><h2>{this.state.orgInfo.description}</h2></div>
          </div>
          <p>Having trouble locating a part? Contact us using our web submission form <a href="http://www.msaironline.com/contact/contact.php?linkid=message" target="_blank" rel="noopener noreferrer">here.</a> Or call <strong>1-877-MSAIR99</strong>.</p>


        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/sullivan-palatek-logo.jpg" alt="Sullivan-Palatek logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=243&linkid=homemenu'><b>Sullivan-Palatek</b></a><br></br>
              <li><a href='store/subCat.php?cat=244&linkid=homemenu'>Air Compressors</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/zeks_logo.png" alt="Zeks logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=233&linkid=homemenu'><b>Zeks</b></a><br></br>
              <li><a href='store/subCat.php?cat=205&linkid=homemenu'>Replacement Elements</a></li>
              <li><a href='store/store.php?cat=234&linkid=homemenu'>Air Dryers</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
        </div>

        <div className = "top-brands">
          <div className = "brand-logo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2018/03/trident_logo.jpg" alt="Trident logo"/>
          </div>
          <div className="brand-text">
            <a href='store/store.php?cat=247&linkid=homemenu'><b>Trident</b></a><br></br>
              <li><a href='store/subCat.php?cat=249&linkid=homemenu'>Desiccant Air Dryers</a></li>
              <li><a href='store/subCat.php?cat=252&linkid=homemenu'>Coalescing Filters</a></li>
              <li><a href='store/subCat.php?cat=251&linkid=homemenu'>Particulate Filters</a></li>
          </div>
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

</div>



      <div className="Footer">
        <FooterLinks />
      </div>
    </div>

      <div className="about-footer">
        <div className="terms">
          <p><a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
        </div>
        <div className="copyright">
          <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
      </div>
      </div>
    </div>



    )
  }
}
