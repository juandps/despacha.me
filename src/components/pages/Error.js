import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Headertwo from '../layouts/Headertwo';
import Footer from '../layouts/Footer';

import errorimg from '../../assets/img/404.jpg';

class Error extends Component {
    render() {
        return (
            <div>
                <Headertwo />
                <div className="section">
                    <div className="container">
                        <div className="andro_404-container">
                            <img src={errorimg} alt="" />
                            <h1>Page Not Found</h1>
                            <p>The page you are trying to access could not be found. Please try looking for something else</p>
                            <Link to="/" className="andro_btn-custom light">Go To Home Page</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Error;