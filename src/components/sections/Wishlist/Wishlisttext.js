import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import img1 from '../../../assets/img/products/1.png';
import img2 from '../../../assets/img/products/5.png';
import img3 from '../../../assets/img/products/4.png';

const wishlisttable = [
    {
        photo: img1,
        name: "Kiwi",
        para: "2 Kilos",
        price: "12.99$",
        total: "12.99$",
        stockcls: "andro_product-stock instock",
        stocktext: "In Stock",
    },
    {
        photo: img2,
        name: "Watermelons",
        para: "1 Piece",
        price: "9.99$",
        total: "9.99$",
        stockcls: "andro_product-stock instock",
        stocktext: "In Stock",
    },
    {
        photo: img3,
        name: "Cucumbers",
        para: "3 Kilos",
        price: "13.99$",
        total: "13.99$",
        stockcls: "andro_product-stock outofstock",
        stocktext: "Out of Stock",
    },
]
const facebooktip = (
    <Tooltip>
        Share on Facebook
    </Tooltip>
);
const twittertip = (
    <Tooltip>
        Share on Twitter
    </Tooltip>
);
const linkedintip = (
    <Tooltip>
        Share on Linkedin
    </Tooltip>
);
class Wishlisttext extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    {/* Wishlist Table Start */}
                    <table className="andro_responsive-table">
                        <thead>
                            <tr>
                                <th className="remove-item" />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlisttable.map((item, i) => (
                                <tr key={i}>
                                    <td className="remove">
                                        <button type="button" className="close-btn close-danger remove-from-cart">
                                            <span />
                                            <span />
                                        </button>
                                    </td>
                                    <td data-title="Product">
                                        <div className="andro_cart-product-wrapper">
                                            <img src={item.photo} alt="prod1" />
                                            <div className="andro_cart-product-body">
                                                <h6> <Link to="#">{item.name}</Link> </h6>
                                                <p>{item.para}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-title="Price"> <strong>{item.price}</strong> </td>
                                    <td data-title="Availability">
                                        <span className={item.stockcls}>{item.stocktext}</span>
                                    </td>
                                    <td data-title="Total"> <strong>{item.total}</strong> </td>
                                    <td data-title="Actions"> <Link to="#" className="andro_btn-custom btn-sm shadow-none">Add to Cart</Link> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Wishlist Table End */}
                    {/* Share Wishlist Start */}
                    <div className="text-center">
                        <h5>Share Your Wishlist</h5>
                        <div className="andro_post-share">
                            <ul className="andro_sm justify-content-center">
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
                                        <Link to="#"> <i className="fab fa-linkedin-in" /> </Link>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Share Wishlist End */}
                </div>
            </div>
        );
    }
}

export default Wishlisttext;