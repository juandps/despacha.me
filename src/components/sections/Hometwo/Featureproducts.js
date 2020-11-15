import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Categorysidebar';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import img1 from '../../../assets/img/products/7.png';
import img2 from '../../../assets/img/products/8.png';
import img3 from '../../../assets/img/products/9.png';
import img4 from '../../../assets/img/products/10.png';
import img5 from '../../../assets/img/products/11.png';
import img6 from '../../../assets/img/products/12.png';

const featureproduct = [
    {
        photo: img1,
        title: "Ginger",
        price1: "19$",
        price2: "29$",
        btn1text: "Agregar al Carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img2,
        title: "Lettuce",
        price1: "8$",
        btn1text: "Agregar al Carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img3,
        title: "Tomatoes",
        price1: "6$",
        btn1text: "Agregar al Carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img4,
        title: "Corn",
        price1: "19$",
        btn1text: "Agregar al Carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img5,
        title: "Onions",
        price1: "13$",
        btn1text: "Agregar al Carrito",
        btn2text: "Ver producto",
        url: "/product-single",
    },
    {
        photo: img6,
        title: "Brocolis",
        price1: "19$",
        price2: "29$",
        btn1text: "Agregar al Carrito",
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
class Featureproducts extends Component {
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
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h4 className="title">Featured Products</h4>
                            </div>
                            <div className="row">
                                {featureproduct.map((item, i) => (
                                    <div key={i} className="col-sm-6">
                                        <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
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
                                                    <Link to="#" className="andro_btn-custom light" onClick={this.onOpenModal}>{item.btn2text}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                            modal: 'andro_quick-view-modal p-0',
                        }}>
                            <Modalcontent />
                        </Modal>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Featureproducts;