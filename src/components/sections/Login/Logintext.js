import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import sideimg1 from '../../../assets/img/products/1.png';
import sideimg2 from '../../../assets/img/products/14.png';
import loginimg  from '../../../assets/img/auth.jpg';


class Logintext extends Component {
    render() {
        return (
            <div className="section">
                <div className="imgs-wrapper">
                    <img src={sideimg1} alt="veg" className="d-none d-lg-block" />
                    <img src={sideimg2} alt="veg" className="d-none d-lg-block" />
                </div>
                <div className="container">
                    <div className="andro_auth-wrapper">
                        <div className="andro_auth-description bg-cover bg-center dark-overlay dark-overlay-2" style={{backgroundImage: "url("+ loginimg +")"}}>
                            <div className="andro_auth-description-inner">
                                <i className="flaticon-diet" />
                                <h2>Welcome Back!</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="andro_auth-form">
                            <h2>Log in</h2>
                            <form method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" name="username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" name="password" />
                                </div>
                                <Link to="#">Forgot Password?</Link>
                                <button type="submit" className="andro_btn-custom primary">Login</button>
                                <div className="andro_auth-seperator">
                                    <span>OR</span>
                                </div>
                                <div className="andro_social-login">
                                    <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                                    <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continue with Google</button>
                                </div>
                                <p>Don't have an account? <Link to="/register">Create One</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Logintext;