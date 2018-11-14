import React from "react";
// import {Link} from 'react-router-dom';
// import HelpAndCurrency from './help-and-currency.js';
// import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';


export default class Orders extends React.Component {
  constructor() {
    super()
    this.state = {
	  orders: ""
    };

  }
  componentDidMount() {
	var url = Utilities.getApiURL('history.php', '');
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then((data) => {
        if(data.is_logged_in === false){
			window.location = 'login?pageReturn=orders'
		} else {
			this.loadPageContent(data)
		}
    })
  }
  loadPageContent(a){
	  var url = "vieworder?id=";
      let orders = a.orders.map((order) => {
		return(
      <div className="orders-table">
      <table>
        <tr>
          <td><a href={url+order.order_id}>{order.order_id}</a></td> |
          <td>{order.order_date}</td> |
          <td>{order.status}</td> |
          <td>${order.order_due}</td>
			   </tr>
        </table>
      </div>
		)
	  	})
			this.setState({orders: orders});
  }


  render(){
	  return(<div>

        <div className = 'content-area-container'>
          <div className="replacement_parts_header">
            <h1>Order History</h1>
          </div>
        <div className="orders-table">
		      <table>
            {this.state.orders}
		      </table>
          </div>
        </div>
      </div>)
  }
}
