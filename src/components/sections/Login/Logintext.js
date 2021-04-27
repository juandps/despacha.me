import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as request from 'superagent';

import sideimg1 from '../../../assets/img/products/1.png';
import sideimg2 from '../../../assets/img/products/14.png';
import loginimg  from '../../../assets/img/auth.jpg';


class Logintext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            mailRe: '',
        }
    }
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
                        <div className="andro_auth-form" id="loginBueno">
                            <h2>Ingresar</h2>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Correo" name="Usuario" onChange={this.email.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Contraseña" name="Contraseña" onChange={this.password.bind(this)}/>
                                    <small style={{color: 'red', marginTop: '20px'}} id="lleneTodo" hidden>Ingrese todos los campos.</small>
                                </div>
                                <Link to="#" onClick={this.olvide.bind(this)}>¿Te olvidaste la contraseña?</Link>
                                <button type="button" className="andro_btn-custom primary" id="ingresarC" onClick={this.login.bind(this)}>Ingresar</button>
                                {/*<div className="andro_auth-seperator">
                                    <span>o</span>
                                </div>
                                <div className="andro_social-login">
                                    <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continuar con facebook</button>
                                    <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continuar con Google</button>
                                </div>*/}
                                <p>¿No tienes cuenta aún? <Link to="/register">Crear cuenta</Link> </p>
                            </form>
                        </div>
                        <div id="recuperarC" style={{padding: '40px'}} hidden>
                            <h5>Ingrese el correo electrónico del que quiere recuperar su contraseña: </h5>
                            <div className="form-group">
                                <input type="mail" className="form-control" placeholder="Correo Electrónico" name="email" onChange={this.mailRe.bind(this)}/>
                            </div>
                            <button type="button" className="andro_btn-custom primary" id="recuperarPass" style={{margin: '0 auto', display: 'block'}} onClick={this.recuperarMail.bind(this)}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    mailRe(event) {
        this.setState({mailRe: event.target.value});
    }

    recuperarMail() {
        document.getElementById('recuperarPass').innerHTML = 'Espere un momento...';
        request
            .get('https://despacha-me.herokuapp.com/api/recuperar/' + this.state.mailRe)
            .set('Content-Type','aplication/json') 
            .then(res =>{
                console.log(res.body);
                document.getElementById('recuperarPass').innerHTML = 'Enviar';
                if (res.body.message) {
                    alert(res.body.message);
                    document.getElementById('recuperarC').setAttribute('hidden', '');
                    document.getElementById('loginBueno').removeAttribute('hidden');
                } else {
                    alert(res.body);
                }
            });
    }

    email(event) {
        this.setState({email: event.target.value});
    }

    password(event) {
        this.setState({password: event.target.value});
    }

    olvide() {
        document.getElementById('recuperarC').removeAttribute('hidden');
        document.getElementById('loginBueno').setAttribute('hidden', '');
    }

    login() {
        document.getElementById('ingresarC').innerHTML = "Espere un momento..."
        const objeto = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.email && this.state.password) {
            document.getElementById('lleneTodo').setAttribute('hidden', '');
            request
                .post('https://despacha-me.herokuapp.com/api/login')
                .send(objeto) 
                .then(res =>{
                    console.log(res.body);
                    if (res.body.token) {
                        document.getElementById('lleneTodo').setAttribute('hidden', '');
                        window.localStorage.setItem('token', res.body.token);
                        window.history.pushState(null, '', '/');
                        window.location.reload();
                    } else {
                        document.getElementById('lleneTodo').removeAttribute('hidden');
                        document.getElementById('lleneTodo').innerHTML = res.body;
                    }
                });
        } else {
            document.getElementById('lleneTodo').removeAttribute('hidden');
        }
    }
}

export default Logintext;