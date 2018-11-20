import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';

class Category extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
    };
  }


  componentDidMount() {
	var catUrl = "category?id=";
	var key = Utilities.getUrlParam('key');
	if(key == null)
		key = '';
	var value = Utilities.getUrlParam('value');
	if(value == null)
		value = '';
	var url = Utilities.getApiURL('category.php', '?id='+Utilities.getUrlParam('id')+'&key='+key+'&value='+value);
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();

    }).then(data => {
      let products = data.category.map((pic) => {
        console.log(pic);

		var subCats = null;
		var subCatSection = null;
		if(pic.subcats) {
			subCats = pic.subcats.map((cat) => {
            return (
              
              <div className="subcat_section1">

				<a href={catUrl+cat.taxID} alt={cat.taxName}><img src={cat.icon} alt={cat.taxName}/></a>
				<h2><a href={catUrl+cat.taxID}>{cat.taxName}</a></h2>
              </div>

            )});
			subCatSection = (

				<div className="subcategories">

				{subCats}
				</div>

			)
		}

		var prodFilters = null;
		var prodFilterOptions = null;
		var prodFiltersSection = null;
		var id = Utilities.getUrlParam('id');
		if(key !== '')
			key = key+'|';
		if(value !== '')
			value = value+'|';
		if(pic.filters) {
			prodFilters = pic.filters.map((filter) => {

			prodFilterOptions = filter.items.map((item) => {
			return (
				<div><a href={catUrl+id+'&key='+key+filter.title+'&value='+value+item}>{item}</a></div>
			)});
            return (

              <div className="subcat_section1">

				{filter.title}
				<div>
				{prodFilterOptions}
				</div>
        </div>


            )});
			subCatSection = (

				<div className="subcategories">

				{prodFilters}
				</div>


			)
		}


		var products = null;
		var productsSection = null;
		if(pic.product) {
			products = pic.product.map((product) => {

			var productUrl = "product?id=";
			var message = null;
			if(pic.message){
				message = (pic.message)
			}
			var prodAttributes = null;
			if(product.attributes) {
				prodAttributes = product.attributes.map((attribute) => {
				return (
					<li><strong>{attribute.field}</strong>: {attribute.value}</li>
				)
				});
			}
            return (





                <div className="individual-product-details2">

                  <div className="product-image">
                    <a href={productUrl+product.prodID}><img src={product.icon} alt="icon-placeholder" /></a>
                    <div className="catalog-number"><h5>Catalog Number:<br />{product.prodSku}</h5></div>
                  </div>

                  <div className="product-title">
                    <h2 className="individual-product-title"><a href={productUrl+product.prodID}>{product.prodName}</a></h2>
                  </div>
                    <img src={product.brandIcon} alt={product.brandName}></img>

                    {/* <h4 className="product-brand-title"><a href={productUrl+product.prodID}><img src={product.brandIcon} alt={product.brandName}/></a></h4> */}

                    <h2 className="individual-product-actual-price"><strong>${product.prodPrice}</strong></h2>
                      <br />
                      <br />
                    <div className="individual-product-description">
                      <ul>
                        {prodAttributes}
                        {/*<li>{product.prodDesc}</li>*/}
                          <br />
                        <li><a href={productUrl+product.prodID}>More Info >></a></li>
                          <br />
                        <li>{message}</li>
                          <br />
                        {/*<li>{product.prodLongDesc}</li>*/}
                      </ul>
                    </div>

                  </div>



			)});
			productsSection = (
				<div id="individual_product_page2">
          <div className="individual-product2">
					       {products}
				  </div>
				</div>

			)
		}
        return(
              <div className="replacement_parts_header">
			    <div><h1>{pic.taxName}</h1></div>

				<div id="individual_product_page">
					<h1><img src={pic.icon} alt={pic.taxName}/></h1>
					<h3 dangerouslySetInnerHTML={{__html: pic.long_desc}} />
				</div>

				{subCatSection}
				{productsSection}
				{prodFiltersSection}
			  </div>
        )
      })

      this.setState({products: products});
      console.log("state", this.state.products);

    })
  }







  render(){

    return(
      <div>

        <div className = 'content-area-container'>

          <div className="container1">
            <div className="container2">
              {this.state.products}
            </div>
          </div>


<div style={{clear:'both'}} />


          <div className="FooterLinks1">
            <HelpAndCurrency />
          </div>

          <div className="FooterLinks2">
            <AboutLinks />
          </div>









      </div>




              <div className="about-footer">
                <div className="terms">
                  <p><a href="/terms" rel="noopener noreferrer">Terms of Use</a> | <a href="/privacy" rel="noopener noreferrer">Privacy Policy</a></p>
                </div>

                <div className="copyright">
                  <p>&copy; 2018 - MS Air, Inc. | <Link to="/">Home</Link></p>
                </div>
              </div>

      </div>


    )
  }
}

export default Category;
