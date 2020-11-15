import React, { Component } from 'react';

import testiimg1 from '../../../assets/img/people/1.jpg';
import testiimg2 from '../../../assets/img/people/2.jpg';
import testiimg3 from '../../../assets/img/people/3.jpg';

const testimonial = [
    {
        photo: testiimg1,
        title: "Perfect service",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        name: "John Mishlen",
        designation: "Executive CEO at company",
    },
    {
        photo: testiimg2,
        title: "Competitive prices",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        name: "Moe Sondi",
        designation: "Executive CEO at company",
    },
    {
        photo: testiimg3,
        title: "Great agents",
        para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        name: "Mandy Floss",
        designation: "Executive CEO at company",
    },
]

class Testimonials extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title">
                        <h4 className="title">What Are People Saying</h4>
                    </div>
                    <div className="row justify-content-center">
                        {testimonial.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="andro_testimonial">
                                    <div className="andro_testimonial-body">
                                        <h5>{item.title}</h5>
                                        
                                        <p>{item.para}</p>
                                    </div>
                                    <div className="andro_testimonial-author">
                                        <img src={item.photo} alt="testimonial" />
                                        <div className="andro_testimonial-author-inner">
                                            <h6>{item.name}</h6>
                                            <span>{item.designation}</span>
                                        </div>
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

export default Testimonials;