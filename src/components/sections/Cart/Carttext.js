import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cartform from '../../sections/Cart/Cartform';

import cartimg1 from '../../../assets/img/products/1.png';
import cartimg2 from '../../../assets/img/products/5.png';
import cartimg3 from '../../../assets/img/products/4.png';

const carttable = [
    {
        photo: cartimg1,
        name: "Kiwi",
        para: "2 Kilos",
        price: "12.99$",
        total: "12.99$",
    },
    {
        photo: cartimg2,
        name: "Watermelons",
        para: "1 Piece",
        price: "9.99$",
        total: "9.99$",
    },
    {
        photo: cartimg3,
        name: "Cucumbers",
        para: "3 Kilos",
        price: "13.99$",
        total: "13.99$",
    },
]

class Carttext extends Component {
    constructor() {
        super();
        this.state = {
            function:    <tr>
                            <td colSpan="5">
                                <div class="spinner-border" role="status" style={{display: 'block', margin: '0 auto', marginTop: '40px', color: 'rgb(61, 201, 179)'}}>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </td>
                        </tr>,
            lista: [],
            precioFinal: 0
        }
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    {/* Cart Table Start */}
                    <table className="andro_responsive-table">
                        <thead>
                            <tr>
                                <th className="remove-item" />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.function}
                        </tbody>
                    </table>
                    {/* Cart Table End */}
                    {/* Coupon Code Start */}
                    <div className="row" style={{marginBottom: '20px'}}>
                        <div className="col-lg-5">
                            <div className="form-group mb-0">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Ingrese su cupón" aria-label="Coupon Code" />
                                    <div className="input-group-append">
                                        <button className="andro_btn-custom shadow-none" type="button">Aplicar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Coupon Code End */}
                    <Cartform precio={this.state.precioFinal}/>
                </div>
            </div>

        );
    }

    dibujarProd(datos) {
        return(
            datos.map((item, i) => (
                <tr key={i}>
                    <td className="remove">
                        <button type="button" className="close-btn close-danger remove-from-cart" name={i} onClick={this.quitar.bind(this)}>
                            <span />
                            <span />
                        </button>
                    </td>
                    <td data-title="Producto">
                        <div className="andro_cart-product-wrapper">
                            <img src={item.photo} alt="prod1" />
                            <div className="andro_cart-product-body">
                                <h6> <Link to="#">{item.name}</Link> </h6>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    </td>
                    <td data-title="Precio unitario"> <strong>{item.price.toFixed(2)}$</strong> </td>
                    <td className="quantity" data-title="Cantidad">
                        <input type="number" className="qty form-control" name={i} defaultValue={item.cantidad.toString()} onChange={this.cantidad.bind(this)}/>
                    </td>
                    <td data-title="Total"> <strong>{(item.price * item.cantidad).toFixed(2)}$</strong> </td>
                </tr>
            ))
        )
    }

    cantidad(event) {
        this.state.lista[event.target.name].cantidad = event.target.value;
        const data = [];
        const datos = this.state.lista;
        const n = datos.length;
        for (let i = 0; i < n; i++) {
            const object = {
                photo: datos[i].img,
                name: datos[i].nombre,
                para: datos[i].Unidad,
                price: parseFloat(datos[i].precio),
                cantidad: parseFloat(datos[i].cantidad)
            }
            data.push(object);
        }
        this.setState({function: this.dibujarProd(data)});
        window.localStorage.setItem('lista', JSON.stringify(this.state.lista));
        document.getElementById('itemsCarrito').innerHTML = `${this.state.lista.length} items`;
        let suma = 0;
        for (let i = 0; i < this.state.lista.length; i++) {
            suma = suma + (parseFloat(this.state.lista[i].precio) * parseFloat(this.state.lista[i].cantidad));
        }
        document.getElementById('precioCarrito').innerHTML = `$${suma.toFixed(2)}`;
        this.setState({precioFinal: suma});
        window.localStorage.setItem('precioFinal', suma);
    }

    quitar(event) {
        this.state.lista.splice( parseInt(event.target.name), 1);
        const data = [];
        const datos = this.state.lista;
        const n = datos.length;
        for (let i = 0; i < n; i++) {
            const object = {
                photo: datos[i].img,
                name: datos[i].nombre,
                para: datos[i].Unidad,
                price: parseFloat(datos[i].precio),
                cantidad: parseFloat(datos[i].cantidad)
            }
            data.push(object);
        }
        this.setState({function: this.dibujarProd(data)});
        window.localStorage.setItem('lista', JSON.stringify(this.state.lista));
        document.getElementById('itemsCarrito').innerHTML = `${this.state.lista.length} items`;
        let suma = 0;
        for (let i = 0; i < this.state.lista.length; i++) {
            suma = suma + (parseFloat(this.state.lista[i].precio) * parseFloat(this.state.lista[i].cantidad));
        }
        document.getElementById('precioCarrito').innerHTML = `$${suma.toFixed(2)}`;
        this.setState({precioFinal: suma});
        window.localStorage.setItem('precioFinal', suma);
    }

    componentDidMount() {
        if (window.localStorage.getItem('lista')) {
            this.state.lista = JSON.parse(window.localStorage.getItem('lista'));
            document.getElementById('itemsCarrito').innerHTML = `${this.state.lista.length} items`;
            let suma = 0;
            for (let i = 0; i < this.state.lista.length; i++) {
                suma = suma + (parseFloat(this.state.lista[i].precio) * parseFloat(this.state.lista[i].cantidad));
            }
            document.getElementById('precioCarrito').innerHTML = `$${suma.toFixed(2)}`;
            this.setState({precioFinal: suma});
            window.localStorage.setItem('precioFinal', suma);
            const data = [];
            const datos = this.state.lista;
            const n = datos.length;
            for (let i = 0; i < n; i++) {
                const object = {
                    photo: datos[i].img,
                    name: datos[i].nombre,
                    para: datos[i].Unidad,
                    price: parseFloat(datos[i].precio),
                    cantidad: parseFloat(datos[i].cantidad)
                }
                data.push(object);
            }
            this.setState({function: this.dibujarProd(data)});
        }
    }
}

export default Carttext;