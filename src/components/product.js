import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelpAndCurrency from './help-and-currency.js';
import AboutLinks from './footer-links/about-links.js';
import * as Utilities from './utilities.js';



class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
	  qty: null
    };
	this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  componentDidMount() {
	var productUrl = "product?id=";
	var url = Utilities.getApiURL('product.php', '?id='+Utilities.getUrlParam('id'));
    fetch(url, {method: 'GET', credentials: 'include'})
    .then(results => {
      return results.json();
    }).then(data => {
      let products = data.product.map((pic) => {
        console.log(pic);
		var prodAttributes = null;
		if(pic.attributes) {
			prodAttributes = pic.attributes.map((attribute) => {
            return (
              <div key="attribute-details">
                <li><strong>{attribute.field}</strong>: {attribute.value}</li>
              </div>
            )
        });}

		var message = null;
		if(pic.message){
			message = (pic.message)
		}
		if(pic.related_parts){
			var relatedItems = null;
			var relatedItemsSection = null;
			relatedItems = pic.related_parts.map((rp) => {
            return (
				<div className="replacement_item_listing">
						<div className="replacement_item_entry">
							<div className="replacement_item_image">
								<img src={rp.icon} alt={rp.name}></img>
							</div>
							<div className="replacement_item_details">
								<h6 className="replacement_item_title"><a href={productUrl+rp.accessory_prod_id}>{rp.name}</a></h6>
								<h6 className="replacement_item_brand_name">{pic.brandName}</h6>
								<h6 className="replacement_item_actual_price"><strong>${rp.prodPrice}</strong></h6>
							</div>
						</div>
				</div>
			)});
			relatedItemsSection = (
			    <div id="replacement_items_section">
					  <h4 className="replacement_items_header">Related Parts</h4>
					  {relatedItems}
				  </div>)
		}
		var replacementParts = null;
		var replacementPartsSection = null;
		if(pic.replacement_parts){
			replacementParts = pic.replacement_parts.map((rp) => {
            return (
				<span className="replacement_parts_detail">
					<h4 className="replacement_parts_price">{rp.image_num}</h4>
					<div className="replacement_parts_thumbnail">
						<img src={rp.icon} alt={rp.name}></img>
					</div>

					<h4 className="replacement_parts_name"><a href={productUrl+rp.replacement_prod_id}>{rp.name}</a></h4>
					<h4 className="replacement_parts_price"><strong>Price</strong>: {rp.prodPrice}</h4>
						{/*<form >
					<div className="replacement-parts-quantity-input-group">
							<strong>Quantity</strong>:
							<input id='qty' type="number" className="quantityBox" value="0" />
							<input id="prodID" value={rp.prodPrice} />
					</div>
					<div className="replacement-parts-add-to-cart">
						<input onclick="myFunction()" type="submit" value="Add To Cart" />
					</div>
						</form>*/}
				</span>
            )});
			replacementPartsSection = (
				<div className="replacement_parts_section">
					<h1 className="replacement_parts_header">Replacement Parts</h1>
					<div className="replacement_parts_image">
						<img src="https://www.msaironline.com/images/assembly/QuickConnect_DISS_Replacement_Parts.jpg" alt="QuickConnect_DISS_Replacement_Parts"></img>
					</div>
					{replacementParts}
				</div>)
		}
		if(pic.accessories){
			var accessories = null;
			var accessoriesSection = null;
			relatedItems = pic.accessories.map((accessory) => {
            return (
				<div key="item-page" className="replacement_item_listing">
						<div className="replacement_item_entry">
							<div className="replacement_item_image">
								<img src={accessory.icon} alt={accessory.name}></img>
							</div>
							<div className="replacement_item_details">
								<h6 className="replacement_item_title"><a href={productUrl+accessory.related_prod_id}>{accessory.name}</a></h6>
								<h6 className="replacement_item_brand_name">{accessory.brandName}</h6>
								<h6 className="replacement_item_actual_price"><strong>{accessory.prodPrice}</strong></h6>
							</div>
						</div>
				</div>
			)});
			accessoriesSection = (
			    <div id="replacement_items_section">
					<h4 className="replacement_items_header">Accessories</h4>
					{relatedItems}
				</div>)
		}
		var compatibleParts = null;
		var compatiblePartsSection = null;
		if(pic.compatible_equipment){
			compatibleParts = pic.compatible_equipment.map((rp) => {
            return (
				<span className="replacement_parts_detail">
          {/* <img src={rp.icon} alt={rp.name}></img> */}
					<h4 className="replacement_parts_name"><a href={productUrl+rp.compatible_prod_id}>{rp.name}</a></h4>
				</span>
            )});
			compatiblePartsSection = (
				<div className="replacement_parts_section">
					<h1 className="replacement_parts_header">Compatible Parts</h1>
					{compatibleParts}
				</div>)
		}
		var productFiles = null;
		var productFilesSection = null;
		if(pic.file){
			productFiles = pic.file.map((rp) => {
            return (
				<div key="indiv-item" className="individual-product">
					<div className="individual-product-details"><a href={rp.file}>{rp.file_name} <img src="http://www.msaironline.com/images/pdf.jpg" alt="pdf-placeholder"></img></a></div>
				</div>
            )});
			productFilesSection = (
				<div className="file_section">
					{productFiles}
				</div>)
		}
        return(

          <div key={pic.results}>
            <div className="content-area-container">
              <div className="content-area-container2">
                <div id="individual_product_page">
                  <div className="individual-product">

                    <div className="individual_product_listing">
                      <div className="individual_product_entry">
                        {pic.product}
                      </div>
                      <div id="product-image">
                        <img src={pic.icon} alt="icon-placeholder" />
                        <h5>Catalog Number:<br />{pic.prodSku}</h5>
                      </div>


                    <div className="individual-product-details">
                      <div className="product-title">
                        <h2 className="individual-product-title2">{pic.prodName}</h2>
                      </div>
                        <h4 className="product-brand-title"><img src={pic.brandIcon} alt={pic.brandName}/></h4>
                        <h4 className="individual-product-suggested-retail-price">MSRP: ${pic.msrp}</h4>
                        <h4 className="individual-product-savings">Savings: <strong>${pic.msrp - pic.prodPrice}</strong></h4>
                        <h4 className="individual-product-actual-price">Price: <strong>${pic.prodPrice}</strong></h4>
                        <br />
                        <br />
                      <div className="individual-product-description">
                        <ul>
						  {prodAttributes}
                          <li>{pic.prodDesc}</li>
                          <br />
                          <li dangerouslySetInnerHTML={{__html: pic.prodLongDesc}} />
                          <br />
                          <li dangerouslySetInnerHTML={{__html: message}} />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

        </div>


          <div id="quantity-input-group">
            Qty:
            <input name='qty' type="text" className="quantityBox" value={this.state.qty} defaultValue="1" size="2" maxLength="4" onChange={this.handleInputChange} />
			<div id="add-to-cart">
				<button className="btn btn-primary" onClick={(e) => Utilities.putInCart(pic.prodID, this.state.qty, e)}><h4>Add To Cart</h4></button>
			</div>
		  </div>


{/* ---files Section--- */}
	{productFilesSection}
{/* ---Related Items Section--- */}
	{relatedItemsSection}

{/* ---Replacement Parts Section--- */}
	{replacementPartsSection}

{/* ---Accessories Section--- */}
	{accessoriesSection}

{/* ---compatiblePartsSection Section--- */}
	{compatiblePartsSection}



	<div style={{clear:'both'}} />

      </div>
        <div className="FooterLinks1">
          <HelpAndCurrency />
        </div>

        <div className="FooterLinks2">
          <AboutLinks />
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
      })
      console.log("state", this.state.products);
      this.setState({products: products});
    })
  }




  render() {
    return (

      <div className="container2">
        <div className="container1">
          {this.state.products}
        </div>
      </div>
    )
  }





}



export default Product;
