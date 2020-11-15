import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Countdown from "react-countdown";

import bannerimg1 from '../../../assets/img/products/4.png';
import bannerimg2 from '../../../assets/img/products/14.png';
import bannerimg3 from '../../../assets/img/products/6.png';

const bannerslides = [
  {
    photo: bannerimg1,
    bagde: "10% Off",
    url: "/product-single",
    producttitle: "Cucumbers",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    btntext: "Comprar",
    title: "Freshly Picked Cucumbers",
    titlespan: "Can Now Be Purchased",
    para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
    linktext: "Comprar ahora",
    link: "/shop-v1",
  },
  {
    photo: bannerimg2,
    bagde: "Featured",
    url: "/product-single",
    producttitle: "Grapes",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    btntext: "Comprar",
    title: "Grapes Season is Here",
    titlespan: "Get It Today For 50% Off",
    para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
    linktext: "Comprar Ahora",
    link: "/shop-v1",
  },
  {
    photo: bannerimg3,
    bagde: "Feature",
    url: "/product-single",
    producttitle: "Oranges",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    btntext: "Comprar",
    title: "Juice It While It's Fresh",
    titlespan: "Get Oranges From Our Shop",
    para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
    linktext: "Comprar Ahora",
    link: "/shop-v1",
  }
]
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div className="andro_countdown-timer">{days} Days {hours}:{minutes}:{seconds}</div>;
  }
};
class Banner extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
    };
    return (
      <div className="andro_banner banner-3 bg-contain bg-norepeat">
        <Slider className="andro_banner-slider" {...settings}>
          {bannerslides.map((item, i) => (
            <div key={i} className="andro_banner-slider-inner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="andro_product">
                      <div className="andro_product-badge andro_badge-sale">
                        {item.bagde}
                      </div>
                      <div className="andro_product-thumb">
                        <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                        <Countdown date={Date.now() + 31536000000} renderer={renderer} />
                      </div>
                      <div className="andro_product-body">
                        <h5 className="andro_product-title"> <Link to={item.url}> {item.producttitle} </Link> </h5>
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
                        <div className="andro_product-price">
                          <span>{item.price1}</span>
                          <span>{item.price2}</span>
                        </div>
                        <Link to={item.url} className="andro_btn-custom btn-sm">{item.btntext}</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <p>Usa el cupón <strong className="custom-primary">ORGANIC991</strong> al pagar</p>
                    <h1>{item.title} <span className="fw-400">{item.titlespan}</span> </h1>
                    <p>{item.para}</p>
                    <Link to={item.link} className="andro_btn-custom">{item.linktext}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="container">
          <div className="andro_arrows justify-content-center">
            <i className="fa fa-arrow-left slick-arrow slider-prev" />
            <i className="fa fa-arrow-right slick-arrow slider-next" />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;