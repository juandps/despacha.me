import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
 
import img1 from '../../../assets/img/products/10.png';
import img2 from '../../../assets/img/products/14.png';
import img3 from '../../../assets/img/products/12.png';
import img4 from '../../../assets/img/products/6.png';
import img5 from '../../../assets/img/products/5.png';
import img6 from '../../../assets/img/products/7.png';

const otherpost = [
  {
    photo: img1,
    url: "/product-single",
    title: "Corn",
    price1: "19$",
    price2: "26$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-sale">
      20% Descuento
    </div>
  },
  {
    photo: img2,
    url: "/product-single",
    title: "Grapes",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
  },
  {
    photo: img3,
    url: "/product-single",
    title: "Brocoli",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
  },
  {
    photo: img4,
    url: "/product-single",
    title: "Oranges",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-featured">
      <i className="fa fa-star" />
      <span>Destacado</span>
    </div>
  },
  {
    photo: img5,
    url: "/product-single",
    title: "Watermelon",
    price1: "19$",
    price2: "22$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-sale">
      15% Off
    </div>
  },
  {
    photo: img6,
    url: "/product-single",
    title: "Ginger",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
  },
]
const closeIcon = (
  <div className="close-btn close-dark close" data-dismiss="modal">
    <span />
    <span />
  </div>
)
class Otherproduct extends Component {
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
    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    const { open } = this.state;
    return (
      <div className="section pt-0 andro_other-mentions">
        <div className="container">
          <div className="section-title flex-title">
            <h4 className="title">Other Mentions</h4>
            <div className="andro_arrows">
              <i className="fa fa-arrow-left slick-arrow slider-prev" />
              <i className="fa fa-arrow-right slick-arrow slider-next" />
            </div>
          </div>
          <Slider className="andro_other-mentions-slider" {...settings}>
          {otherpost.map((item, i) => (
            <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
              <div className="andro_product-thumb">
                <Link to={item.url}><img src={item.photo} alt="product" /></Link>
              </div>
              {item.badge}
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
            ))}
            <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                modal: 'andro_quick-view-modal p-0',
              }}>
                <Modalcontent />
              </Modal>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Otherproduct;