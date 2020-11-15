import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import location1 from '../../../assets/img/locations/1.jpeg';
import location2 from '../../../assets/img/locations/1.jpeg';

const locationbox = [
    {
        photo: location1,
        title: "Encuéntranos en",
        titlespan: "Loja",
        para: "Marcelino Champagnat y Paris.",
    },
    {
        photo: location2,
        title: "Bodega en",
        titlespan: "Loja",
        para: "Av. Universitaria",
    },
]
class Locations extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        {locationbox.map((item, i) => (
                            <div key={i} className="col-md-6">
                                <div className="andro_cta">
                                    <Link to="#">
                                        <img src={item.photo} alt="location" />
                                        <div className="andro_cta-content">
                                            <h4 className="text-white">{item.title} <span className="fw-400">{item.titlespan}</span> </h4>
                                            <p className="text-white mb-0">{item.para}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Locations;