import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../layouts/Pagination';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import img1 from '../../../assets/img/products/2.png';
import img2 from '../../../assets/img/products/6.png';
import img3 from '../../../assets/img/products/4.png';
import img4 from '../../../assets/img/products/8.png';
import img5 from '../../../assets/img/products/9.png';
import img6 from '../../../assets/img/products/14.png';

const shopgrids = [
    {
        photo: img1,
        title: "Kiwi & Strawberry",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
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
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
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
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
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
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "19$",
        price2: "29$",
        url: "/product-single",
    },
    {
        photo: img5,
        title: "Tomatoes",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "5 Stars",
        price1: "11$",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Featured</span>
        </div>
    },
    {
        photo: img6,
        title: "Grapes",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
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
class Shopboxes extends Component {
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
        const { open } = this.state;
        return (
            <div className="section">
                <div className="container">
                    {/* Product Count & Orderby Start */}
                    <div className="andro_shop-global">
                        <p>Showing <b>20</b> of <b>320</b> products </p>
                        <form method="post">
                            <select className="form-control" name="orderby">
                                <option value="default">Default sorting</option>
                                <option value="latest">Latest release</option>
                                <option value="price-down">Price: High - Low</option>
                                <option value="price-up">Price: Low - High</option>
                                <option value="popularity">Popularity Sorting</option>
                            </select>
                        </form>
                    </div>
                    {/* Product Count & Orderby End */}
                    <div className="row">
                        {shopgrids.map((item, i) => (
                            <div key={i} className="col-md-4 col-sm-6">
                                <div className="andro_product andro_product-has-controls">
                                    {item.badge}
                                    <div className="andro_product-thumb">
                                        <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                    </div>
                                    <div className="andro_product-body">
                                        <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
                                        <div className="andro_product-price">
                                            <span>{item.price1}</span>
                                            <span>{item.price2}</span>
                                        </div>
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
                            </div>
                        ))}
                        <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                            modal: 'andro_quick-view-modal p-0',
                        }}>
                            <Modalcontent />
                        </Modal>
                    </div>
                    {/* Pagination Start */}
                    <Pagination />
                    {/* Pagination End */}
                </div>
            </div>

        );
    }
}

export default Shopboxes;