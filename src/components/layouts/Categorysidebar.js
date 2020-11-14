import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Countdown from "react-countdown";

import img1 from '../../assets/img/products/5.png';
import img2 from '../../assets/img/products/4.png';
import img3 from '../../assets/img/products/6.png';

const sidedeals = [
    {
        photo: img1,
        title: "Watermelon",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        url: "/product-single",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Buy Now",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
    },
    {
        photo: img2,
        title: "Cucumbers",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        url: "/product-single",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Buy Now",
        badge: <div className="andro_product-badge andro_badge-sale">
            10% Off </div>
    },
    {
        photo: img3,
        title: "Oranges",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        url: "/product-single",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Buy Now",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
    },
]
// Random component
const Completionist = () => <span>You are good to go!</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div className="andro_countdown-timer">{days} Days {hours}:{minutes}:{seconds}</div>;
  }
};
class Categorysidebar extends Component {
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
            <div className="sidebar">
                {/* Product Categories Start */}
                <div className="sidebar-widget">
                    <div className="section-title">
                        <h4 className="title">Categorías</h4>
                    </div>
                    <ul className="sidebar-widget-list">
                        <li>
                            <Link to="/product-single"> Frutas <span>(32)</span> </Link>
                            <ul>
                                <li> <Link to="/product-single">Vegetables &amp; Fruits <span>(14)</span> </Link> </li>
                                <li> <Link to="/product-single">Dairy <span>(39)</span></Link> </li>
                                <li> <Link to="/product-single">Vegan <span>(54)</span> </Link> </li>
                            </ul>
                        </li>
                        <li> <Link to="/product-single"> Abarrotes <span>(24)</span> </Link> </li>
                        <li> <Link to="/product-single"> Lácteos y Huevos <span>(44)</span> </Link> </li>
                        <li> <Link to="/product-single"> Baby &amp; Kids Care <span>(15)</span> </Link> </li>
                        <li> <Link to="/product-single"> Verduras <span>(43)</span> </Link> </li>
                        <li> <Link to="/product-single"> Farmacia <span>(75)</span> </Link> </li>
                    </ul>
                </div>
                {/* Product Categories End */}
                {/* Daily Deals Start */}
                <div className="sidebar-widget">
                    <div className="section-title">
                        <h4 className="title">Daily Deals</h4>
                    </div>
                    <Slider className="deals-slider" {...settings}>
                        {sidedeals.map((item, i) => (
                            <div key={i} className="andro_product">
                                {item.badge}
                                <div className="andro_product-thumb">
                                    <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                    <Countdown date={Date.now() + 31536000000} renderer={renderer}/>
                                </div>
                                <div className="andro_product-body">
                                    <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
                                    <p>{item.para}</p>
                                    <div className="andro_rating-wrapper">
                                        <div className="andro_rating">
                                            <i className="fa fa-star active" />
                                            <i className="fa fa-star active" />
                                            <i className="fa fa-star active" />
                                            <i className="fa fa-star active" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <span>{item.stars}</span>
                                    </div>
                                </div>
                                <div className="andro_product-footer">
                                    <div className="andro_product-price">
                                        <span>{item.price1}</span>
                                        <span>{item.price2}</span>
                                    </div>
                                    <Link to={item.url} className="andro_btn-custom btn-sm">{item.btntext}</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Daily Deals End */}
                {/* Newsletter Start */}
                <div className="sidebar-widget">
                    <div className="andro_newsletter-form">
                        <h5>Join our newsletter</h5>
                        <p>Get exclusive weekly deals with our newsletter subscription</p>
                        <form method="post">
                            <div className="form-group">
                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                            </div>
                            <button type="submit" className="andro_btn-custom secondary btn-block shadow-none" name="button">Join Newsletter</button>
                        </form>
                    </div>
                </div>
                {/* Newsletter End */}
            </div>
        );
    }
}

export default Categorysidebar;