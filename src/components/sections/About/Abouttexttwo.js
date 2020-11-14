import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import aboutimg from '../../../assets/img/about.jpg';

class Abouttexttwo extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-20 andro_single-img-wrapper">
                            <img src={aboutimg} alt="img" />
                            <div className="andro_dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h2 className="title">Serving <span className="custom-primary">Organic Crop</span> Since 1922</h2>
                                <p className="subtitle">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                                <p className="subtitle">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                                <ul className="andro_list">
                                    <li>Lorem Ipsum has been the industry's standard dummy text ever</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's standard dummy text ever</li>
                                    <li>Lorem Ipsum has been the industry's standard dummy</li>
                                </ul>
                                <Link to="/shop-v1" className="andro_btn-custom">Browse Our Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abouttexttwo;