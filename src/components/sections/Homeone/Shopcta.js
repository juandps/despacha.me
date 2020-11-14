import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// images
import img1 from '../../../assets/img/cta/1.1.jpg';
import img2 from '../../../assets/img/cta/1.2.jpg';

const shopcta = [
  {
    photo: img1,
    title: "Freshly Picked",
    titlespan: "Vegetables",
    para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    linktext: "Shop Now",
    link: "/shop-v1",
  },
  {
    photo: img2,
    title: "Freshly Picked",
    titlespan: "Fruits",
    para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    linktext: "Shop Now",
    link: "/shop-v1",
  }
]
class Shopcta extends Component {
  render() {
    return (
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="row">
            {shopcta.map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="andro_cta">
                  <img src={item.photo} alt="cta" />
                  <div className="andro_cta-content">
                    <h4 className="text-white">{item.title} <span className="fw-400">{item.titlespan}</span> </h4>
                    <p className="text-white">{item.para}</p>
                    <Link to={item.link} className="andro_btn-custom btn-sm light">{item.linktext}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shopcta;