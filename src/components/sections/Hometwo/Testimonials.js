import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

import img1 from '../../../assets/img/people/4.jpg';
import img2 from '../../../assets/img/people/3.jpg';
import img3 from '../../../assets/img/people/2.jpg';

const testimonial = [
    {
        photo: img1,
        name: "Jina Flock",
        designation: "Farmer",
        para: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    },
    {
        photo: img2,
        name: "Miranda Blue",
        designation: "Chemist",
        para: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    },
    {
        photo: img3,
        name: "Feleciti Rolling",
        designation: "Farmer",
        para: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    },
]
class Testimonials extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
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
            <div className="sidebar">
                {/* Testimonials Start */}
                <div className="sidebar-widget">
                    <div className="section-title">
                        <h4 className="title">Testomonials</h4>
                    </div>
                    <Slider className="andro_testimonials" {...settings}>
                        {testimonial.map((item, i) => (
                            <div key={i} className="andro_testimonial-item">
                                <div className="andro_testimonials-inner">
                                    <img src={item.photo} alt="author" />
                                    <h5>{item.name}</h5>
                                    <span>{item.designation}</span>
                                    <p>{item.para}</p>
                                </div>
                                <ul className="andro_sm">
                                    <li> <a href="https://www.facebook.com/despacha.me"> <i className="fab fa-facebook-f"/> </a>  </li>
                                    <li> <Link to="https://twitter.com/despacha_me"> <i className="fab fa-twitter" /> </Link> </li>
                                    <li> <Link to="https://wa.link/advqv4"> <i className="fab fa-whatsapp" /> </Link> </li>
                                    <li> <Link to="https://www.instagram.com/despacha.me/"> <i className="fab fa-instagram" /> </Link> </li>
                                </ul>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Testimonials End */}
                {/* Image Start */}
                <div className="sidebar-widget d-none d-lg-block">
                    <div className="andro_auth-mini">
                        <h5>Login</h5>
                        <p>Get crazy benefits today by joining our community</p>
                        <form method="post">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Usuario" name="Usuario" />
                            </div>
                            <div className="form-group">
                                <input type="Contraseña" className="form-control" placeholder="Contraseña" name="Contraseña" />
                            </div>
                            <div className="form-group text-center">
                                <Link to="#">Forgot Contraseña?</Link>
                            </div>
                            <button type="submit" className="andro_btn-custom primary btn-block">Login</button>
                            <div className="andro_auth-seperator">
                                <span>OR</span>
                            </div>
                            <div className="andro_social-login">
                                <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continuar con facebook </button>
                                <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continuar con Google</button>
                            </div>
                            <p className="mb-0 text-center">Don't have an account? <Link to="/register">Create One</Link> </p>
                        </form>
                    </div>
                </div>
                {/* Image End */}
            </div>

        );
    }
}

export default Testimonials;