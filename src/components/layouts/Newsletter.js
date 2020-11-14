import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
        <span />
        <span />
    </div>
)

class Newsletter extends Component {
    state = {
        open: true,
    };
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state;
        return (
            <Modal open={open} id="androNewsletterPopup" onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                modal: 'andro_newsletter-popup-modal p-0',
            }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <img src="assets/img/ig/3.jpg" alt="newsletter" />
                    </div>
                    <div className="modal-body">
                        <div className="andro_newsletter-popup-text-wrapper">
                            <h3>Join Our Newsletter</h3>
                            <p>Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere.</p>
                        </div>
                        <form method="post" className="text-center">
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" className="form-control" name="newsletter-email" />
                            </div>
                            <button type="submit" className="andro_btn-custom" name="button">Subscribe</button>
                            <span className="newsletter-popup-trigger" data-dismiss="modal" onClick={this.onCloseModal}>No Thanks</span>
                        </form>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Newsletter;