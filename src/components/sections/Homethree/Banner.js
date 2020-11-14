import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

import banner1 from '../../../assets/img/banner/1.1.jpg';
import banner2 from '../../../assets/img/banner/1.1.jpg';
import product1 from '../../../assets/img/products/8.1.png';
import product2 from '../../../assets/img/products/14.png';
import cta1 from '../../../assets/img/cta/1.1.jpg';
import cta2 from '../../../assets/img/cta/1.2.jpg';

const bannerslides = [
    {
        photo: banner1,
        proimg: product1,
        ctaimg: cta1,
        couponcode: "QUERUBIN",
        title: "Vegetales Orgánicos",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
        urltext: "Shop Now",
        url: "/shop-v1",
    },
    {
        photo: banner2,
        proimg: product2,
        ctaimg: cta2,
        couponcode: "QUERUBIN",
        title: "Frutas Frescas",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
        urltext: "Shop Now",
        url: "/shop-v1",
    },
]

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: false,
        };
        return (
            <div className="andro_banner banner-2 home-3">
                <Slider className="andro_banner-slider" {...settings}>
                    {bannerslides.map((item, i) => (
                        <div key={i}>
                        <div className="andro_banner-slider-inner" style={{backgroundImage: "url("+ item.photo +")"}}>
                            <div className="container">
                                <div className="andro_banner-slider-text">
                                    <img src={item.proimg} className="img-1" alt="product" />
                                    <p>Usa el cupón <strong className="custom-primary">{item.couponcode}</strong> al pagar</p>
                                    <h1 style={{backgroundImage: "url("+ item.ctaimg +")"}}> {item.title} </h1>
                                    <p>{item.para}</p>
                                    <Link to={item.url} className="andro_btn-custom">{item.urltext}</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Banner;