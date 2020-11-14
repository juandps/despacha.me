import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import cartimg1 from '../../../assets/img/products/1.png';
import cartimg2 from '../../../assets/img/products/5.png';
import cartimg3 from '../../../assets/img/products/4.png';

const carttable = [
    {
        photo: cartimg1,
        name: "Kiwi",
        para: "2 Kilos",
        price: "12.99$",
        total: "12.99$",
    },
    {
        photo: cartimg2,
        name: "Watermelons",
        para: "1 Piece",
        price: "9.99$",
        total: "9.99$",
    },
    {
        photo: cartimg3,
        name: "Cucumbers",
        para: "3 Kilos",
        price: "13.99$",
        total: "13.99$",
    },
]

class Carttext extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    {/* Cart Table Start */}
                    <table className="andro_responsive-table">
                        <thead>
                            <tr>
                                <th className="remove-item" />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carttable.map((item, i) => (
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
                                    <td className="quantity" data-title="Quantity">
                                        <input type="number" className="qty form-control" defaultValue={1} />
                                    </td>
                                    <td data-title="Total"> <strong>{item.total}</strong> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Cart Table End */}
                    {/* Coupon Code Start */}
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="form-group mb-0">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Coupon Code" />
                                    <div className="input-group-append">
                                        <button className="andro_btn-custom shadow-none" type="button">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Coupon Code End */}
                </div>
            </div>

        );
    }
}

export default Carttext;