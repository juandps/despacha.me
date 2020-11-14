import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import blogimg1 from '../../../assets/img/blog/1.jpg';
import blogimg2 from '../../../assets/img/blog/2.jpg';
import blogimg3 from '../../../assets/img/blog/3.jpg';

const blogpost = [
    {
        photo:blogimg1,
        title:"Difference Is In the Soil",
        para:"Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate:"May 20, 2021",
        urltext:"Read More",
        url:"/blog-single",
    },
    {
        photo:blogimg2,
        title:"Planting Season Begins",
        para:"Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate:"May 20, 2021",
        urltext:"Read More",
        url:"/blog-single",
    },
    {
        photo:blogimg3,
        title:"Freshly Picked Organics",
        para:"Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        postdate:"May 20, 2021",
        urltext:"Read More",
        url:"/blog-single",
    },
]

class Blog extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title">
                        <h4 className="title">From Our Blog</h4>
                    </div>
                    {blogpost.map((item, i) => (
                    <article key={i} className="andro_post andro_post-list">
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
                            <Link className="andro_btn-custom" to={item.url}> {item.urltext} </Link>
                        </div>
                    </article>
                    ))}
                </div>
            </div>
        );
    }
}

export default Blog;