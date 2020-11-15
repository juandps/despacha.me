import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Checkouttext extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <form method="post">
                        <div className="row">
                            <div className="col-xl-7">
                                {/* Login */}
                                <div className="andro_notice">
                                    <p>¿Ya eres cliente? <Link to="/login">Ingresa aquí</Link> </p>
                                </div>
                                <div className="andro_notice-content">
                                    <div className="row">
                                        <div className="col-xl-6 form-group">
                                            <label>Correo</label>
                                            <input type="text" className="form-control" name="login-email" placeholder="Correo" />
                                        </div>
                                        <div className="col-xl-6 form-group">
                                            <label>Contraseña</label>
                                            <input type="Contraseña" className="form-control" name="login-pass" placeholder="Contraseña" />
                                        </div>
                                        <div className="col-12 form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="rememberMe" />
                                                <label className="custom-control-label" htmlFor="rememberMe">Recordar mis datos</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="andro_btn-custom shadow-none btn-sm" name="button">Login</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Coupon Code */}
                                <div className="andro_notice">
                                    <p>¿Tienes un cupón? <Link to="#">Clic para ingresarlo</Link> </p>
                                </div>
                                <div className="andro_notice-content">
                                    <p>Si tienes un cupón ingresa aquí</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Coupon Code" />
                                        <div className="input-group-append">
                                            <button className="andro_btn-custom shadow-none" type="button">Aplicar código</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Buyer Info Start */}
                                <h4>Datos de factura</h4>
                                <div className="row">
                                    <div className="form-group col-xl-6">
                                        <label>Nombre <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Nombre" name="fname" className="form-control" required />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Apellido <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Apellido" name="lname" className="form-control" required />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Empresa</label>
                                        <input type="text" placeholder="Empresa (Opcional)" name="cname" className="form-control" />
                                    </div>
                           
                                    <div className="form-group col-xl-6">
                                        <label>Dirección <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Calle 1 06-50 y Calle 2" name="addr-1" className="form-control" required />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Referencia</label>
                                        <input type="text" placeholder="Al frente de la tienda  (Opcional)" name="addr-1" className="form-control" />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <label>Ciudad <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Ciudad" name="town" className="form-control" required />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Teléfono <span className="text-danger">*</span></label>
                                        <input type="text" placeholder="Teléfono" name="phone" className="form-control" required />
                                    </div>
                                    <div className="form-group col-xl-6">
                                        <label>Correo <span className="text-danger">*</span></label>
                                        <input type="email" placeholder="Correo" name="email" className="form-control" required />
                                    </div>
                                    <div className="form-group col-xl-12 mb-0">
                                        <label>Indicaciones del pedido</label>
                                        <textarea name="name" rows={5} className="form-control" placeholder="Indicaciones del pedido (Opcional)" />
                                    </div>
                                </div>
                                {/* Buyer Info End */}
                            </div>
                            <div className="col-xl-5 checkout-billing">
                                {/* Order Details Start */}
                                <table className="andro_responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-title="Product">
                                                <div className="andro_cart-product-wrapper">
                                                    <div className="andro_cart-product-body">
                                                        <h6> <Link to="#">Watermelon</Link> </h6>
                                                        <p>1 Unidad</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-title="Quantity">x1</td>
                                            <td data-title="Total"> <strong>23.99$</strong> </td>
                                        </tr>
                                        <tr>
                                            <td data-title="Product">
                                                <div className="andro_cart-product-wrapper">
                                                    <div className="andro_cart-product-body">
                                                        <h6> <Link to="#">Ornages</Link> </h6>
                                                        <p>2 Kilos</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-title="Quantity">x1</td>
                                            <td data-title="Total"> <strong>9.99$</strong> </td>
                                        </tr>
                                        <tr>
                                            <td data-title="Product">
                                                <div className="andro_cart-product-wrapper">
                                                    <div className="andro_cart-product-body">
                                                        <h6> <Link to="#">Cucumbers</Link> </h6>
                                                        <p>3 Kilos</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-title="Quantity">x2</td>
                                            <td data-title="Total"> <strong>13.99$</strong> </td>
                                        </tr>
                                        <tr className="total">
                                            <td>
                                                <h6 className="mb-0">Subtotal</h6>
                                            </td>
                                            <td />
                                            <td> <strong>$50.00</strong> </td>
                                        </tr>
                                        <tr className="total">
                                            <td>
                                                <h6 className="mb-0">IVA</h6>
                                            </td>
                                            <td />
                                            <td> <strong>$10.00</strong> </td>
                                        </tr>
                                        <tr className="total">
                                            <td>
                                                <h6 className="mb-0">Total</h6>
                                            </td>
                                            <td />
                                            <td> <strong>$60.00</strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="form-group">
                                    <label>Número de Tarjeta de Crédito</label>
                                    <input type="text" className="form-control" name="master-number" placeholder="Número de Tarjeta de Crédito" />
                                </div>
                                <div className="form-group">
                                    <label>Nombre en tarjeta</label>
                                    <input type="text" className="form-control" name="master-name" placeholder="Nombre en tarjeta" />
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 form-group">
                                        <label>Expiración Tarjeta</label>
                                        <input type="text" className="form-control" name="master-expiry" placeholder="Expiración Tarjeta (MM/AA)" />
                                    </div>
                                    <div className="col-xl-6 form-group">
                                        <label>CVV*</label>
                                        <input type="number" className="form-control" name="master-cvv" placeholder="CVV" />
                                    </div>
                                </div>
                                <p className="small">Tus datos presonales serán usados para procesar únicamente para esta orden y no serán almacenados de ninguna manera. Tenemos el respaldo bancario y nuestros servidores están en EE.UU. Puedes leer nuestra<Link className="btn-link" to="#"> Política de Privacidad</Link> </p>
                                <button type="submit" className="andro_btn-custom primary btn-block">Comprar</button>
                                {/* Order Details End */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Checkouttext;