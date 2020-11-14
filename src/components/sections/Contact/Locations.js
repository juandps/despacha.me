import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import location1 from '../../../assets/img/locations/1.jpg';
import location2 from '../../../assets/img/locations/2.jpg';

const locationbox = [
    {
        photo: location1,
        title: "Find Us In",
        titlespan: "Greece",
        para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
    {
        photo: location2,
        title: "Find Us In",
        titlespan: "New York",
        para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
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