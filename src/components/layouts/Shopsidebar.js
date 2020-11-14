import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
    render() {
        return (
            <div className="sidebar">
                {/* Search Start
                <div className="sidebar-widget widget-search">
                    <form method="post">
                        <div className="andro_search-adv-input">
                            <input type="text" className="form-control" placeholder="Busca frutas, verduras, medicina... ¡Lo que sea!" name="search" />
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
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Frutas</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                <label className="custom-control-label" htmlFor="customCheck2">Abarrotes</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                <label className="custom-control-label" htmlFor="customCheck3">Lácteos y Huevos</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                <label className="custom-control-label" htmlFor="customCheck4">Baby &amp; Kids Care</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                <label className="custom-control-label" htmlFor="customCheck5">Verduras</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                <label className="custom-control-label" htmlFor="customCheck6">Farmacia</label>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Filter: Categories End */}
                {/* Filter: Condition Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title"> Condición </h5>
                    <ul className="sidebar-widget-list">
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                <label className="custom-control-label" htmlFor="customCheck7">Daily Deal</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                <label className="custom-control-label" htmlFor="customCheck8">On Sale</label>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Filter: Condition End */}
                {/* Filter: State Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title"> Marca </h5>
                    <ul className="sidebar-widget-list">
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                <label className="custom-control-label" htmlFor="customCheck9">Maggi</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                <label className="custom-control-label" htmlFor="customCheck10">Alpes</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                <label className="custom-control-label" htmlFor="customCheck11">Inapesa</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                <label className="custom-control-label" htmlFor="customCheck12">Cafrilosa</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                <label className="custom-control-label" htmlFor="customCheck13">El Ordeño</label>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Filter: State End */}
                {/* Filter: Freshness Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title"> Frescura </h5>
                    <Range min={0} max={10} marks={marks} defaultValue={[5, 6]} tipFormatter={value => `${value} days`} />
                </div>
                {/* Filter: Freshness End */}
                {/* Filter: Price Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title"> Precio </h5>
                    <Range min={0} max={500} marks={pricemarks} defaultValue={[10, 100]} tipFormatter={value => `${value} $`} />
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
                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                            </div>
                            <button type="submit" className="andro_btn-custom secondary btn-block shadow-none" name="button">Join Newsletter</button>
                        </form>
                    </div>
                </div>
                {/* Newsletter End */}
            </div>

        );
    }
}

export default Shopsidebar;