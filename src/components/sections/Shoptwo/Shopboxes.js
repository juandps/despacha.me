import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Shopsidebar';
import Pagination from '../../layouts/Pagination';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import img1 from '../../../assets/img/products/7.png';
import img2 from '../../../assets/img/products/8.png';
import img3 from '../../../assets/img/products/9.png';
import img4 from '../../../assets/img/products/10.png';
import img5 from '../../../assets/img/products/11.png';
import img6 from '../../../assets/img/products/12.png';
import img7 from '../../../assets/img/products/2.png';
import img8 from '../../../assets/img/products/4.png';
import img9 from '../../../assets/img/products/5.png';
import img10 from '../../../assets/img/products/6.png';
import img11 from '../../../assets/img/products/14.png';
import img12 from '../../../assets/img/products/15.png';

const shopfullbox = [
    {
        photo: img1,
        title: "Ginger",
        price1: "19$",
        price2: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Destacado</span>
        </div>
    },
    {
        photo: img2,
        title: "Lettuce",
        price1: "8$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img3,
        title: "Tomatoes",
        price1: "6$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img4,
        title: "Corn",
        price1: "19$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Off  </div>
    },
    {
        photo: img5,
        title: "Onions",
        price1: "13$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Destacado</span>
        </div>
    },
    {
        photo: img6,
        title: "Brocolis",
        price1: "19$",
        price2: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img6,
        title: "Kiwi & Strawberry",
        price1: "19$",
        price2: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img8,
        title: "Cucumber",
        price1: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img6,
        title: "Watermelons",
        price1: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img10,
        title: "Oranges",
        price1: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img11,
        title: "Grapes",
        price1: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img6,
        title: "Apricots",
        price1: "13$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
]
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
            <div className="section hide-newsletter">
                <div className="andro_section-fw">
                    <div className="row">
                        <div className="col-lg-9">
                            {/* Product Count & Orderby Start 
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
                            */}                 
                            {/* Product Count & Orderby End */}
                            <div className="row masonry">
                                {shopfullbox.map((item, i) => (
                                    <div key={i} className="col-md-3 col-sm-4 masonry-item">
                                        <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
                                            {item.badge}
                                            <div className="andro_product-thumb">
                                                <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                            </div>
                                            <div className="andro_product-body">
                                                <h6 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h6>
                                                
                                            </div>
                                            <div className="andro_product-footer">
                                                <div className="andro_product-price">
                                                    <span>{item.price1}</span>
                                                    <span>{item.price2}</span>
                                                </div>
                                                <div className="andro_product-buttons">
                                                    <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                                                    <Link to="#" onClick={this.onOpenModal} className="andro_btn-custom light">{item.btn2text}</Link>
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
                        {/* Sidebar Start */}
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Shopboxes;