import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import * as request from 'superagent';

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
class Shopsidebar extends Component {
    constructor() {
        super();
        this.state = {
            array: []
        }
    }

    render() {
        return (
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
                                <label className="custom-control-label" htmlFor="customCheck4">Baby &amp; Proteinas</label>
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

        );
    }

    check(event) {
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
    }
}

export default Shopsidebar;