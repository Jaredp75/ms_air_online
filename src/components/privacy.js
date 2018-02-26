import React from "react";
import {Link} from 'react-router-dom';
import FooterLinks from './footer-links/footer-links.js'

export default class PrivacyPolicy extends React.Component {

  render(){

    return(
      <div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <h1>Privacy Policy</h1>
          </div>
          <p className="privacy-para">We are committed to protecting your privacy at MS Air Inc. We will not collect any personal information from you that you do not volunteer, and we are the sole owner of all information collected on this site. We do not sell, share, or rent this information to others in any way that we have not mentioned in this statement.<br /><br />

          <b>Registration</b><br />
          In order to process your orders placed on this website, you must first complete the registration form. During registration, you will be required to provide your contact information, which includes your name, e-mail address, telephone number and street address. This information is used to provide you with important MSAirOnline.com services such as automated order status updates via e-mail.<br /><br />

          <b>Information Collection and Use</b><br />
          MSAirOnline.com ("Us" or "We") is the sole owner of information collected on this site to purchase most products and services from MSAirOnline.com. We will not sell, share, or rent this information to any third parties, except as outlined in this policy. We collect information from our customers to process orders and better serve customers with pertinent information, such as order confirmations, order status updates, and to provide you with information on products and services that are available from us or parties associated with us. We also use gathered information to better understand the shopping habits of individual customers or groups of our customers. Information collected includes name, shipping address, billing address, telephone number, e-mail address, and payment information. We also require you to submit a username and password of your choice for your future access to your account information. We strongly suggest not shating your MS Air ID and password with anyone. If you choose to receive newsletters, surveys, or special promotions, your contact information will be used for the delivery of these items. However, if you elect not to receive newsletters, surveys, or special promotions, we may still periodically send other transactional communications to you that contain customer relationship information. This includes, for example, informational emails regarding changes in our policies, changes in our methods of conducting business, or requesting that you review the information we have on file for you or the options that you have previously selected regarding your transactions with us. We may gather your contact information through third party marketing services. This privacy agreement does not apply to information received from these sources.<br /><br />

          For certain services, it may be necessare for MS Air Online to share contact information with select third party business partners in order to provide our customers with these services. In these cases, we collect certain information from customers to send to the third party service providers in order to provide these services. Any information that we provide to third party service providers with your consent is owned by that service provider, and it may use your information for service approval, activation, upgrade and for other purposes that it requires. You should consult the privacy policies of the respective third party service providers, since this Privacy Policy does not cover the use of your information in these limited circumstances.<br /><br />

          <b>Order</b><br />
          Most of the information collected in the registration process will be used to process orders. During the order process, you will have to provide financial information such as your credit card number and expiration date. This information is used for billing purposes and to fulfill your order. If we have trouble processing an order, we will use this contact information to get in touch with you. To properly process your credit card information, we must share your personal and financial information with the merchant bank for authorization and approval. This process is protected by an enhanced security system.<br /><br />

          <b>Log Files</b><br />
          We use IP addresses to analyze trends, administer the site, track user movement, and gather broad demographic information for aggregate use.<br /><br />

          We may employ third party companies to perform functions on our behalf. These functions may include order fulfillment, package delivery, marketing assistance, postal and e-mail delivery, customer service, data analysis, and credit processing. The third parties we contract for these purposes have limited access to your personal information and may not use it for other purposes.<br /><br />

          Be aware that when you volunteer information or create a public profile in the course of your participation in our community features such as forums, user opinions and reviews, chat rooms, photo sharing or other forms of public communication and interaction, you are also agreeing to allow certain aspects of your personally identifiable information to be made public. This includes your screen name, any address or personal information or images that you add to your signature or otherwise post to the public, and any content of any such post.<br /><br />

          <b>Links</b><br />
          This website contains links to other sites. Please be aware that MSAirOnline.com is not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of each and every website that collects personally identifiable information. This privacy statement applies only to information collected by this website.<br /><br />

          <b>Security</b><br />
          MSAirOnline.com takes precautions to protect its customers' information. When you submit personal information via the website, we follow policies and procedures designed to protect your information both online and offline, examples of which are as described below.<br /><br />

          When our registration/order form asks you to enter personal information (such as your credit card number), that information is encrypted and is protected with the best encryption software currently available in the industry, SSL.<br /><br />

          <b>Updating Personal Information</b><br />
          Customers may change or review their stored account information such as street address or e-mail address through our website by visiting our My Stuff section. You must have your username and password in order to access your account. In the event you forget both your username and password, please contact our customer service department for assistance.<br /><br />

          <b>Notification of Changes</b><br />
          This Privacy Policy and other policies posted on the MSAirOnline.com website are subject to change at anytime without prior notice.</p><br /><br />

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
      </div>


    )
  }
}
