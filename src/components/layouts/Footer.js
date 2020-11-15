import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png';
import android from '../../assets/img/android.png';
import iosicon from '../../assets/img/ios.png';

class Footer extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer className="andro_footer">
                {/* Top Footer */}
                <div className="container">
                    <div className="andro_footer-top">
                        <div className="andro_footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="andro_footer-buttons">
                            <Link to="#"> <img src={android} alt="download it on the app store" /></Link>
                            <Link to="#"> <img src={iosicon} alt="download it on the app store" /></Link>
                        </div>
                    </div>
                </div>
                {/* Middle Footer */}
                <div className="andro_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li> <Link to="/">Home</Link> </li>
                                    <li> <Link to="/blog-grid">Blog</Link> </li>
                                    <li> <Link to="/about">About Us</Link> </li>
                                    <li> <Link to="/shop-v1">Shop</Link> </li>
                                    <li> <Link to="/contact">Contact Us</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Top Categories</h5>
                                <ul>
                                    <li> <Link to="#">Frutas</Link> </li>
                                    <li> <Link to="#">Lácteos y Huevos</Link> </li>
                                    <li> <Link to="#">Farmacia</Link> </li>
                                    <li> <Link to="#">Abarrotes</Link> </li>
                                    <li> <Link to="#">Verduras</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Others</h5>
                                <ul>
                                    <li> <Link to="/checkout">Checkout</Link> </li>
                                    <li> <Link to="/cart">Cart</Link> </li>
                                    <li> <Link to="/product-single">Product</Link> </li>
                                    <li> <Link to="/shop-v1">Shop</Link> </li>
                                    <li> <Link to="/legal">Legal</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                                <h5 className="widget-title">Social Media</h5>
                                <ul className="social-media">
                                    <li> <Link to="#" className="facebook"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="#" className="pinterest"> <i className="fab fa-pinterest-p" /> </Link> </li>
                                    <li> <Link to="#" className="google"> <i className="fab fa-google" /> </Link> </li>
                                    <li> <Link to="#" className="twitter"> <i className="fab fa-twitter" /> </Link> </li>
                                </ul>
                                <div className="andro_footer-offer">
                                    <p>Signup and get exclusive offers and coupon codes</p>
                                    <Link to="/register" className="andro_btn-custom btn-sm shadow-none">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="andro_footer-bottom">
                    <div className="container">
                        <ul>
                            <li> <Link to="#">Privacy Policy</Link> </li>
                            <li> <Link to="#">Refund Policy</Link> </li>
                            <li> <Link to="#">Cookie Policy</Link> </li>
                            <li> <Link to="#">Terms &amp; Conditions</Link> </li>
                        </ul>
                        <div className="andro_footer-copyright">
                            <p> Copyright © 2020 <Link to="#">AndroThemes</Link> All Rights Reserved. </p>
                            <Link to="#" className="andro_back-to-top" onClick={() => this.scrollToTop()}>Back to top <i className="fas fa-chevron-up" /> </Link>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;