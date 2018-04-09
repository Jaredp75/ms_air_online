import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';






export default class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      category: []
    };
  }


  componentDidMount() {
    fetch('http://www.msaironline.com/qa1/api/category.php?id=223')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            category: result.category
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, category } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        {category.map(category => (
          <div className="category_listing">
            <p>Categories</p>
            <div className="category">{category.taxName}</div>
          </div>
        ))}
      );
    }
  }
}


Category.propTypes = {
  category: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    ...state.category
  };
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
