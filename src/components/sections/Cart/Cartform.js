import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { Redirect } from 'react-router-dom';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './cart.css';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import * as crypto from 'crypto-js';
import * as request from 'superagent';
import{ init } from 'emailjs-com';
import { send } from 'emailjs-com';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import relatedimg1 from '../../../assets/img/products/5.png';
import relatedimg2 from '../../../assets/img/products/14.png';
import relatedimg3 from '../../../assets/img/products/12.png';
import relatedimg4 from '../../../assets/img/products/6.png';

const stripePromise = loadStripe('pk_live_51HCx7zLMv7vO1k9CkjPNw2ewZnrhuVepgyWJeWuDUvgULUlR0WFBBQuC8Sx1kn4qI9pmv63nvpqdcfDiYgf3fmRE003ulsxDuJ');

const PagoForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    let direccion;
    let referencia;

    const dir = (event) => {
       direccion = event.target.value;
    }

    const ref = (event) => {
        referencia = event.target.value;
    }

    const state = {
        redirect2: false
    }

    const obtenerId = async () => {
        const total = parseFloat(document.getElementById('totalTotal').textContent.slice(0, -1)) * 100;
        console.log(total);
        document.getElementById('botonPaga2').innerHTML = 'Espere un momento...';
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        const pedido = {
            data: JSON.parse(window.localStorage.getItem('conectado')),
            pedido: JSON.parse(window.localStorage.getItem('lista')),
            direccion: direccion,
            descrip: referencia,
            total: document.getElementById('totalTotal').textContent.slice(0, -1)
        }

        if (!error) {
            await request
                    .post('https://despacha-me.herokuapp.com/api/pago2')
                    .send({id: paymentMethod.id, amount: total, pedido}) 
                    .then(res =>{
                        if (res.body.message) {
                            const parametros = (JSON.parse(res.body.parametros));
                            send('gmail', 'template_pxRoAu15', parametros)
                            .then(resTOS => {
                                console.log('Email successfully sent!');
                                alert(res.body.message);
                                window.localStorage.removeItem('lista');
                                props.cambiar('listo'); 
                            })
                            .catch(err =>{console.log(err);})
                        } else {
                            document.getElementById('botonPaga2').innerHTML="Pagar";
                            alert(res.body.error);
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                        alert(err);
                    });
        } else {
            alert(error.message);
            //document.getElementById('helpFaltanDatos1').innerHTML = error.message;
            document.getElementById('botonPaga2').innerHTML = 'Pagar';
        }
    }
    if(state.redirect2) {
        return <Redirect push to="/"/>
    } else {
        return  <div className="container" style={{marginTop: '20px'}}>
                    <div className="row andro_cart-form">
                        <div className="col-lg-6 col-12 andro_upsells">
                                <form style={{marginTop: '30px', padding: '20px', border: 'solid 1px gainsboro'}}> 
                                    <CardElement />
                                </form>
                        </div>
                        <div className="col-lg-6 col-12 andro_upsells">
                            <input className="inputTarjeta" placeholder="Dirección de entrega" id="dir" onChange={dir.bind(this)}/>
                            <input className="inputTarjeta" placeholder="Referencia" id="ref" onChange={ref.bind(this)}/>
                            <small id="helpFaltanDatos1" style={{color: 'red', marginTop: '20px', marginLeft: '20px'}} hidden>Ingrese todos los datos.</small>
                        </div>
                    </div>
                    <Link to="#" onClick={obtenerId.bind(this)} id="botonPaga2" className="andro_btn-custom primary btn-block" style={{marginTop: '30px'}}>Pagar</Link>
                </div>
    }
}

