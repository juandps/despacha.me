import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

import banner1 from '../../../assets/img/products/2.png';
import banner2 from '../../../assets/img/products/12.png';

const bannerslider = [
    {
        photo: banner1,
        couponcode: "ORGANIC991",
        title: "40% Sale",
        titlespan: "On Select Products",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
        urltext: "Shop Now",
        url: "/shop-v1",
    },
    {
        photo: banner2,
        couponcode: "ORGANIC991",
        title: "40% Sale",
        titlespan: "On Select Products",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
        urltext: "Shop Now",
        url: "/shop-v1",
    },
]

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        {/* Menu Start */}
                        <div className="col-lg-3">
                            <div className="andro_category-mm">
                                <div className="andro_category-mm-header">
                                    <h6> <i className="fas fa-th-large" /> Categories</h6>
                                </div>
                                <div className="andro_category-mm-body">
                                    <ul>
                                        {/* Level 1 */}
                                        <li className="andro_category-mm-item andro_category-mm-item-has-children">
                                            <Link to="#"> Frutas </Link>
                                            <ul className="andro_category-mm-2-cols">
                                                {/* Level 2 */}
                                                <li>
                                                    <div className="andro_category-mm-banner">
                                                        <img src="assets/img/megamenu/1.jpg" alt="megamenu img" />
                                                        <div className="andro_category-mm-banner-desc">
                                                            <h6>Frutas</h6>
                                                            <p>Experience organic Frutas like never before</p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li> <Link to="#">Vegetables &amp; Fruits</Link> </li>
                                                        <li> <Link to="#">Dairy</Link> </li>
                                                        <li> <Link to="#">Vegan Dairy</Link> </li>
                                                        <li> <Link to="#">Meats &amp; Fish</Link> </li>
                                                        <li> <Link to="#">Breads &amp; Cereal</Link> </li>
                                                        <li> <Link to="#">Honey</Link> </li>
                                                        <li> <Link to="#">Jam &amp; Spreads</Link> </li>
                                                        <li> <Link to="#">Legumes</Link> </li>
                                                        <li> <Link to="#">Oils</Link> </li>
                                                    </ul>
                                                    <ul>
                                                        <li> <Link to="#">Beans</Link> </li>
                                                        <li> <Link to="#">Vegan Frutas</Link> </li>
                                                        <li> <Link to="#">Distillates</Link> </li>
                                                        <li> <Link to="#">Eggs</Link> </li>
                                                        <li> <Link to="#">Snacks</Link> </li>
                                                        <li> <Link to="#">Syrups</Link> </li>
                                                        <li> <Link to="#">Pickles</Link> </li>
                                                        <li> <Link to="#">Wines &amp; Spirit</Link> </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="andro_category-mm-item"> <Link to="#"> Abarrotes</Link> </li>
                                        <li className="andro_category-mm-item andro_category-mm-item-has-children">
                                            <Link to="#"> Lácteos y Huevos </Link>
                                            <ul className="andro_category-mm-2-cols">
                                                {/* Level 2 */}
                                                <li>
                                                    <div className="andro_category-mm-banner">
                                                        <img src="assets/img/megamenu/2.jpg" alt="megamenu img" />
                                                        <div className="andro_category-mm-banner-desc">
                                                            <h6>Lácteos y Huevos</h6>
                                                            <p>Hand made Lácteos y Huevos for your organic goods</p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li> <Link to="#">Vegetables &amp; Fruits</Link> </li>
                                                        <li> <Link to="#">Dairy</Link> </li>
                                                        <li> <Link to="#">Vegan Dairy</Link> </li>
                                                        <li> <Link to="#">Meats &amp; Fish</Link> </li>
                                                        <li> <Link to="#">Breads &amp; Cereal</Link> </li>
                                                    </ul>
                                                    <ul>
                                                        <li> <Link to="#">Honey</Link> </li>
                                                        <li> <Link to="#">Jam &amp; Spreads</Link> </li>
                                                        <li> <Link to="#">Legumes</Link> </li>
                                                        <li> <Link to="#">Oils</Link> </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="andro_category-mm-item"> <Link to="#"> Baby &amp; Kids Care</Link> </li>
                                        <li className="andro_category-mm-item"> <Link to="#"> Verduras</Link> </li>
                                        <li className="andro_category-mm-item"> <Link to="#"> Supplements</Link> </li>
                                        <li className="andro_category-mm-item"> <Link to="#"> Beauty Care</Link> </li>
                                        <li className="andro_category-mm-item andro_category-mm-item-has-children andro_category-mm-item-expand">
                                            <Link to="#"> <i className="fas fa-plus" /> More Categories</Link>
                                            <ul className="andro_category-mm-2-cols">
                                                {/* Level 2 */}
                                                <li>
                                                    <div className="andro_category-mm-banner">
                                                        <img src="assets/img/megamenu/3.jpg" alt="megamenu img" />
                                                        <div className="andro_category-mm-banner-desc">
                                                            <h6>More Categories</h6>
                                                            <p>Explore more categories that we offer</p>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li> <Link to="#">Vegetables &amp; Fruits</Link> </li>
                                                        <li> <Link to="#">Dairy</Link> </li>
                                                        <li> <Link to="#">Vegan Dairy</Link> </li>
                                                        <li> <Link to="#">Meats &amp; Fish</Link> </li>
                                                        <li> <Link to="#">Breads &amp; Cereal</Link> </li>
                                                    </ul>
                                                    <ul>
                                                        <li> <Link to="#">Honey</Link> </li>
                                                        <li> <Link to="#">Jam &amp; Spreads</Link> </li>
                                                        <li> <Link to="#">Legumes</Link> </li>
                                                        <li> <Link to="#">Oils</Link> </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Menu End */}
                        {/* Banner Start */}
                        <div className="col-lg-9">
                            <div className="andro_flex-menu d-none d-md-block">
                                <ul>
                                    <li className="menu-item"> <Link to="/shop-v1">Daily Deals</Link> </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="#">Top Sellers</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"> <Link to="#">Frutas</Link> </li>
                                            <li className="menu-item"> <Link to="#">Lácteos y Huevos</Link> </li>
                                            <li className="menu-item"> <Link to="#">Abarrotes</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <Link to="/shop-v3">Fresh Arrivals</Link> </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="#">Gift Carts</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"> <Link to="#">Loyalty System</Link> </li>
                                            <li className="menu-item"> <Link to="#">Redemption Coupons</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <Link to="/wishlist">Wishlist</Link> </li>
                                </ul>
                            </div>
                            <div className="andro_banner banner-1">
                                <Slider className="andro_banner-slider" {...settings}>
                                    {bannerslider.map((item, i) => (
                                        <div key={i} className="container-fluid">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <p>Usa el cupón <strong className="custom-primary">{item.couponcode}</strong> al pagar</p>
                                                    <h1> {item.title} <span className="fw-400">{item.titlespan}</span> </h1>
                                                    <p>{item.para}</p>
                                                    <Link to={item.url} className="andro_btn-custom">{item.urltext}</Link>
                                                </div>
                                                <div className="col-lg-6 d-none d-lg-block">
                                                    <img src={item.photo} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        {/* Banner End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;