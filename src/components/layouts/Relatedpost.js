import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import blogimg1 from '../../assets/img/blog/1.jpg';
import blogimg2 from '../../assets/img/blog/2.jpg';
import blogimg3 from '../../assets/img/blog/3.jpg';
import blogimg4 from '../../assets/img/blog/4.jpg';
import blogimg5 from '../../assets/img/blog/5.jpg';

const blogpost = [
    {
        photo: blogimg1,
        title: "Difference Is In the Soil",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg2,
        title: "Planting Season Begins",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg3,
        title: "Freshly Picked Organics",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg4,
        title: "Make The Perfect Basket",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg5,
        title: "Avocado Tips & Tricks",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
]

class Relatedpost extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
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
            <div className="section pt-0 andro_related-posts">
                <div className="container">
                    <div className="section-title flex-title">
                        <h4 className="title">Related Posts</h4>
                        <div className="andro_arrows">
                            <i className="fa fa-arrow-left slick-arrow slider-prev" />
                            <i className="fa fa-arrow-right slick-arrow slider-next" />
                        </div>
                    </div>
                    <Slider className="andro_related-posts-slider" {...settings}>
                        {/* Article Start */}
                        {blogpost.map((item, i) => (
                            <article key={i} className="andro_post">
                                <div className="andro_post-thumb">
                                    <Link to={item.url}>
                                        <img src={item.photo} alt="post" />
                                    </Link>
                                </div>
                                <div className="andro_post-body">
                                    <div className="andro_post-categories">
                                        <Link to="#">Frutas</Link>
                                        <Link to="#">Veg</Link>
                                    </div>
                                    <div className="andro_post-desc">
                                        <h5> <Link to={item.url}>{item.title}</Link> </h5>
                                        <span> <span className="fw-600">Posted On</span> <Link to={item.url} className="andro_post-date">{item.postdate}</Link> </span>
                                        <p>{item.para}</p>
                                    </div>
                                    <Link className="andro_btn-custom btn-block" to={item.url}> {item.urltext} </Link>
                                </div>
                            </article>
                        ))}
                        {/* Article End */}
                    </Slider>
                </div>
            </div>

        );
    }
}

export default Relatedpost;