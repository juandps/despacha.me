import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import img1 from '../../../assets/img/products/2.png';
import img2 from '../../../assets/img/products/6.png';
import img3 from '../../../assets/img/products/4.png';

const relatedpost = [
    {
        photo: img1,
        title: "Kiwi & Strawberry",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "19$",
        price2: "29$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
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
        price1: "11$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
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
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
    },
    {
        photo: img1,
        title: "Kiwi & Strawberry",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "19$",
        price2: "29$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
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
        price1: "11$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
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
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off </div>
    },
]

const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
      <span />
      <span />
    </div>
  )
class Relatedproducts extends Component {
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
        const { open } = this.state;
        return (
            <div className="section pt-0 andro_related-posts">
                <div className="container">
                    <div className="section-title flex-title">
                        <h4 className="title">Related Products</h4>
                        <div className="andro_arrows">
                            <i className="fa fa-arrow-left slick-arrow slider-prev" />
                            <i className="fa fa-arrow-right slick-arrow slider-next" />
                        </div>
                    </div>
                    <Slider className="andro_related-posts-slider" {...settings}>
                        {relatedpost.map((item, i) => (
                            <div key={i} className="andro_product andro_product-has-controls andro_product-has-buttons">
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
                                    <div className="andro_product-buttons">
                                        <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                                        <Link to="#" className="andro_btn-custom light" onClick={this.onOpenModal}>{item.btn2text}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                            modal: 'andro_quick-view-modal p-0',
                        }}>
                            <Modalcontent />
                        </Modal>
                    </Slider>
                </div>
            </div>

        );
    }
}

export default Relatedproducts;