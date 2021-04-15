import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Mobilemenu from './Mobilemenu';
import $ from 'jquery';
import {findDOMNode } from 'react-dom';
import * as request from 'superagent';
import './css/header.css';
import Banner from '../sections/Homethree/Banner';
import Shopboxes from '../sections/Shoptwo/Shopboxes';
import logo from '../../assets/img/logo.png';
import { Modal } from 'react-responsive-modal';

const closeIcon = (
    <div className="close-btn close-dark close" data-dismiss="modal">
        <span />
        <span />
    </div>
)

const categories = [
    {
        icon: "flaticon-diet",
        title: "Frutas",
        link: "#",
    },
    {
        icon: "flaticon-supplements",
        title: "Farmacia",
        link: "#",
    },
    {
        icon: "flaticon-groceries",
        title: "Vegetales",
        link: "#",
    },
    {
        icon: "flaticon-cleaning-spray",
        title: "Lacteos",
        link: "#",
    },
    {
        icon: "flaticon-baby",
        title: "Proteinas",
        link: "#",
    },
    {
        icon: "flaticon-olive-oil",
        title: "Abarrotes",
        link: "#",
    }
]

class Headertwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redText: false,
          reiniciar: <div style={{display: 'block', margin: '0 auto', marginBottom: '80px'}}>
                        <div class="spinner-border" role="status" style={{display: 'block', margin: '0 auto', marginTop: '40px', color: 'rgb(61, 201, 179)'}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>,
          buscar: '',
          open: false,
          elementos: []
        };
      }
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        const { open } = this.state;
        return (
            <div>
                <aside className="andro_aside andro_aside-right" id="menuLado" ref="sidebarbtn">
                    <div className="sidebar d-block">
                        {/* Categorías Start */}
                        <div className="sidebar-widget widget-categories-icons">
                            <h5 className="widget-title">Categorías</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link>
                                            <i className="flaticon-diet" lang="Frutas" onClick={this.catCambiar.bind(this)}/>
                                            <h5>Frutas</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link>
                                            <i className="flaticon-groceries" lang="Lacteos" onClick={this.catCambiar.bind(this)}/>
                                            <h5>Lácteos y Huevos</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link>
                                            <i className="flaticon-supplements" lang="Farmacia" onClick={this.catCambiar.bind(this)}/>
                                            <h5>Farmacia</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link>
                                            <i className="flaticon-cleaning-spray" lang="Vegetales" onClick={this.catCambiar.bind(this)}/>
                                            <h5>Verduras</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link>
                                            <i className="flaticon-baby" lang="Proteinas" onClick={this.catCambiar.bind(this)}/>
                                            <h5>Proteinas</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link>
                                            <i className="flaticon-olive-oil" lang="Abarrotes" onClick={this.catCambiar.bind(this)}/>
                                            <h5>Abarrotes</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Categorías End */}
                        {/* Populares Start */}
                        <div className="sidebar-widget">
                            <h5 className="widget-title">Populares</h5>
                            <div className="tagcloud">
                                <Link to="/product-single">Health</Link>
                                <Link to="/product-single">Frutas</Link>
                                <Link to="/product-single">Ingredients</Link>
                                <Link to="/product-single">Organic</Link>
                                <Link to="/product-single">Farms</Link>
                                <Link to="/product-single">Green</Link>
                                <Link to="/product-single">Fiber</Link>
                                <Link to="/product-single">Farmacia</Link>
                                <Link to="/product-single">Gain</Link>
                                <Link to="/product-single">Live Stock</Link>
                                <Link to="/product-single">Harvest</Link>
                            </div>
                        </div>
                        {/* Populares End */}
                    </div>
                </aside>
                <div className="andro_aside-overlay aside-trigger-right" onClick={this.removesidebarbtn} />
                {/* Aside (Mobile Navigation) */}
                <aside className="andro_aside andro_aside-left" ref="mobilemenubtn">
                    <Mobilemenu />
                </aside>
                <div className="andro_aside-overlay aside-trigger-left" onClick={this.removemobilemenu}/>
                {/* Header Start */}
                <header className={`andro_header header-1 can-sticky ${stickyheader}`}>
                    {/* Topheader Start */}
                    <div className="andro_header-top">
                        <div className="container">
                            <div className="andro_header-top-inner">
                                <ul className="andro_header-top-sm andro_sm">
                                    <li> <Link to="https://www.facebook.com/despacha.me"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="https://twitter.com/despacha_me"> <i className="fab fa-twitter" /> </Link> </li>
                                    <li> <Link to="https://wa.link/advqv4"> <i className="fab fa-whatsapp" /> </Link> </li>
                                    <li> <Link to="https://www.instagram.com/despacha.me/"> <i className="fab fa-instagram" /> </Link> </li>
                                </ul>
                                <ul className="andro_header-top-links">
                                    <li className="menu-item" id="afuera"><Link to="/login"> Ingresar </Link></li>
                                    <li className="menu-item" id="dentro" hidden onClick={this.onOpenModal}><Link id="ingresarLogin"> Ingresar </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Topheader End */}
                    {/* Middle Header Start */}
                    <div className="andro_header-middle" id="cellHead">
                        <div className="container">
                            <nav className="navbar">
                                {/* Logo */}
                                <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" /> </Link>
                                {/* Search Form */}
                                <div className="andro_search-adv">
                                    <form method="post">
                                        {/*<div className="andro_search-adv-cats">
                                            <span>Categorías<i class="fas fa-chevron-up"></i></span>
                                            <div className="sub-menu">
                                                <div className="andro_dropdown-scroll">
                                                    <label>
                                                        <input type="checkbox" name="category1" defaultValue="Frutas" />
                      Frutas
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category2" defaultValue="home-care" />
                      Verduras
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category3" defaultValue="Abarrotes" />
                      Abarrotes
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category4" defaultValue="Lácteos y Huevos" />
                      Lácteos y Huevos
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category5" defaultValue="supplements" />
                      Supplements
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category6" defaultValue="baby-kids" />
                      Baby &amp; Kids care
                      <i className="fas fa-check" />
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" name="category7" defaultValue="serum" />
                      Serum
                      <i className="fas fa-check" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>*/}
                                        <div className="andro_search-adv-input">
                                            <input type="search" className="form-control" placeholder="Busca cualquier producto" name="search" onChange={this.buscar.bind(this)}/>
                                            <button type="button" name="button" onClick={this.buscarEnter.bind(this)}><i className="fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="andro_header-controls">
                                    <ul className="andro_header-controls-inner">
                                        <li className="andro_header-favorites"> <Link to="/wishlist" title="Your Wishlist"> <i className="flaticon-like" /> </Link> </li>
                                        <li className="andro_header-cart">
                                            <Link to="/cart" title="Your Cart">
                                                <i className="flaticon-shopping-basket" />
                                                <div className="andro_header-cart-content">
                                                    <span id="itemsCarrito"></span>
                                                    <span id="precioCarrito"></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* Side navigation toggle */}
                                <div className="aside-toggler aside-trigger-right desktop-toggler" onClick={this.sidebarbtn}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                    
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Middle Header End */}

                    <Modal open={open} onClose={this.onCloseModal} top classNames={{
                        modal: 'andro_quick-view-modal',
                        }}><div className="modal-content">
                            <div className="modal-body">           
                                <h4 style={{color: '#2E2D52', padding: '10px', marginTop: '10px'}}>¿Quieres cerrar sesión?</h4>
                                <button type="button" className="andro_btn-custom primary btn-block" onClick={this.cerrarSesion.bind(this)}>
                                    Confirmar
                                </button>
                            </div>
                        </div>
                        
                    </Modal>
                </header>
                <div id="inicioBody">
                    <div id="regresamos">
                        <Banner />
                    </div>
                    <div>
                        <div className="section section-padding category_section" id="categoriasArriba">
                            <div className="container">
                                <div className="row">
                                    {categories.map((item, i) => (
                                        <div key={i} className="col-lg-2 col-md-3 col-sm-4">
                                            <div className="andro_icon-block text-center has-link">
                                                <Link to={item.link}>
                                                    <i className={item.icon} lang={item.title} onClick={this.catCambiar.bind(this)}/>
                                                    <h5>{item.title}</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {this.state.reiniciar}
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

    // Sidebar btn
    sidebarbtn = () => {
        const sdb = findDOMNode(this.refs.sidebarbtn);
        $(sdb).addClass('open');
    }

    removesidebarbtn = () => {
        const sdb = findDOMNode(this.refs.sidebarbtn);
        $(sdb).removeClass('open');
    }

    // Mobile btn
    mobilemenubtn = () => {
        const mbb = findDOMNode(this.refs.mobilemenubtn);
        $(mbb).addClass('open');
    }

    removemobilemenu = () => {
        const mbb = findDOMNode(this.refs.mobilemenubtn);
        $(mbb).removeClass('open');
    }

    buscar(event) {
        const buscar = event.target.value;
        const n = this.state.elementos.length;
        const datos = [];
        for (let i = 0; i < n; i++) {
            if (this.state.elementos[i].title.toString().toUpperCase().includes(buscar.toString().toUpperCase())) {
                datos.push(this.state.elementos[i]);
            }
        }
        this.setState({buscarElem: datos});
    }

    buscarEnter() {
        this.setState({reiniciar: <div style={{display: 'block', margin: '0 auto', marginBottom: '80px'}}>
                                    <div class="spinner-border" role="status" style={{display: 'block', margin: '0 auto', marginTop: '40px', color: 'rgb(61, 201, 179)'}}>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                    });
        setTimeout(() => {this.setState({reiniciar: <Shopboxes cat="nada" buscar={'algooe'} elem={this.state.buscarElem}/>})}, 100);
    }

    catCambiar(event) {
        const cat = event.target.lang;
        this.setState({reiniciar: ''});
        setTimeout(() => {this.setState({reiniciar: <Shopboxes cat={cat} buscar=""/>})}, 100);
    }

    cerrarSesion() {
        window.localStorage.removeItem('token');
        window.location.reload();
    }

    componentDidMount() {
        if (window.location.pathname === '/') {
            this.setState({reiniciar: <Shopboxes cat="nada" buscar=""/>});
            document.getElementById('inicioBody').removeAttribute('hidden');
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
                            url: "/product-single",
                            descripcion: res.body[i].descripcion,
                            categoria: res.body[i].Categoria
                        }
                        this.state.elementos.push(objetc);
                    }
                }
            });
        } else {
            document.getElementById('inicioBody').setAttribute('hidden', '');
        }
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 110
            });
        }, false);
        if (window.localStorage.getItem('token')) {
            request
                .get('https://despacha-me.herokuapp.com/api/client/' + window.localStorage.getItem('token'))
                .set('Content-Type','aplication/json') 
                .then(res =>{
                    console.log(res.body);
                    window.localStorage.setItem('conectado', JSON.stringify(res.body));
                    document.getElementById('ingresarLogin').innerHTML = res.body.nombre;
                })
                .catch(err => {
                    alert('Este usuario no esta creado, porfavor cree una cuenta');
                })
            document.getElementById('afuera').setAttribute('hidden', '');
            document.getElementById('dentro').removeAttribute('hidden');
        } else {
            document.getElementById('dentro').setAttribute('hidden', '');
            document.getElementById('afuera').removeAttribute('hidden');
        }
    }
}

export default Headertwo;