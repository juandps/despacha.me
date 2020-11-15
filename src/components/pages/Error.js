import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Headertwo from '../layouts/Headertwo';
import Footertwo from '../layouts/Footertwo';

import errorimg from '../../assets/img/404.jpg';

class Error extends Component {
    render() {
        return (
            <div>
                <Headertwo />
                <div className="section">
                    <div className="container">
                        <div className="andro_404-container">
                            <img src={errorimg} alt="" />
                            <h1>Página no encontrada</h1>
                            <p>La página que estás buscando no existe</p>
                            <Link to="/" className="andro_btn-custom light">Regresar a inicio</Link>
                        </div>
                    </div>
                </div>
                <Footertwo />
            </div>
        );
    }
}

export default Error;