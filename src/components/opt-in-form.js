import React, { Component } from 'react';
import '../styles/App.css';


class OptInForm extends Component {
  render() {
    return (
      <div className="OptInForm">
        <p>
          Get the latest products and updates delivered right to your inbox.
        </p>
        <form>
          <label>
          <input type="text" placeholder="Enter your email" />
          </label>
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    );
  }
}

export default OptInForm;
