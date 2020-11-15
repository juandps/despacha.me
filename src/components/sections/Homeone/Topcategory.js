import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from 'react-bootstrap';
import Slider from 'react-slick';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// tab images
import fdimg1 from '../../../assets/img/products/4.png';
import fdimg2 from '../../../assets/img/products/5.png';
import fdimg3 from '../../../assets/img/products/6.png';
import fdimg4 from '../../../assets/img/products/7.png';
import fdimg5 from '../../../assets/img/products/8.png';

// Frutas tab loop
const Frutaspost = [
  {
    photo: fdimg1,
    url: "/product-single",
    title: "Cucumber",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-featured">
      <i className="fa fa-star" />
      <span>Destacado</span>
    </div>
  },
  {
    photo: fdimg2,
    url: "/product-single",
    title: "Watermelon",
    price1: "22$",
    price2: "29$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-sale">
      20% Descuento
  </div>
  },
  {
    photo: fdimg3,
    url: "/product-single",
    title: "Oranges",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },
  {
    photo: fdimg4,
    url: "/product-single",
    title: "Ginger",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },
  {
    photo: fdimg5,
    url: "/product-single",
    title: "Lettuce",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },
]
// Keta tab loop
const ketapost = [
  {
    photo: fdimg1,
    url: "/product-single",
    title: "Cucumber",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-featured">
      <i className="fa fa-star" />
      <span>Destacado</span>
    </div>
  },

  {
    photo: fdimg5,
    url: "/product-single",
    title: "Lettuce",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },
  {
    photo: fdimg3,
    url: "/product-single",
    title: "Oranges",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },
  {
    photo: fdimg4,
    url: "/product-single",
    title: "Ginger",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },

  {
    photo: fdimg2,
    url: "/product-single",
    title: "Watermelon",
    price1: "22$",
    price2: "29$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-sale">
      20% Descuento
  </div>
  },
]
// Oils post
const oilspost = [
  {
    photo: fdimg1,
    url: "/product-single",
    title: "Cucumber",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-featured">
      <i className="fa fa-star" />
      <span>Destacado</span>
    </div>
  },

  {
    photo: fdimg4,
    url: "/product-single",
    title: "Ginger",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },

  {
    photo: fdimg3,
    url: "/product-single",
    title: "Oranges",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },
  {
    photo: fdimg2,
    url: "/product-single",
    title: "Watermelon",
    price1: "22$",
    price2: "29$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: <div className="andro_product-badge andro_badge-sale">
      20% Descuento
  </div>
  },

  {
    photo: fdimg5,
    url: "/product-single",
    title: "Lettuce",
    price1: "19$",
    btn1text: "Agregar al Carrito",
    btn2text: "Ver producto",
    badge: "",
  },

]
const closeIcon = (
  <div className="close-btn close-dark close" data-dismiss="modal">
    <span />
    <span />
  </div>
)
class Topcategory extends Component {
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
      arrows: true,
      dots: false,
      autoplay: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            autoplay: true,
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
    };
    const { open } = this.state;
    return (
      <div className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Tab.Container defaultActiveKey="Frutas">
                <div className="section-title flex-title">
                  <h4 className="title">Top Picks</h4>
                  <Nav variant="tab">
                    <Nav.Item>
                      <Nav.Link eventKey="Frutas">Frutas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="keta">Keta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="oils">Oils</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {/* Tabs Start */}
                <Tab.Content>
                  <Tab.Pane eventKey="Frutas">
                    <Slider className="andro_grid-slider" {...settings}>
                      {Frutaspost.map((item, i) => (
                        <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
                          {item.badge}
                          <div className="andro_product-thumb">
                            <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                          </div>
                          <div className="andro_product-body">
                            <h6 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h6>
                            <div className="andro_product-price">
                              <span>{item.price1}</span>
                              <span>{item.price2}</span>
                            </div>
                           
                          </div>
                          <div className="andro_product-footer">
                            <div className="andro_product-buttons">
                              <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                              <Link to="#" className="andro_btn-custom light" onClick={this.onOpenModal}>{item.btn2text}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="keta">
                    <Slider className="andro_grid-slider" {...settings}>
                      {ketapost.map((item, i) => (
                        <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
                          {item.badge}
                          <div className="andro_product-thumb">
                            <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                          </div>
                          <div className="andro_product-body">
                            <h6 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h6>
                            <div className="andro_product-price">
                              <span>{item.price1}</span>
                              <span>{item.price2}</span>
                            </div>
                            
                          </div>
                          <div className="andro_product-footer">
                            <div className="andro_product-buttons">
                              <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                              <Link to="#" className="andro_btn-custom light" onClick={this.onOpenModal}>{item.btn2text}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="oils">
                    <Slider className="andro_grid-slider" {...settings}>
                      {oilspost.map((item, i) => (
                        <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
                          {item.badge}
                          <div className="andro_product-thumb">
                            <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                          </div>
                          <div className="andro_product-body">
                            <h6 className="andro_product-title"> <Link to={item.url}> {item.title} </Link> </h6>
                            <div className="andro_product-price">
                              <span>{item.price1}</span>
                              <span>{item.price2}</span>
                            </div>
                           
                          </div>
                          <div className="andro_product-footer">
                            <div className="andro_product-buttons">
                              <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                              <Link to="#" className="andro_btn-custom light" onClick={this.onOpenModal}>{item.btn2text}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              {/* Tabs End */}
              <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                modal: 'andro_quick-view-modal p-0',
              }}>
                <Modalcontent />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topcategory;