import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

import relatedimg1 from '../../../assets/img/products/5.png';
import relatedimg2 from '../../../assets/img/products/14.png';
import relatedimg3 from '../../../assets/img/products/12.png';
import relatedimg4 from '../../../assets/img/products/6.png';

const upsellslist = [
    {
        photo: relatedimg1,
        name: "Watermelons",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "5 Stars",
        price1: "11$",
        price2: "24$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        url: "/product-single",
    },
    {
        photo: relatedimg2,
        name: "Grapes",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "5 Stars",
        price1: "11$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        url: "/product-single",
    },
    {
        photo: relatedimg3,
        name: "Brocoli",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "5 Stars",
        price1: "11$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        url: "/product-single",
    },
    {
        photo: relatedimg4,
        name: "Oranges",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        stars: "5 Stars",
        price1: "11$",
        btn1text: "Add To Cart",
        btn2text: "Quick View",
        url: "/product-single",
    },
]

class Cartform extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
        };
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row andro_cart-form">
                        <div className="col-lg-6 andro_upsells">
                            <div className="section-title flex-title">
                                <h4 className="title">Upsells</h4>
                                <div className="andro_arrows">
                                    <i className="fa fa-arrow-left slick-arrow slider-prev" />
                                    <i className="fa fa-arrow-right slick-arrow slider-next" />
                                </div>
                            </div>
                            {/* Upsells Start */}
                            <Slider className="andro_upsells-slider" {...settings}>
                                {upsellslist.map((item, i) => (
                                    <div key={i} className="andro_product andro_product-list andro_product-has-controls andro_product-has-buttons">
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
                                            <h5 className="andro_product-title"> <Link to={item.url}> {item.name} </Link> </h5>
                                            <div className="andro_product-price">
                                                <span>{item.price1}</span>
                                                <span>{item.price2}</span>
                                            </div>
                                            <p>{item.para}</p>
                                        </div>
                                        <div className="andro_product-footer">
                                            <div className="andro_product-buttons">
                                                <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                                                <Link to="#" className="andro_btn-custom light">{item.btn2text}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            {/* Upsells End */}
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title">Cart Total</h4>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>90.99$</td>
                                    </tr>
                                    <tr>
                                        <th>Tax</th>
                                        <td> 9.99$ <span className="small">(11%)</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td> <b>99.99$</b> </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to="#" className="andro_btn-custom primary btn-block">Proceeed to Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cartform;