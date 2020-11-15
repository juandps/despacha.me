import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import cta1 from '../../../assets/img/cta/3.jpg';
import cta2 from '../../../assets/img/cta/4.jpg';
import cta3 from '../../../assets/img/cta/5.jpg';

class Ctamasonary extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="andro_cta">
                                <img src={cta1} alt="cta" />
                                <div className="andro_cta-content">
                                    <h4 className="text-white">Get Your <span className="fw-400">Lemons</span> </h4>
                                    <p className="text-white">Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.</p>
                                    <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="andro_cta">
                                <img src={cta2} alt="cta" />
                                <div className="andro_cta-content">
                                    <h4 className="text-white">Freshly Picked <span className="fw-400">Vegetables</span> </h4>
                                    <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Comprar Ahora</Link>
                                </div>
                            </div>
                            <div className="andro_cta">
                                <img src={cta3} alt="cta" />
                                <div className="andro_cta-content">
                                    <h4 className="text-white">Freshly Picked <span className="fw-400">Fruits</span> </h4>
                                    <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ctamasonary;