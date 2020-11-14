import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import img1 from '../../../assets/img/blog/2-lg.jpg';
import img2 from '../../../assets/img/blog/1-lg.jpg';
import img3 from '../../../assets/img/blog/2.jpg';
import img4 from '../../../assets/img/blog/3.jpg';

import authorimg1 from '../../../assets/img/people/4.jpg';

const facebooktip = (
    <Tooltip>
        Share on Facebook
    </Tooltip>
);
const twittertip = (
    <Tooltip>
        Share on Twitter
    </Tooltip>
);
const linkedintip = (
    <Tooltip>
        Share on Linkedin
    </Tooltip>
);
class Detailcontent extends Component {
    render() {
        return (
            <div className="section andro_post-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="entry-content">
                                <div className="andro_post-single-thumb">
                                    <img src={img1} alt="post" />
                                </div>
                                <h2>Planting Season Begins</h2>
                                <div className="andro_post-single-author">
                                    <img src={authorimg1} alt="author" />
                                    <div className="andro_post-single-author-content">
                                        <p>Jina Flock</p>
                                        <span>Posted on August 24, 2020</span>
                                    </div>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                                <h4>Newly Harvested Crop</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <Link to="#">Lorem Ipsum has been the industry's</Link> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                    to make a type specimen book.
                                </p>
                                <Link to={img2} className="gallery-thumb">
                                    <img src={img2} alt="post" />
                                </Link>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                                </p>
                                <blockquote>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </blockquote>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Link to={img3} className="gallery-thumb">
                                            <img src={img3} alt="post" />
                                        </Link>
                                    </div>
                                    <div className="col-md-6">
                                        <Link to={img4} className="gallery-thumb">
                                            <img src={img4} alt="post" />
                                        </Link>
                                    </div>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                    recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                            </div>
                            {/* Post Meta Start */}
                            <div className="andro_post-single-meta">
                                <div className="andro_post-single-meta-item">
                                    <h6>Tags</h6>
                                    <div className="tagcloud">
                                        <Link to="#">#Health</Link>
                                        <Link to="#">#Frutas</Link>
                                        <Link to="#">#Fiber</Link>
                                    </div>
                                </div>
                                <div className="andro_post-single-meta-item">
                                    <h6>Categories</h6>
                                    <div className="tagcloud">
                                        <Link to="#">Organic</Link>
                                        <Link to="#">Frutas</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Post Meta End */}
                            {/* Post Share Start */}
                            <div className="andro_post-share">
                                <ul className="andro_sm">
                                    <li>
                                        <OverlayTrigger placement="top" overlay={facebooktip}>
                                            <Link to="#"> <i className="fab fa-facebook-f" /> </Link>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="top" overlay={twittertip}>
                                            <Link to="#"> <i className="fab fa-twitter" /> </Link>
                                        </OverlayTrigger>
                                    </li>
                                    <li>
                                        <OverlayTrigger placement="top" overlay={linkedintip}>
                                            <Link to="#"> <i className="fab fa-linkedin-in" /> </Link>
                                        </OverlayTrigger>
                                    </li>
                                </ul>
                            </div>
                            {/* Post Share End */}
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Detailcontent;