import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from 'react-bootstrap';

class Addinfo extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="andro_product-additional-info">
                        <div className="row">
                            <Tab.Container defaultActiveKey="description">
                                <div className="col-lg-4">
                                    <Nav variant="tab" className="andro_sticky-section">
                                        <Nav.Item>
                                            <Nav.Link eventKey="description">Description</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="add-info">Additional Information</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="reviews">Reviews (25)</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div className="col-lg-8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="description">
                                            <h4>Description</h4>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Frutas truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                                bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="add-info">
                                            <h4>Additional Information</h4>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Attributes</th>
                                                        <th scope="col">Values</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> <strong>Color</strong> </td>
                                                        <td>blue, red, yellow, green</td>
                                                    </tr>
                                                    <tr>
                                                        <td> <strong>Material</strong> </td>
                                                        <td>wood, plastic, stainless steel</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="reviews">
                                        <h4>Leave a Review</h4>
                                            <div className="andro_rating-wrapper">
                                                <div className="andro_rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <span>Your Review</span>
                                            </div>
                                            {/* Review Form start */}
                                            <div className="comment-form">
                                                <form method="post">
                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <input type="text" className="form-control" placeholder="Full Name" name="fname" defaultValue />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input type="email" className="form-control" placeholder="Email Address" name="email" defaultValue />
                                                        </div>
                                                        <div className="col-md-12 form-group">
                                                            <textarea className="form-control" placeholder="Type your comment..." name="comment" rows={7} defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="andro_btn-custom primary" name="button">Post Review</button>
                                                </form>
                                            </div>
                                            {/* Review Form End */}
                                            {/* Reviews Start */}
                                            <div className="comments-list">
                                                <ul>
                                                    <li className="comment-item">
                                                        <img src="assets/img/people/1.jpg" alt="comment author" />
                                                        <div className="comment-body">
                                                            <h5>John Doe</h5>
                                                            <div className="andro_rating">
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star" />
                                                            </div>
                                                            <span>Posted on: January 13 2020</span>
                                                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                                            <Link to="#" className="reply-link"> Reply </Link>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <img src="assets/img/people/2.jpg" alt="comment author" />
                                                        <div className="comment-body">
                                                            <h5>John Doe</h5>
                                                            <div className="andro_rating">
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                                <i className="fa fa-star active" />
                                                            </div>
                                                            <span>Posted on: January 13 2020</span>
                                                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches</p>
                                                            <Link to="#" className="reply-link"> Reply </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Reviews End */}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Addinfo;