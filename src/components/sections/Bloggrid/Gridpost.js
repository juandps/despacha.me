import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../layouts/Pagination'

import blogimg1 from '../../../assets/img/blog/1.jpg';
import blogimg2 from '../../../assets/img/blog/2.jpg';
import blogimg3 from '../../../assets/img/blog/3.jpg';
import blogimg4 from '../../../assets/img/blog/4.jpg';
import blogimg5 from '../../../assets/img/blog/5.jpg';
import blogimg6 from '../../../assets/img/blog/6.jpg';
import blogimg7 from '../../../assets/img/blog/7.jpg';
import blogimg8 from '../../../assets/img/blog/8.jpg';
import blogimg9 from '../../../assets/img/blog/9.jpg';


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
    {
        photo: blogimg6,
        title: "Into the Blueberry Season",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg7,
        title: "Picking Grapes Tips",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg8,
        title: "Mixed Lemon Breeds",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
    {
        photo: blogimg9,
        title: "Freshly Picked Organics",
        para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate: "May 20, 2021",
        urltext: "Read More",
        url: "/blog-single",
    },
]

class Gridpost extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        {blogpost.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <article className="andro_post">
                                    <div className="andro_post-thumb">
                                        <Link to={item.url}>
                                            <img src={item.photo} alt="post" />
                                        </Link>
                                    </div>
                                    <div className="andro_post-body">
                                        <div className="andro_post-categories">
                                            <Link to="#">Food</Link>
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
                            </div>
                        ))}
                    </div>
                    {/* Pagination Start */}
                    <Pagination />
                    {/* Pagination End */}
                </div>
            </div>

        );
    }
}

export default Gridpost;