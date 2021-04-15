import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2';
import * as request from 'superagent';

import 'react-phone-input-2/lib/style.css';
import sideimg1 from '../../../assets/img/products/1.png';
import sideimg2 from '../../../assets/img/products/14.png';
import loginimg  from '../../../assets/img/auth.jpg';

class Registertext extends Component {
    constructor(props){
        super(props)

        this.state = {
            numero: '',
            email: '',
            nombre: '',
            password: '',
            cedula: '',
            transId: '',
            codigo: ''
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
                                <h2>¡Bienvenido!</h2>
                                <p>Somos Distribuidora Despchame S.A.S Con nosotros tendrás calidad, precio y rapidez.</p>
                            </div>
                        </div>
                        <div className="andro_auth-form">
                            <div id="crearCuenta">
                                <h2>Crear Cuenta</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Nombre y apellido" name="Usuario" onChange={this.nombre.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Cédula" name="cedula" onChange={this.cedula.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <PhoneInput
                                            country={'ec'}
                                            value=''
                                            onChange={this.numero.bind(this)}
                                            inputStyle = {{width: '100%', height: '50px', borderRadius: '25px', border: 'none'}}
                                            buttonStyle = {{borderRadius: '25px', backgroundColor: 'white', border: 'none'}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-light" placeholder="Correo" onChange={this.email.bind(this)} name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña" name="Contraseña" onChange={this.password.bind(this)}/>
                                        <small style={{color: 'red', marginTop: '20px'}} id="lleneTodo" hidden>Ingrese todos los campos.</small>
                                    </div>
                                    <button type="button" className="andro_btn-custom primary" onClick={this.enviarCodigo.bind(this)}>Crear Cuenta</button>
                                    {/*<div className="andro_auth-seperator">
                                        <span>OR</span>
                                    </div>
                                    <div className="andro_social-login">
                                        <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continuar con facebook </button>
                                        <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continuar con Google</button>
                                    </div>*/}
                                    <p>¿Ya tienes cuenta? <Link to="/login">Ingresa aquí</Link></p>
                                </form>
                            </div>
                            <div id="codigoCuenta" hidden>
                                <h5>Se ha enviado un código a su whatsapp. Ingréselo en el siguiente campo: </h5>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="" name="codigo" onChange={this.codigo.bind(this)}/>
                                </div>
                                <button type="button" className="andro_btn-custom primary" onClick={this.crearNuevo.bind(this)}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    numero(event) {
        this.setState({numero: event});
    }

    nombre(event) {
        this.setState({nombre: event.target.value});
    }

    cedula(event) {
        this.setState({cedula: event.target.value});
    }

    email(event) {
        this.setState({email: event.target.value});
    }

    password(event) {
        this.setState({password: event.target.value});
    }

    codigo(event) {
        this.setState({codigo: event.target.value});
    }

    enviarCodigo() {
        if(this.state.numero && this.state.cedula && this.state.email && this.state.nombre && this.state.password) {
            document.getElementById('lleneTodo').setAttribute('hidden', '');
            document.getElementById('codigoCuenta').removeAttribute('hidden');
            document.getElementById('crearCuenta').setAttribute('hidden', '');
            request
                .get('https://despacha-me.herokuapp.com/api/transId')
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    console.log(res.body);
                    this.setState({transId: res.body.id});
                    request
                        .post('https://despacha-me.herokuapp.com/api/codigo')
                        .send({numero: this.state.numero}) 
                        .then(res =>{
                            console.log('Mensaje enviado')
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
        }else {
            document.getElementById('lleneTodo').removeAttribute('hidden');
        }
    }

    crearNuevo() {
        const objeto = {
            nombre: this.state.nombre,
            email: this.state.email,
            password: this.state.password,
            numero: this.state.numero,
            verificado: true
        }
        if (this.state.codigo.toString() === this.state.transId.toString()) {
            request
            .post('https://despacha-me.herokuapp.com/api/crearCuenta')
            .send(objeto) 
            .then(res =>{
                console.log(res.body);
                window.localStorage.setItem('token', res.body.token);
                window.history.pushState(null, '', '/');
                setTimeout(function() {window.location.reload()}, 2000);
            })
            .catch(err => {
                alert('Ocurrió un problema al crear la cuenta');
            });
        } else {
            alert('Los códigos no coinciden');
        }
    }
}

export default Registertext;