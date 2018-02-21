import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from '../components/Baselayout';
import Home from '../components/Home';
import About from '../components/About';
import logo from '../msair100.jpg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</h1>
        </header>
        {/* <p className="App-intro">
          Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications
        </p> */}
        <BrowserRouter>
          <Baselayout>
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path ="/about" component ={About}/>
            </Switch>
          </Baselayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
