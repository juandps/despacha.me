import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Countdown from "react-countdown";

import img1 from '../../../assets/img/products/5.png';
import img2 from '../../../assets/img/products/4.png';
import img3 from '../../../assets/img/products/6.png';
import img4 from '../../../assets/img/products/14.png';

const dailydealpost = [
  {
    photo: img1,
    title: "Watermelon",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    url: "/product-single",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    linktext: "Comprar",
    badge: <div className="andro_product-badge andro_badge-featured">
      <i className="fa fa-star" />
      <span>Featured</span>
    </div>
  },
  {
    photo: img2,
    title: "Cucumbers",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    url: "/product-single",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    linktext: "Comprar",
    badge: <div className="andro_product-badge andro_badge-sale">
      10% Off
    </div>
  },
  {
    photo: img3,
    title: "Oranges",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    url: "/product-single",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    linktext: "Comprar",
    badge: <div className="andro_product-badge andro_badge-sale">
      20% Off
  </div>
  },
  {
    photo: img4,
    title: "Grapes",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    url: "/product-single",
    stars: "4 Stars",
    price1: "8$",
    price2: "14$",
    linktext: "Comprar",
  },
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
class Dailydeal extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <div className="section pt-0 andro_fresh-arrivals">
        <div className="container">
          <div className="section-title flex-title">
            <h4 className="title">Daily Deals</h4>
            <div className="andro_arrows">
              <i className="fa fa-arrow-left slick-arrow slider-prev" />
              <i className="fa fa-arrow-right slick-arrow slider-next" />
            </div>
          </div>
          <Slider className="andro_fresh-arrivals-slider" {...settings}>
            {dailydealpost.map((item, i) => (
              <div key={i} className="andro_product">
                <div className="andro_product-thumb">
                  <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                  <Countdown date={Date.now() + 31536000000} renderer={renderer}/>
                </div>
                <div className="andro_product-body">
                  <h5 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h5>
                  <p>{item.para}</p>
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
                  <Link to={item.url} className="andro_btn-custom btn-sm">{item.linktext}</Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Dailydeal;