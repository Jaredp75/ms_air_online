import React from "react";
import {Link} from 'react-router-dom';

export default class Baselayout extends React.Component {

  render(){

    return(
      <div>
        <nav>
          <Link to={"/"}>
            {/* <img src = "https://jaredpattersonblog.files.wordpress.com/2018/02/msair100.jpg" alt = "MS Air Online logo"/> */}
          </Link>
        </nav>
          {this.props.children}
        <footer></footer>
        <terms></terms>
        <privacy></privacy>
        <about></about>
        <login></login>
      </div>
    )
  }
}
