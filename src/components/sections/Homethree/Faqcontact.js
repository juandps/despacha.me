import React, { Component } from 'react';
import { Card, Accordion } from 'react-bootstrap'

class Faqcontact extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-lg-30">
                            <div className="section-title">
                                <h4 className="title">FAQ</h4>
                            </div>
                            <Accordion className="with-gap" defaultActiveKey="0">
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="0">
                                        <Card.Body>
                                            Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        What is Organista?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="1">
                                        <Card.Body>
                                            Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Getting Started with Organista
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="2">
                                        <Card.Body>
                                            Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Do i have the latest version?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="3">
                                        <Card.Body>
                                            Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        How many times can I use Organista?
                                    </Accordion.Toggle>
                                </Card>
                                <Card>
                                    <Accordion.Collapse className="collapseparent" eventKey="4">
                                        <Card.Body>
                                            Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        How to migrate my website?
                                    </Accordion.Toggle>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h4 className="title">Contact Us</h4>
                            </div>
                            <form method="post">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="First Name" className="form-control" name="fname" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Last Name" className="form-control" name="lname" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" placeholder="Email Address" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" placeholder="Subject" className="form-control" name="subject" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="message" className="form-control" placeholder="Type your message" rows={8} />
                                    </div>
                                </div>
                                <button type="submit" className="andro_btn-custom primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faqcontact;