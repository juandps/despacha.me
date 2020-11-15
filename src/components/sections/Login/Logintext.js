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
                                <h2>¡Bienvenido de Vuelta!</h2>
                                <p>Es la única vez que tendrás que iniciar sesión.</p>
                            </div>
                        </div>
                        <div className="andro_auth-form">
                            <h2>Ingresar</h2>
                            <form method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Correo" name="username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Contraseña" name="password" />
                                </div>
                                <Link to="#">¿Te olvidaste la contraseña?</Link>
                                <button type="submit" className="andro_btn-custom primary">Ingresar</button>
                                <div className="andro_auth-seperator">
                                    <span>o</span>
                                </div>
                                <div className="andro_social-login">
                                    <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continuar con Facebook</button>
                                    <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continuar con Google</button>
                                </div>
                                <p>¿No tienes cuenta aún? <Link to="/register">Crear cuenta</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Logintext;