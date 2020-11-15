import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Slider from 'react-slick';
import Countdown from "react-countdown";

import productimg1 from '../../../assets/img/products/15.png';
import productimg2 from '../../../assets/img/products/9.png';
// Deal slider
import img1 from '../../../assets/img/products/5.png';
import img2 from '../../../assets/img/products/4.png';
import img3 from '../../../assets/img/products/6.png';

const dealpost = [
    {
        photo: img1,
        title: "Watermelon",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Comprar",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
    },
    {
        photo: img2,
        title: "Cucumbers",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Comprar",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            10% Off </div>
    },
    {
        photo: img3,
        title: "Oranges",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Comprar",
        url: "/product-single",
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
// Tooltip
const wishlisttip = (
    <Tooltip>
        Agregar a favoritos
    </Tooltip>
);
const facebooktip = (
    <Tooltip>
        Compartir en Facebook
    </Tooltip>
);
const twittertip = (
    <Tooltip>
        Compartir en Twitter
    </Tooltip>
);
const linkedintip = (
    <Tooltip>
        Compartir en Linkedin
    </Tooltip>
);
class Productcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            show: true,
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
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
                        <div className="col-lg-4 col-md-5">
                            <div className="andro_product-single-thumb">
                                <img src={productimg1} alt="product" />
                            </div>
                            {/* Pagination Start */}
                            <div className="andro_single-pagination">
                                <div className="andro_single-pagination-item andro_single-pagination-prev">
                                    <Link to="/product-single">
                                        <div className="andro_single-pagination-thumb">
                                            <img src={productimg2} alt="product" />
                                        </div>
                                        <div className="andro_single-pagination-content">
                                            <h6>Tomatoes</h6>
                                        </div>
                                        <i className="fas fa-chevron-left" />
                                    </Link>
                                </div>
                                <div className="andro_single-pagination-item andro_single-pagination-next">
                                    <Link to="/product-single-v2">
                                        <div className="andro_single-pagination-thumb">
                                            <img src={productimg1} alt="product" />
                                        </div>
                                        <div className="andro_single-pagination-content">
                                            <h6>Apricots</h6>
                                        </div>
                                        <i className="fas fa-chevron-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* Pagination End */}
                        </div>
                        <div className="col-lg-4 col-md-7">
                            <div className="andro_product-single-content andro_product-single-2">
                                <div className="andro_product-single-controls andro_post-share">
                                    <OverlayTrigger placement="top" overlay={wishlisttip}>
                                        <Link to="#" className="andro_add-to-favorite"> <i className="flaticon-like" /> </Link>
                                    </OverlayTrigger>
                                    <ul className="andro_sm">
                                        <li>
                                            <OverlayTrigger placement="top" overlay={facebooktip}>
                                                <Link to="#"> <i className="fab fa-facebook-f" /> </Link>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="top" overlay={twittertip}>
                                                <Link to="#"> <i className="fab fa-twitter" /> </Link>
                                            </OverlayTrigger>
                                        </li>
                                        <li>
                                            <OverlayTrigger placement="top" overlay={linkedintip}>
                                                <Link to="#"> <i className="fab fa-whatsapp" /> </Link>
                                            </OverlayTrigger>
                                        </li>
                                    </ul>
                                </div>
                                <div className="andro_rating-wrapper">
                                    <div className="andro_rating">
                                        <i className="fa fa-star active" />
                                        <i className="fa fa-star active" />
                                        <i className="fa fa-star active" />
                                        <i className="fa fa-star active" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <span>4 Stars</span>
                                </div>
                                <h3> Apricots </h3>
                                <div className="andro_product-price">
                                    <span>8$</span>
                                    <span>14$</span>
                                </div>
                                <p className="andro_product-excerpt">Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                                <form className="andro_product-atc-form">
                                    <div className="andro_product-variation-wrapper">
                                        <div className="form-group">
                                            <select className="form-control" name="amount">
                                                <option value>Seleccionar Monto</option>
                                                <option value={1}>1 Kilo</option>
                                                <option value={2}>2 Kilos</option>
                                                <option value={3}>3 Kilos</option>
                                                <option value={4}>4 Kilos</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control" name="breed">
                                                <option value>Select a Breed</option>
                                                <option value="italian">Italian</option>
                                                <option value="egyptian">Egyptian</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="qty-outter">
                                        <Link to="/product-single" className="andro_btn-custom">Comprar</Link>
                                        <div className="qty">
                                            <span className="qty-subtract" onClick={this.DecreaseItem} data-type="minus" data-field><i className="fa fa-minus" /></span>
                                            <input type="text" name="clicks" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                            <span className="qty-add" onClick={this.IncrementItem} data-type="plus" data-field><i className="fa fa-plus" /></span>
                                        </div>
                                    </div>
                                </form>
                                <ul className="andro_product-meta">
                                    <li>
                                        <span>Categorías </span>
                                        <div className="andro_product-meta-item">
                                            <Link to="#">Frutas</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Etiquetas: </span>
                                        <div className="andro_product-meta-item">
                                            <Link to="#">Healthy</Link>,
                <Link to="#">Vegetarian</Link>,
                <Link to="#">Farm</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <span>SKU: </span>
                                        <div className="andro_product-meta-item">
                                            <span>N/A</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* Daily Deals Start */}
                                <div className="sidebar-widget mb-0">
                                    <h5 className="widget-title"> Daily Deals </h5>
                                    <Slider className="deals-slider" {...settings}>
                                        {dealpost.map((item, i) => (
                                            <div key={i} className="andro_product">
                                                {item.badge}
                                                <div className="andro_product-thumb">
                                                    <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                                    <Countdown date={Date.now() + 31536000000} renderer={renderer} />
                                                </div>
                                                <div className="andro_product-body">
                                                    <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Productcontent;