import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import people1 from '../../../assets/img/people/1.jpg'
import people2 from '../../../assets/img/people/2.jpg'

class Commentform extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="section-title">
                        <h4 className="title">Leave a Comment</h4>
                    </div>
                    <div className="comment-form">
                        <form method="post">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <textarea className="form-control" placeholder="Type your comment..." name="comment" rows={7} />
                                </div>
                                <div className="col-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="consentCheck" />
                                        <label className="custom-control-label" htmlFor="consentCheck">I Agree to the terms and conditions of sending comments</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="andro_btn-custom primary">Post Review</button>
                        </form>
                    </div>
                    <div className="comments-list">
                        <ul>
                            <li className="comment-item">
                                <img src={people1} alt="comment author" />
                                <div className="comment-body">
                                    <h5>John Doe</h5>
                                    <span>Posted on: January 13 2020</span>
                                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                    <Link to="#" className="reply-link"> Reply </Link>
                                </div>
                            </li>
                            <li className="comment-item">
                                <img src={people2} alt="comment author" />
                                <div className="comment-body">
                                    <h5>John Doe</h5>
                                    <span>Posted on: January 13 2020</span>
                                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches</p>
                                    <Link to="#" className="reply-link"> Reply </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Commentform;