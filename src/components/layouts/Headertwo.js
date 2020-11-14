import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Mobilemenu from './Mobilemenu';
import $ from 'jquery';
import {findDOMNode } from 'react-dom'

import logo from '../../assets/img/logo.png';

class Headertwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redText: false
        };
      }
    // Sticky header
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 110
            });
        }, false);
    }
    // Sidebar btn
    sidebarbtn = () => {
        const sdb = findDOMNode(this.refs.sidebarbtn);
        $(sdb).addClass('open');
    }
    removesidebarbtn = () => {
        const sdb = findDOMNode(this.refs.sidebarbtn);
        $(sdb).removeClass('open');
    }
    // Mobile btn
    mobilemenubtn = () => {
        const mbb = findDOMNode(this.refs.mobilemenubtn);
        $(mbb).addClass('open');
    }
    removemobilemenu = () => {
        const mbb = findDOMNode(this.refs.mobilemenubtn);
        $(mbb).removeClass('open');
    }
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <div>
                <aside className="andro_aside andro_aside-right" ref="sidebarbtn">
                    <div className="sidebar d-block">
                        {/* Popular Categories Start */}
                        <div className="sidebar-widget widget-categories-icons">
                            <h5 className="widget-title">Popular Categories</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to="/product-single">
                                            <i className="flaticon-diet" />
                                            <h5>Food</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to="/product-single">
                                            <i className="flaticon-groceries" />
                                            <h5>Baskets</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to="/product-single">
                                            <i className="flaticon-supplements" />
                                            <h5>Supplements</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to="/product-single">
                                            <i className="flaticon-cleaning-spray" />
                                            <h5>Home Care</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to="/product-single">
                                            <i className="flaticon-baby" />
                                            <h5>Kids Care</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to="/product-single">
                                            <i className="flaticon-olive-oil" />
                                            <h5>Oils</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Popular Categories End */}
                        {/* Popular Tags Start */}
                        <div className="sidebar-widget">
                            <h5 className="widget-title">Popular Tags</h5>
                            <div className="tagcloud">
                                <Link to="/product-single">Health</Link>
                                <Link to="/product-single">Food</Link>
                                <Link to="/product-single">Ingredients</Link>
                                <Link to="/product-single">Organic</Link>
                                <Link to="/product-single">Farms</Link>
                                <Link to="/product-single">Green</Link>
                                <Link to="/product-single">Fiber</Link>
                                <Link to="/product-single">Supplements</Link>
                                <Link to="/product-single">Gain</Link>
                                <Link to="/product-single">Live Stock</Link>
                                <Link to="/product-single">Harvest</Link>
                            </div>
                        </div>
                        {/* Popular Tags End */}
                    </div>
                </aside>
                <div className="andro_aside-overlay aside-trigger-right" onClick={this.removesidebarbtn} />
                {/* Aside (Mobile Navigation) */}
                <aside className="andro_aside andro_aside-left" ref="mobilemenubtn">
                    <Mobilemenu />
                </aside>
                <div className="andro_aside-overlay aside-trigger-left" onClick={this.removemobilemenu}/>
                {/* Header Start */}
                <header className={`andro_header header-1 can-sticky ${stickyheader}`}>
                    {/* Topheader Start */}
                    <div className="andro_header-top">
                        <div className="container">
                            <div className="andro_header-top-inner">
                                <ul className="andro_header-top-sm andro_sm">
                                    <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                                    <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                                    <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                                </ul>
                                <ul className="andro_header-top-links">
                                    <li className="menu-item"><Link to="/login"> My Account </Link></li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="#"> <span className="andro_current-currency-text">Currency</span> (USD) </Link>
                                        <ul className="sub-menu sub-menu-left">
                                            <li> <Link to="#">United States Dollar (USD)</Link> </li>
                                            <li> <Link to="#">Kuwait Dinar (KWD)</Link> </li>
                                            <li> <Link to="#">Pound Sterling (GBP)</Link> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Topheader End */}
                    {/* Middle Header Start */}
                    <div className="andro_header-middle">
                        <div className="container">
                            <nav className="navbar">
                                {/* Logo */}
                                <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" /> </Link>
                                {/* Search Form */}
                                <div className="andro_search-adv">
                                    <form method="post">
                                        <div className="andro_search-adv-cats">
                                            <span>Categorías</span>
                                            <div className="sub-menu">
                                                <div className="andro_dropdown-scroll">
                                                    <label>
                                                        <input type="checkbox" name="category1" defaultValue="food" />
                      Food
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category2" defaultValue="home-care" />
                      Home Care
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category3" defaultValue="keto" />
                      Keto
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category4" defaultValue="baskets" />
                      Baskets
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category5" defaultValue="supplements" />
                      Supplements
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category6" defaultValue="baby-kids" />
                      Baby &amp; Kids care
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category7" defaultValue="serum" />
                      Serum
                      <i className="fas fa-check" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="andro_search-adv-input">
                                            <input type="text" className="form-control" placeholder="Busca frutas, verduras, medicina... ¡Lo que sea!" name="search" />
                                            <button type="submit" name="button"><i className="fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="andro_header-controls">
                                    <ul className="andro_header-controls-inner">
                                        <li className="andro_header-favorites"> <Link to="/wishlist" title="Your Wishlist"> <i className="flaticon-like" /> </Link> </li>
                                        <li className="andro_header-cart">
                                            <Link to="/cart" title="Your Cart">
                                                <i className="flaticon-shopping-basket" />
                                                <div className="andro_header-cart-content">
                                                    <span>9 Items</span>
                                                    <span>249.99$</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* Toggler */}
                                    <div className="aside-toggler aside-trigger-left" onClick={this.mobilemenubtn}>
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Middle Header End */}
                    {/* Bottom Header Start */}
                    <div className="andro_header-bottom">
                        <div className="container">
                            <div className="andro_header-bottom-inner">
                                {/* Menu */}
                                    <Navigation/>
                                {/* Side navigation toggle */}
                                <div className="aside-toggler aside-trigger-right desktop-toggler" onClick={this.sidebarbtn}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Header End */}
                </header>
            </div>

        );
    }
}

export default Headertwo;