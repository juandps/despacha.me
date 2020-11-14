import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Modalcontent from './Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import authorimg from '../../assets/img/people/4.jpg';
import ctaimg from '../../assets/img/cta/3.jpg';
// recent post
import img1 from '../../assets/img/products/5.png';
import img2 from '../../assets/img/products/6.png';
import img3 from '../../assets/img/products/10.png';
import img4 from '../../assets/img/products/14.png';

const recentpost = [
    {
        photo: img1,
        title: "Watermelon",
        price1: "12$",
        url: "/blog-single",
    },
    {
        photo: img2,
        title: "Oranges",
        price1: "8$",
        price2: "14$",
        url: "/blog-single",
    },
    {
        photo: img3,
        title: "Corn",
        price1: "8$",
        url: "/blog-single",
    },
    {
        photo: img4,
        title: "Grapes",
        price1: "8$",
        price2: "14$",
        url: "/blog-single",
    },
]
const tooltip = (
    <Tooltip id="tooltip">
      Quick View
    </Tooltip>
  );
const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
        <span />
        <span />
    </div>
)
class Homeblogsidebar extends Component {
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
            <div className="sidebar">
                {/* About Author Start */}
                <div className="sidebar-widget widget-about-author">
                    <div className="widget-about-author-inner">
                        <img src={authorimg} alt="author" />
                        <h5>Jina Flock</h5>
                        <p className="mb-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et,
                        porttitor at
                  sem.</p>
                    </div>
                    <ul className="andro_sm">
                        <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                        <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                        <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                        <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                    </ul>
                </div>
                {/* About Author End */}
                {/* Categories Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title"> Post Categories </h5>
                    <ul className="sidebar-widget-list">
                        <li>
                            <Link to="/blog-single"> Food <span>(32)</span> </Link>
                            <ul>
                                <li> <Link to="/blog-single">Vegetables &amp; Fruits <span>(14)</span> </Link> </li>
                                <li> <Link to="/blog-single">Dairy <span>(39)</span></Link> </li>
                                <li> <Link to="/blog-single">Vegan <span>(54)</span> </Link> </li>
                            </ul>
                        </li>
                        <li> <Link to="/blog-single"> Keto <span>(24)</span> </Link> </li>
                        <li> <Link to="/blog-single"> Baskets <span>(44)</span> </Link> </li>
                        <li> <Link to="/blog-single"> Baby &amp; Kids Care <span>(15)</span> </Link> </li>
                    </ul>
                </div>
                {/* Categories End */}
                {/* Fresh Products Start */}
                <div className="sidebar-widget widget-recent-products">
                    <h5 className="widget-title">Fresh Products</h5>
                    {recentpost.map((item, i) => (
                        <div key={i} className="andro_product-recent">
                            <Link className="andro_product-recent-thumb" to={item.url}>
                                <img src={item.photo} alt="product" />
                                <div className="andro_product-recent-content">
                                    <h6>{item.title}</h6>
                                    <div className="andro_product-price">
                                        <span>{item.price1}</span>
                                        <span>{item.price2}</span>
                                    </div>
                                </div>
                            </Link>
                            <button type="button" onClick={this.onOpenModal}> 
                            <OverlayTrigger placement="top" overlay={tooltip}>
                                <i className="flaticon-view" />
                                </OverlayTrigger>
                            </button>
                        </div>
                    ))}
                    <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                        modal: 'andro_quick-view-modal p-0',
                    }}>
                        <Modalcontent />
                    </Modal>
                </div>
                {/* Fresh Products End */}
                {/* CTA Start */}
                <div className="sidebar-widget">
                    <div className="andro_cta">
                        <img src={ctaimg} alt="cta" />
                        <div className="andro_cta-content">
                            <h4 className="text-white">Grab Your <span className="fw-400">Lemons</span> </h4>
                            <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Shop Now</Link>
                        </div>
                    </div>
                </div>
                {/* CTA End */}
                {/* Newsletter Start */}
                <div className="sidebar-widget">
                    <div className="andro_newsletter-form secondary-bg pattern-bg">
                        <h5>Join our newsletter</h5>
                        <p>Get exclusive weekly deals with our newsletter subscription</p>
                        <form method="post">
                            <div className="form-group">
                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address"/>
                            </div>
                            <button type="submit" className="andro_btn-custom btn-block" name="button">Join Newsletter</button>
                        </form>
                    </div>
                </div>
                {/* Newsletter End */}
            </div>
        );
    }
}

export default Homeblogsidebar;