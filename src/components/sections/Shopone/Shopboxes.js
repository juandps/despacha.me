import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Shopsidebar';
import Pagination from '../../layouts/Pagination';
import { Dropdown } from 'react-bootstrap';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import img1 from '../../../assets/img/products/2.png';
import img2 from '../../../assets/img/products/6.png';
import img3 from '../../../assets/img/products/4.png';
import img4 from '../../../assets/img/products/7.png';
import img5 from '../../../assets/img/products/8.png';
import img6 from '../../../assets/img/products/9.png';

const shopgrid = [
    {
        photo: img1,
        title: "Kiwi & Strawberry",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "19$",
        price2: "29$",
        btntext: "Comprar",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Destacado</span>
        </div>
    },
    {
        photo: img2,
        title: "Fresh Oranges",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "5 Stars",
        price1: "11$",
        btntext: "Comprar",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Destacado</span>
        </div>
    },
    {
        photo: img3,
        title: "Ginger",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "3 Stars",
        price1: "8$",
        btntext: "Comprar",
        url: "/product-single",
    },
    {
        photo: img4,
        title: "Cucumbers",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Comprar",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Descuento
        </div>
    },
    {
        photo: img5,
        title: "Lettuce",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Comprar",
        url: "/product-single",
    },
    {
        photo: img6,
        title: "Tomatoes",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "4 Stars",
        price1: "8$",
        price2: "14$",
        btntext: "Comprar",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-sale">
            20% Descuento
        </div>
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
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
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
                            <div className="row masonry">
                                {shopgrid.map((item, i) => (
                                    <div key={i} className="col-sm-6 masonry-item">
                                        <div className="andro_product">
                                            {item.badge}
                                            <div className="andro_product-thumb">
                                                <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                            </div>
                                            <div className="andro_product-body">
                                                <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
                                                <p>{item.para}</p>
                                                
                                            </div>
                                            <div className="andro_product-footer">
                                                <div className="andro_product-price">
                                                    <span>{item.price1}</span>
                                                    <span>{item.price2}</span>
                                                </div>
                                                <Dropdown className="btn-group">
                                                    <Link to={item.url} className="andro_btn-custom btn-sm">{item.btntext}</Link>

                                                    <Dropdown.Toggle variant="success" className="andro_btn-custom dropdown-toggle dropdown-toggle-split btn-sm"></Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#" onClick={this.onOpenModal}><i className="fa fa-eye" /> Quick View</Dropdown.Item>
                                                        <Dropdown.Item href="#"><i className="fa fa-sync" /> Compare</Dropdown.Item>
                                                        <Dropdown.Item href="#"><i className="fa fa-heart" /> Agregar a favoritos</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
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

export default Shopboxes;