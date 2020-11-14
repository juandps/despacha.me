import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import img1 from '../../../assets/img/products/2.png';
import img2 from '../../../assets/img/products/5.png';
import img3 from '../../../assets/img/products/3.png';
import img4 from '../../../assets/img/products/6.png';

const toppicks = [
    {
        photo: img1,
        title: "Kiwi & Strawberry",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        price1: "19$",
        price2: "29$",
        stars: "5 Stars",
        url: "/product-single",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
    },
    {
        photo: img2,
        title: "Watermelons",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        price1: "11$",
        stars: "5 Stars",
        url: "/product-single",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
    },
    {
        photo: img3,
        title: "Kiwi",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        price1: "17$",
        stars: "5 Stars",
        url: "/product-single",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
    },
    {
        photo: img4,
        title: "Oranges",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        price1: "23$",
        stars: "5 Stars",
        url: "/product-single",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Featured</span>
        </div>
    },
]
const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
        <span />
        <span />
    </div>
)
class Toppicks extends Component {
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
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title">
                        <h4 className="title">Top Picks</h4>
                    </div>
                    <div className="row">
                        {toppicks.map((item, i) => (
                            <div key={i} className="col-lg-6">
                                <div className="andro_product andro_product-list andro_product-has-controls andro_product-has-buttons">
                                    {item.badge}
                                    <div className="andro_product-thumb">
                                        <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                    </div>
                                    <div className="andro_product-body">
                                        <div className="andro_rating-wrapper">
                                            <div className="andro_rating">
                                                <i className="fa fa-star active" />
                                                <i className="fa fa-star active" />
                                                <i className="fa fa-star active" />
                                                <i className="fa fa-star active" />
                                                <i className="fa fa-star active" />
                                            </div>
                                            <span>{item.stars}</span>
                                        </div>
                                        <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
                                        <div className="andro_product-price">
                                            <span>{item.price1}</span>
                                            <span>{item.price2}</span>
                                        </div>
                                        <p>{item.para}</p>
                                    </div>
                                    <div className="andro_product-footer">
                                        <div className="andro_product-buttons">
                                            <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                                            <Link to="#" className="andro_btn-custom light" onClick={this.onOpenModal}>{item.btn2text}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

export default Toppicks;