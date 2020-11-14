import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import img1 from '../../../assets/img/products/2.png';
import img2 from '../../../assets/img/products/6.png';
import img3 from '../../../assets/img/products/4.png';
import img4 from '../../../assets/img/products/8.png';
import img5 from '../../../assets/img/products/9.png';

const productsslides = [
    {
        photo: img1,
        title: "Kiwi & Strawberry",
        stars: "4 Stars",
        price1: "19$",
        price2: "29$",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Featured</span>
        </div>
    },
    {
        photo: img2,
        title: "Fresh Oranges",
        stars: "5 Stars",
        price1: "19$",
        price2: "29$",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Featured</span>
        </div>
    },
    {
        photo: img3,
        title: "Cucumbers",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
    },
    {
        photo: img4,
        title: "Lettuce",
        stars: "4 Stars",
        price1: "19$",
        price2: "29$",
        url: "/product-single",
    },
    {
        photo: img5,
        title: "Tomatoes",
        stars: "5 Stars",
        price1: "11$",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Featured</span>
        </div>
    },
]
const addcarttip = (
    <Tooltip>
        Add To Cart
    </Tooltip>
);
const quicktip = (
    <Tooltip>
        Quick View
    </Tooltip>
);
const comparetip = (
    <Tooltip>
        Compare
    </Tooltip>
);
const wishlisttip = (
    <Tooltip>
        Add To Wishlist
    </Tooltip>
);
const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
      <span />
      <span />
    </div>
  )
class Products extends Component {
    state = {
        open: false,
      };
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: false,
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
        const { open } = this.state;
        return (
            <div className="section pt-0 andro_fresh-arrivals">
                <div className="container">
                    <div className="section-title flex-title">
                        <h4 className="title">Fresh Arrivals</h4>
                        <div className="andro_arrows">
                            <i className="fa fa-arrow-left slick-arrow slider-prev" />
                            <i className="fa fa-arrow-right slick-arrow slider-next" />
                        </div>
                    </div>
                    <Slider className="andro_fresh-arrivals-slider" {...settings}>
                        {productsslides.map((item, i) => (
                            <div key={i} className="andro_product andro_product-has-controls">
                                {item.badge}
                                <div className="andro_product-thumb thumb-sm">
                                    <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                </div>
                                <div className="andro_product-body">
                                    <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
                                    <div className="andro_product-price">
                                        <span>{item.price1}</span>
                                        <span>{item.price2}</span>
                                    </div>
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
                                    <div className="andro_product-controls">
                                        <Link to="#">
                                            <OverlayTrigger placement="top" overlay={addcarttip}>
                                                <i className="flaticon-shopping-basket" />
                                            </OverlayTrigger>
                                        </Link>
                                        <Link to="#" onClick={this.onOpenModal}>
                                            <OverlayTrigger placement="top" overlay={quicktip}>
                                                <i className="flaticon-view" />
                                            </OverlayTrigger>
                                        </Link>
                                        <Link to="#">
                                            <OverlayTrigger placement="top" overlay={comparetip}>
                                                <i className="flaticon-compare" />
                                            </OverlayTrigger>
                                        </Link>
                                        <Link to="#" className="favorite">
                                            <OverlayTrigger placement="top" overlay={wishlisttip}>
                                                <i className="flaticon-like" />
                                            </OverlayTrigger>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                        modal: 'andro_quick-view-modal p-0',
                    }}>
                        <Modalcontent />
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Products;