import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import productimg1 from '../../../assets/img/products/9.png';
import productimg2 from '../../../assets/img/products/15.png';

const wishlisttip = (
    <Tooltip>
        Agregar a favoritos
    </Tooltip>
);
const facebooktip = (
    <Tooltip>
        Compartir en facebook
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
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="andro_product-single-thumb">
                                <img src={productimg1} alt="product" />
                            </div>
                            {/* Pagination Start */}
                            <div className="andro_single-pagination">
                                <div className="andro_single-pagination-item andro_single-pagination-prev">
                                    <Link to="/product-single">
                                        <div className="andro_single-pagination-thumb">
                                            <img src={productimg1} alt="product" />
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
                                            <img src={productimg2} alt="product" />
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
                        <div className="col-md-7">
                            <div className="andro_product-single-content">
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
                                
                                
                                <h3> Tomatoes </h3>
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
                    </div>
                </div>
            </div>

        );
    }
}

export default Productcontent;