class Cartform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            paso: 0,
            tipo: '',
            direccion: '',
            referencia: '',
            redirect2: false
        }
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            usuario: ''
        };
        if (this.state.redirect) {
            return <Redirect push to="/login"/>
        }
        if(this.state.redirect2) {
            return <Redirect push to="/"/>
        }
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row andro_cart-form">
                        <div className="col-lg-6 andro_upsells" hidden>
                            <div className="section-title flex-title">
                                <h4 className="title">Upsells</h4>
                                <div className="andro_arrows">
                                    <i className="fa fa-arrow-left slick-arrow slider-prev" />
                                    <i className="fa fa-arrow-right slick-arrow slider-next" />
                                </div>
                            </div>
                            {/* Upsells Start
                            <Slider className="andro_upsells-slider" {...settings}>
                                {upsellslist.map((item, i) => (
                                    <div key={i} className="andro_product andro_product-list andro_product-has-controls andro_product-has-buttons">
                                        <div className="andro_product-thumb">
                                            <Link to={item.url}><img src={item.photo} alt="product" /></Link>
                                        </div>
                                        <div className="andro_product-body">
                                            
                                            <h5 className="andro_product-title"> <Link to={item.url}> {item.name} </Link> </h5>
                                            <div className="andro_product-price">
                                                <span>{item.price1}</span>
                                                <span>{item.price2}</span>
                                            </div>
                                            <p>{item.para}</p>
                                        </div>
                                        <div className="andro_product-footer">
                                            <div className="andro_product-buttons">
                                                <Link to="#" className="andro_btn-custom primary">{item.btn1text}</Link>
                                                <Link to="#" className="andro_btn-custom light">{item.btn2text}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                             Upsells End */}
                        </div>
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4 className="title">Total del carrito</h4>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>{this.props.precio.toFixed(2)}$</td>
                                    </tr>
                                    <tr>
                                        <th>Descuento</th>
                                        <td>{(this.props.descuento.toFixed(2) * this.props.precio).toFixed(2)}$</td>
                                    </tr>
                                    <tr>
                                        <th>Envío</th>
                                        <td> 2.00$ {/*<span className="small">(11%)</span>*/} </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td> <b id="totalTotal">{((this.props.precio + 2).toFixed(2)-(this.props.descuento.toFixed(2) * this.props.precio)).toFixed(2)}$</b> </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div id="tipoPago" style={{marginBottom: '30px'}} hidden>
                                <div className="section-title">
                                    <h4 className="title">Tipo de pago</h4>
                                </div>
                                <div className="container">
                                        <div className="row andro_cart-form" style={{textAlign: 'center', color: '#2E2D52'}}>
                                            <div className="col-lg-6 col-12 andro_upsells">
                                                <h5 className="title tipoPago" onClick={this.tipoTar.bind(this)}><i class="far fa-credit-card" style={{marginRight: '10px'}}></i>Tarjeta de crédito</h5>
                                            </div>
                                            <div className="col-lg-6 col-12 andro_upsells">
                                                <h5 className="title tipoPago" onClick={this.tipoTrans.bind(this)}><i class="fas fa-money-bill-wave" style={{marginRight: '10px'}}></i>Transferencia bancaria</h5>
                                            </div>
                                        </div>
                                    </div> 
                            </div>
                            <div id="tarjeta" style={{marginTop: '20px', marginBottom: '40px'}} hidden>
                                <div className="section-title">
                                    <h4 className="title">Tarjeta de crédito</h4>
                                </div>
                                <Elements stripe={stripePromise}>
                                    <PagoForm cambiar={this.cambio.bind(this)}/>
                                </Elements>
                                {/*<div className="container" style={{marginTop: '20px'}}>
                                    <div className="row andro_cart-form">
                                        <div className="col-lg-6 col-12 andro_upsells">
                                            <div id="PaymentForm">
                                                <Cards
                                                cvc={this.state.cvc}
                                                expiry={this.state.expiry}
                                                focused={this.state.focus}
                                                name={this.state.name}
                                                number={this.state.number}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 andro_upsells">
                                            <form>
                                                <input
                                                type="tel"
                                                name="number"
                                                placeholder="Número de la tarjeta"
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                                className="inputTarjeta"
                                                />
                                                <input
                                                type="text"
                                                name="name"
                                                placeholder="Nombre del propetario de la tarjeta"
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                                className="inputTarjeta"
                                                />
                                                <input
                                                type="text"
                                                name="expiry"
                                                placeholder="Fecha de expiración"
                                                onKeyUp={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                                className="inputTarjeta2"
                                                maxLength="5"
                                                />
                                                <input
                                                type="number"
                                                name="cvc"
                                                placeholder="CVC"
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                                className="inputTarjeta2"
                                                />
                                                <input className="inputTarjeta" placeholder="Dirección de entrega" id="dir" onChange={this.dir.bind(this)}/>
                                                <input className="inputTarjeta" placeholder="Referencia" id="ref" onChange={this.ref.bind(this)}/>
                                                <small id="helpFaltanDatos" style={{color: 'red', marginTop: '20px', marginLeft: '20px'}} hidden>Ingrese todos los datos.</small>
                                            </form>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                            <div id="transferencia" hidden>
                                <div className="section-title">
                                    <h4 className="title">Transferencia bancaria</h4>
                                </div>
                                <div className="container" style={{marginTop: '20px'}}>
                                    <div className="row andro_cart-form">
                                        <div className="col-lg-6 col-12 andro_upsells">
                                            <h6 style={{color: '#2E2D52', marginBottom: '50px', marginLeft: '30px'}}>
                                                1. Llene los campos de dirección y Referencia.<br></br>
                                                2. Seleccione “Pagar”.<br></br>
                                                3. Los datos de transferencia le llegarán a su WhatsApp.<br></br>
                                                4. Respoda el mensaje de WhatsApp con el comprobante de deposito.<br></br>
                                                5. ¡Su pedido será <strong>Despachado!</strong>.<br></br>
                                            </h6>
                                        </div>
                                        <div className="col-lg-6 col-12 andro_upsells">
                                            <input className="inputTarjeta" placeholder="Dirección de entrega" id="dir2" onChange={this.dir.bind(this)}/>
                                            <input className="inputTarjeta" placeholder="Referencia" id="ref2" onChange={this.ref.bind(this)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="#" id="botonPagar" onClick={this.pagarInicio.bind(this)} className="andro_btn-custom primary btn-block">Pagar</Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'expiry') {
            const codigo = e.which || e.keyCode;
            if (codigo === 8) {
                e.target.value = '';
            }
            if (value.length === 2) {
                e.target.value = value + '/';
            }
            this.setState({ [name]: value });
        } else {
            this.setState({ [name]: value });
        }
    }

    cambio(cambio) {
        if (cambio === 'listo') {
            this.setState({redirect2: true});
        }
    }

    tipoTar() {
        document.getElementById('tarjeta').removeAttribute('hidden');
        document.getElementById('transferencia').setAttribute('hidden', '');
        document.getElementById('botonPagar').setAttribute('hidden', '');
        this.state.paso = 2;
        this.state.tipo = 'tarjeta';
    }

    tipoTrans() {
        document.getElementById('tarjeta').setAttribute('hidden', '');
        document.getElementById('transferencia').removeAttribute('hidden');
        document.getElementById('botonPagar').removeAttribute('hidden');
        this.state.paso = 2;
        this.state.tipo = 'transferencia';
    }

    dir(event) {
        this.setState({direccion: event.target.value});
    }

    ref(event) {
        this.setState({referencia: event.target.value});
    }

    pagarInicio() {
        if (window.localStorage.getItem('token')) {
            if (window.localStorage.getItem('precioFinal') < 20) {
                alert('El valor del pedido debe ser mayor a $20');
            } else {
                document.getElementById('tipoPago').removeAttribute('hidden');
                if (this.state.paso === 2) {
                    if (this.state.tipo === 'tarjeta') {
                        if (this.state.direccion && this.state.referencia) {
                            /*document.getElementById('helpFaltanDatos').setAttribute('hidden', '');
                            Datos tarjeta y codificar
                            const mes = this.state.expiry.charAt(0) + this.state.expiry.charAt(1);
                            const anio = this.state.expiry.charAt(3) + this.state.expiry.charAt(4);
                            const datos = {
                                cardNumber: this.state.number,
                                expirationMonth: mes,
                                expirationYear: anio,
                                holderName: this.state.name.toUpperCase(),
                                securityCode: this.state.cvc
                            }
                            const key = crypto.enc.Utf8.parse('adf36d46c58344129ffae86f1ed197c3');
                            const iv = crypto.enc.Utf8.parse(''); 
                            const encrypted = crypto.AES.encrypt(JSON.stringify(datos), key,{ iv: iv });

                            const codificado = encrypted.ciphertext.toString(crypto.enc.Base64);
                            
                            // contruccion del objeto
                            const object = {
                                pedido: {
                                    data: JSON.parse(window.localStorage.getItem('conectado')),
                                    pedido: JSON.parse(window.localStorage.getItem('lista')),
                                    direccion: this.state.direccion,
                                    descrip: this.state.referencia,
                                    total: (parseFloat(window.localStorage.getItem('precioFinal')) + 2 -(this.props.descuento.toFixed(2) * this.props.precio)).toFixed(2)
                                },
                                tarjeta: {
                                    codificado: codificado,
                                    cedula: JSON.parse(window.localStorage.getItem('conectado')).cedula,
                                    total: ((parseFloat(window.localStorage.getItem('precioFinal')) + 2 -(this.props.descuento.toFixed(2) * this.props.precio)).toFixed(2) * 100),
                                    email: JSON.parse(window.localStorage.getItem('conectado')).email
                                }
                            }
                            request
                                .post('https://despacha-me.herokuapp.com/api/pago')
                                .send(object) 
                                .then(res =>{
                                    console.log(res.body);
                                    if (res.body.message) {
                                        const parametros = (JSON.parse(res.body.parametros));
                                        send('gmail', 'template_pxRoAu15', parametros)
                                        .then(resTOS => {
                                            console.log('Email successfully sent!');
                                            alert(res.body.message);
                                            window.localStorage.removeItem('lista');
                                            this.setState({redirect2: true});
                                        })
                                        .catch(err =>{console.log(err);})
                                    } else {
                                        document.getElementById('botonPagar').innerHTML="Pagar";
                                        alert(res.body.error);
                                    }
                                })
                                .catch(err =>{
                                    console.log(err);
                                    alert(err);
                                })*/
                        } else {
                            document.getElementById('helpFaltanDatos').removeAttribute('hidden');
                            document.getElementById('botonPagar').innerHTML = "Pagar"
                        }
                    } else if (this.state.tipo === 'transferencia') {
                        document.getElementById('botonPagar').innerHTML="Espere un momento..."
                        const object = {
                            pedido: {
                                data: JSON.parse(window.localStorage.getItem('conectado')),
                                pedido: JSON.parse(window.localStorage.getItem('lista')),
                                direccion: this.state.direccion,
                                descrip: this.state.referencia,
                                total: (parseFloat(window.localStorage.getItem('precioFinal')) + 2 -(this.props.descuento.toFixed(2) * this.props.precio)).toFixed(2)
                            }
                        }
                        console.log(object);
                        request
                            .post('https://despacha-me.herokuapp.com/api/transferencia')
                            .send(object) 
                            .then(res =>{
                                console.log(res.body);
                                if (res.body.message) {
                                    const parametros = (JSON.parse(res.body.parametros));
                                    send('gmail', 'tranferencia', parametros)
                                    .then(resTOSP => {
                                        console.log('Email successfully sent!');
                                        alert(res.body.message);
                                        window.localStorage.removeItem('lista');
                                        this.setState({redirect2: true});
                                    })
                                    .catch(err =>{console.log(err);})
                                } else {
                                    document.getElementById('botonPagar').innerHTML="Pagar";
                                    alert(res.body.error);
                                }
                            })
                            .catch(err =>{
                                console.log(err);
                                alert(err);
                            });
                    }
                } else if(this.state.paso === 1) {
                    alert('Seleccione un tipo de pago')
                }
            }
        } else {
            this.setState({redirect: true});
        }
    }

    componentDidMount() {
        init("user_qDFrBtNzAqkCUHVvMU9zn");
        if (window.localStorage.getItem('conectado')) {
            const usuario = JSON.parse(window.localStorage.getItem('conectado'));
            if (usuario.metodos) {
                document.getElementById('dir2').setAttribute('value', usuario.metodos[0].direc);
                document.getElementById('ref2').setAttribute('value', usuario.metodos[0].desc);
                this.setState({direccion: usuario.metodos[0].direc});
                this.setState({referencia: usuario.metodos[0].desc});
            }
        }
    }
}

export default Cartform;