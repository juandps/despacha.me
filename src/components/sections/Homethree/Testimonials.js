import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Clients from './Clients';
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
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-lg-30">
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
                                            <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                                            <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                                            <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                                            <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                                        </ul>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="col-lg-4">
                            <Clients />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;