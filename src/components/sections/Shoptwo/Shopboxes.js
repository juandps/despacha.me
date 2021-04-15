import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Shopsidebar';
import Pagination from '../../layouts/Pagination';
import Modalcontent from '../../layouts/Modalcontent';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import * as request from 'superagent';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './elementos.css';

import img1 from '../../../assets/img/products/7.png';
import img2 from '../../../assets/img/products/8.png';
import img3 from '../../../assets/img/products/9.png';
import img4 from '../../../assets/img/products/10.png';
import img5 from '../../../assets/img/products/11.png';
import img6 from '../../../assets/img/products/12.png';
import img7 from '../../../assets/img/products/2.png';
import img8 from '../../../assets/img/products/4.png';
import img9 from '../../../assets/img/products/5.png';
import img10 from '../../../assets/img/products/6.png';
import img11 from '../../../assets/img/products/14.png';
import img12 from '../../../assets/img/products/15.png';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};
const marks = {
    0: '0',
    3: '3',
    5: '5',
    8: '8',
    10: '10',
};
const pricemarks = {
    0: '0',
    125: '125',
    250: '250',
    375: '375',
    500: '500',
};

const shopfullbox = [
    {
        photo: img1,
        title: "Ginger",
        price1: "19$",
        price2: "29$",
        btn1text: "Agregar al carrito",
        btn2text: "Ver producto",
        url: "/product-single",
        badge: <div className="andro_product-badge andro_badge-featured">
            <i className="fa fa-star" />
            <span>Destacado</span>
        </div>
    }
]
const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
        <span />
        <span />
    </div>
)
class Shopboxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            function: <div style={{display: 'block', margin: '0 auto'}}>
                        <div class="spinner-border" role="status" style={{display: 'block', margin: '0 auto', marginTop: '40px', color: 'rgb(61, 201, 179)'}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>,
            lista: [],
            open: false,
            cat: this.props.cat,
            array: [],
            filtro: [],
            elementos: []
        }
    }
    render() {
        const { open } = this.state;
        return (
            <div className="section hide-newsletter">
                <input id="propsCat" value={this.props.cat} hidden/>
                <div className="andro_section-fw">
                    <div className="row">
                        <div className="col-lg-9" style={{overflowY: 'auto', height: '700px'}}>
                            <div className="row masonry">
                                {this.state.function}
                                <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                                    modal: 'andro_quick-view-modal p-0',
                                }}>
                                    <Modalcontent />
                                </Modal>
                            </div>
                            {/* Pagination Start */}
                            {/* Pagination End */}
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-3">
                            <div className="sidebar">
                                {/* Search Start
                                <div className="sidebar-widget widget-search">
                                    <form method="post">
                                        <div className="andro_search-adv-input">
                                            <input type="text" className="form-control" placeholder="Busca cualquier producto" name="search" />
                                            <button type="submit" name="button"><i className="fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                Search End */}
                                {/* Filter: Categories Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Categoría </h5>
                                    <ul className="sidebar-widget-list">
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" name="Frutas" onClick={this.check.bind(this)}/>
                                                <label className="custom-control-label" htmlFor="customCheck1">Frutas</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" name="Abarrotes" onClick={this.check.bind(this)}/>
                                                <label className="custom-control-label" htmlFor="customCheck2">Abarrotes</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" name="Lacteos" onClick={this.check.bind(this)}/>
                                                <label className="custom-control-label" htmlFor="customCheck3">Lácteos y Huevos</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" name="Proteinas" onClick={this.check.bind(this)}/>
                                                <label className="custom-control-label" htmlFor="customCheck4">Proteinas</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5" name="Vegetales" onClick={this.check.bind(this)}/>
                                                <label className="custom-control-label" htmlFor="customCheck5">Verduras</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6" name="Farmacia" onClick={this.check.bind(this)}/>
                                                <label className="custom-control-label" htmlFor="customCheck6">Farmacia</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* Filter: Price End */}
                                {/* Tags Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Populares </h5>
                                    <div className="tagcloud">
                                        <Link to="/product-single">Natural</Link>
                                        <Link to="/product-single">Frutas</Link>
                                        <Link to="/product-single">Verduras</Link>
                                        <Link to="/product-single">Organic</Link>
                                        <Link to="/product-single">Cosecha</Link>
                                        <Link to="/product-single">Verde</Link>
                                        <Link to="/product-single">Fribra</Link>
                                        <Link to="/product-single">Farmacia</Link>
                                        <Link to="/product-single">Vitamina</Link>
                                        <Link to="/product-single">Alcohol</Link>
                                        <Link to="/product-single">Cocina</Link>
                                        <Link to="/product-single">Hogar</Link>
                                        <Link to="/product-single">Mercado</Link>
                                    </div>
                                </div>
                                {/* Tags End */}
                                {/* Newsletter Start */}
                                <div className="sidebar-widget">
                                    <div className="andro_newsletter-form">
                                        <h5>Únete a nuestro newsletter</h5>
                                        <p>Obtén 10% de descuento</p>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="newsletter_email" placeholder="Correo" />
                                            </div>
                                            <button type="submit" className="andro_btn-custom secondary btn-block shadow-none" name="button">Join Newsletter</button>
                                        </form>
                                    </div>
                                </div>
                                {/* Newsletter End */}
                            </div>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
        );
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    dibujarTabla(datos) {
        return(
            datos.map((item, i) => 
                <div key={i} className="col-md-3 col-sm-4 col-6 masonry-item">
                    <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
                        {item.badge}
                        <div className="andro_product-thumb">
                            <Link to={item.url}>
                                <object data={item.photo} type="image/png" style={{width: '100%', height: '156px'}}>
                                    <img src="https://res.cloudinary.com/indev/image/upload/v1605129477/frutas/pexels-oleg-magni-890507_kssgnr.jpg" alt="product" style={{width: '214px', height: '156px'}}/>
                                </object>
                            </Link>
                        </div>
                        <div className="andro_product-body">
                            <h6 className="andro_product-title" style={{width: '100%'}}>
                                <Link style={{fontSize: '95%'}} to={item.url}> {item.title} </Link> 
                            </h6>
                            
                        </div>
                        <div className="andro_product-footer">
                            <div className="andro_product-price">
                                <span>{item.price1}$</span>
                                <span>{item.price2}</span>
                                /
                                {item.unidad}
                            </div>
                            <div className="andro_product-buttons">
                                <Link to="#" onClick={this.agregar.bind(this)} lang={item.categoria} className="andro_btn-custom primary agregarCar" name={item.local} id={item.id}>{item.btn1text}</Link>
                                <Link to="#" onClick={this.onOpenModal} lang={item.categoria} className="andro_btn-custom light" name={item.local}>{item.btn2text}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

    agregar(event) {
        const categoria = event.target.lang.charAt(0).toUpperCase() + event.target.lang.slice(1).toLowerCase();
        const id = event.target.name;
        const buttonId = event.target.id;
        request
            .get(`https://despacha-me.herokuapp.com/api/productos/${categoria}/${id}`)
            .set('Content-Type','aplication/json') 
            .then(res =>{
                const prod = res.body;
                prod.cantidad = 1;
                this.state.lista.push(prod);
                console.log(this.state.lista);
                window.localStorage.setItem('lista', JSON.stringify(this.state.lista));
                document.getElementById(buttonId).style.backgroundColor = '#ff6666';
                document.getElementById('itemsCarrito').innerHTML = `${this.state.lista.length} items`;
                let suma = 0;
                for (let i = 0; i < this.state.lista.length; i++) {
                    suma = suma + parseFloat(this.state.lista[i].precio);
                }
                document.getElementById('precioCarrito').innerHTML = `$${suma.toFixed(2)}`;
            });   
    }

    check(event) {
        const datos = [];
        this.setState({function: <td colSpan='5' style={{display: 'block', margin: '0 auto'}}>
                                    <div class="spinner-border" role="status" style={{display: 'block', margin: '0 auto', marginTop: '40px', color: 'rgb(61, 201, 179)'}}>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </td>
        });
        this.state.filtro = [];
        const n = this.state.array.length;
        let x = 0;
        for (let z = 0; z < n; z++) {
            if (this.state.array[z] === event.target.name) {
                this.state.array.splice( z, 1 );
                x = x +1;
            }
        }
        if (x === 0) {
            this.state.array.push(event.target.name);
        }
        window.localStorage.setItem('filtro', JSON.stringify(this.state.array));
        console.log(JSON.parse(window.localStorage.getItem('filtro')));
        const m = this.state.array.length;
        console.log(m);
        if (m > 0) {
            for (let x = 0; x < m; x++) {
                request
                .get('https://despacha-me.herokuapp.com/api/productos/' + this.state.array[x])
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    const nd = res.body.length;
                    for (let i = 0; i < nd; i++) {
                        if (res.body[i].disponible === 'true') {
                            const objetc = {
                                photo: res.body[i].img,
                                title: res.body[i].nombre,
                                price1: res.body[i].precio,
                                btn1text: "Agregar al carrito",
                                btn2text: "Ver producto",
                                id: res.body[i].id,
                                local: res.body[i].local,
                                unidad: res.body[i].Unidad,
                                url: "/",
                                descripcion: res.body[i].descripcion,
                                categoria: res.body[i].Categoria
                            }
                            this.state.filtro.push(objetc);
                        }
                    }
                    this.setState({function: this.dibujarTabla(this.state.filtro)})
                });
            }
        } else {
            request
                .get('https://despacha-me.herokuapp.com/api/productos')
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    const n = res.body.length;
                    for (let i = 0; i < n; i++) {
                        if (res.body[i].disponible === 'true') {
                            const objetc = {
                                photo: res.body[i].img,
                                title: res.body[i].nombre,
                                price1: res.body[i].precio,
                                btn1text: "Agregar al carrito",
                                btn2text: "Ver producto",
                                id: res.body[i].id,
                                local: res.body[i].local,
                                unidad: res.body[i].Unidad,
                                url: "/",
                                descripcion: res.body[i].descripcion,
                                categoria: res.body[i].Categoria
                            }
                            if('https://lacesteria.co/wp-content/uploads/2019/04/Platano-Verde-x-1-kg-2.jpg') {
                                console.log('bien');
                            } else {
                                console.log('mal');
                            }
                            datos.push(objetc);
                        }
                    }
                    this.setState({function: this.dibujarTabla(datos)})
                });
        }
    }

    componentDidMount() {
        if (this.props.cat === 'nada' && this.props.buscar === '') {
            const datos = [];
            request
                .get('https://despacha-me.herokuapp.com/api/productos/Frutas')
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    const n = res.body.length;
                    for (let i = 0; i < n; i++) {
                        if (res.body[i].disponible === 'true') {
                            const objetc = {
                                photo: res.body[i].img,
                                title: res.body[i].nombre,
                                price1: res.body[i].precio,
                                btn1text: "Agregar al carrito",
                                btn2text: "Ver producto",
                                id: res.body[i].id,
                                local: res.body[i].local,
                                unidad: res.body[i].Unidad,
                                url: "/",
                                descripcion: res.body[i].descripcion,
                                categoria: res.body[i].Categoria
                            }
                            datos.push(objetc);
                        }
                    }
                    this.setState({function: this.dibujarTabla(datos)})
                });
        } else if(this.props.cat !== 'nada' && this.props.buscar === '') {
            const datos = [];
            request
                .get('https://despacha-me.herokuapp.com/api/productos/' + this.props.cat)
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    const n = res.body.length;
                    for (let i = 0; i < n; i++) {
                        if (res.body[i].disponible === 'true') {
                            const objetc = {
                                photo: res.body[i].img,
                                title: res.body[i].nombre,
                                price1: res.body[i].precio,
                                btn1text: "Agregar al carrito",
                                btn2text: "Ver producto",
                                id: res.body[i].id,
                                local: res.body[i].local,
                                unidad: res.body[i].Unidad,
                                url: "/",
                                descripcion: res.body[i].descripcion,
                                categoria: res.body[i].Categoria
                            }
                            datos.push(objetc);
                        }
                    }
                    this.setState({function: this.dibujarTabla(datos)})
                });
        } else if(this.props.cat === 'nada' && this.props.buscar !== '') {
            this.setState({function: this.dibujarTabla(this.props.elem)})
        }
        if (window.localStorage.getItem('lista')) {
            this.state.lista = JSON.parse(window.localStorage.getItem('lista'));
            document.getElementById('itemsCarrito').innerHTML = `${this.state.lista.length} items`;
            let suma = 0;
            for (let i = 0; i < this.state.lista.length; i++) {
                suma = suma + (parseFloat(this.state.lista[i].precio) * parseFloat(this.state.lista[i].cantidad));
            }
            document.getElementById('precioCarrito').innerHTML = `$${suma.toFixed(2)}`;
        }
    }
}

export default Shopboxes;