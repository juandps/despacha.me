import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import sideimg1 from '../../../assets/img/products/1.png';
import sideimg2 from '../../../assets/img/products/14.png';
import loginimg  from '../../../assets/img/auth.jpg';

class Registertext extends Component {
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
                                <h2>¡Bienvenido!</h2>
                                <p>Somos Distribuidora Despchame S.A.S Con nosotros tendrás calidad, precio y rapidez.</p>
                            </div>
                        </div>
                        <div className="andro_auth-form">
                            <h2>Crear Cuenta</h2>
                            <form method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Usuario" name="Usuario" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-light" placeholder="Correo" name="email" />
                                </div>
                                <div className="form-group">
                                    <input type="Contraseña" className="form-control" placeholder="Contraseña" name="Contraseña" />
                                </div>
                                <button type="submit" className="andro_btn-custom primary">Crear Cuenta</button>
                                <div className="andro_auth-seperator">
                                    <span>OR</span>
                                </div>
                                <div className="andro_social-login">
                                    <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continuar con facebook </button>
                                    <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continuar con Google</button>
                                </div>
                                <p>¿Ya tienes cuenta? <Link to="/login">Ingresa aquí</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Registertext;