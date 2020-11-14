import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// Product image
import image1 from '../../../assets/img/products/2.png';
import image2 from '../../../assets/img/products/4.png';
import image3 from '../../../assets/img/products/5.png';
import image4 from '../../../assets/img/products/14.png';
import image5 from '../../../assets/img/products/8.png';
import image6 from '../../../assets/img/products/7.png';

// product loop
const featureproduct = [
  {
    photo: image1,
    producturl: "/product-single",
    productname: "Kiwi & Strawberry",
    urltext: "Buy Now",
    stars: "4 Stars",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    price1: "19$",
    price2: "29$",
  },
  {
    photo: image2,
    producturl: "/product-single",
    productname: "Cucumbers",
    urltext: "Buy Now",
    stars: "3 Stars",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    price1: "19$",
  },
  {
    photo: image3,
    producturl: "/product-single",
    productname: "Watermelons",
    urltext: "Buy Now",
    stars: "5 Stars",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    price1: "8$",
    price2: "15$",
  },
  {
    photo: image4,
    producturl: "/product-single",
    productname: "Grapes",
    urltext: "Buy Now",
    stars: "3 Stars",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    price1: "12$",
  },
  {
    photo: image5,
    producturl: "/product-single",
    productname: "Lettuce",
    urltext: "Buy Now",
    stars: "5 Stars",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    price1: "19$",
  },
  {
    photo: image6,
    producturl: "/product-single",
    productname: "Ginger",
    urltext: "Buy Now",
    stars: "5 Stars",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    price1: "8$",
    price2: "15$",
  },
]
const closeIcon = (
  <div className="close-btn close-dark close" data-dismiss="modal">
    <span />
    <span />
  </div>
)
class Featureproduct extends Component {
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
    const { open } = this.state;
    return (
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="row">
            {featureproduct.map((item, i) => (
              <div key={i} className="col-lg-6">
                {/* Product Start */}
                <div className="andro_product andro_product-list">
                  <div className="andro_product-thumb">
                    <Link to={item.producturl}><img src={item.photo} alt="product" /></Link>
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
                    <h5 className="andro_product-title"> <Link to={item.producturl}> {item.productname} </Link> </h5>
                    <p>{item.para}</p>
                    <div className="andro_product-footer">
                      <div className="andro_product-price">
                        <span>{item.price1}</span>
                        <span>{item.price2}</span>
                      </div>
                      <Dropdown className="btn-group">
                        <Link to={item.producturl} className="andro_btn-custom btn-sm">{item.urltext}</Link>

                        <Dropdown.Toggle variant="success" className="andro_btn-custom dropdown-toggle dropdown-toggle-split btn-sm"></Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#" onClick={this.onOpenModal}><i className="fa fa-eye" /> Quick View</Dropdown.Item>
                          <Dropdown.Item href="#"><i className="fa fa-sync" /> Compare</Dropdown.Item>
                          <Dropdown.Item href="#"><i className="fa fa-heart" /> Add To Wishlist</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                {/* Product End */}
              </div>
            ))}
            <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
              modal: 'andro_quick-view-modal p-0',
            }}>
              <Modalcontent />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Featureproduct;