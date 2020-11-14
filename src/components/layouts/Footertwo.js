import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo-light.png';
import android from '../../assets/img/android.png';
import iosicon from '../../assets/img/ios.png';

class Footertwo extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer className="andro_footer andro_footer-dark">
                {/* Top Footer */}
                <div className="container">
                    <div className="andro_footer-top">
                        <div className="andro_footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        
                    </div>
                </div>
                {/* Middle Footer */}
                <div className="andro_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Información</h5>
                                <ul>
                                    <li> <Link to="/">Inicio</Link> </li>
                                    <li> <Link to="/blog-grid">Blog</Link> </li>
                                    <li> <Link to="/about">Nosotros</Link> </li>
                                    <li> <Link to="/shop-v1">Tienda</Link> </li>
                                    <li> <Link to="/contact">Contacto</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Categorías</h5>
                                <ul>
                                    <li> <Link to="#">Frutas</Link> </li>
                                    <li> <Link to="#">Verduras</Link> </li>
                                    <li> <Link to="#">Medicina</Link> </li>
                                    <li> <Link to="#">Flores</Link> </li>
                                    <li> <Link to="#">Casa</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Otros</h5>
                                <ul>
                                    <li> <Link to="/checkout">Checkout</Link> </li>
                                    <li> <Link to="/cart">Carrito</Link> </li>
                                    <li> <Link to="/product-single">Producto</Link> </li>
                                    <li> <Link to="/shop-v1">Tienda</Link> </li>
                                    <li> <Link to="/legal">Legal</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                                <h5 className="widget-title">Redes Sociales</h5>
                                <ul className="social-media">
                                    <li> <Link to="#" className="facebook"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="#" className="pinterest"> <i className="fab fa-pinterest-p" /> </Link> </li>
                                    <li> <Link to="#" className="google"> <i className="fab fa-google" /> </Link> </li>
                                    <li> <Link to="#" className="twitter"> <i className="fab fa-twitter" /> </Link> </li>
                                </ul>
                                <div className="andro_footer-offer">
                                    <p>¿Quieres recibir promos?</p>
                                    <Link to="/register" className="andro_btn-custom btn-sm shadow-none">Si quiero</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="andro_footer-bottom">
                    <div className="container">
                        <ul>
                            <li> <Link to="#">Política de Privacidad</Link> </li>
                            <li> <Link to="#">Devoluciones</Link> </li>
                            <li> <Link to="#">Datos</Link> </li>
                            <li> <Link to="#">Términos &amp; Condiciones</Link> </li>
                        </ul>
                        <div className="andro_footer-copyright">
                            <p> <Link to="#">Distriduidora Despachame S.A.S.</Link> Todos los derechos reservados. </p>
                            <Link to="#" className="andro_back-to-top" onClick={() => this.scrollToTop()}>Regresar arriba <i className="fas fa-chevron-up" /> </Link>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footertwo;