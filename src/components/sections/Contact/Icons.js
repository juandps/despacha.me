import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const contactinfo = [
    {
        icon: "flaticon-call",
        title: "Call Center",
        para: "Escríbenos o llámanos atendemos 24/7 por medio de nuestro bot",
    },
    {
        icon: "flaticon-email",
        title: "Correo",
        para: "Aunque el correo es algo Old School, también puedes escribirnos a info@despacha.me",
    },
    {
        icon: "flaticon-location",
        title: "Oficinas",
        para: "Si deseas hablar con nuestro gerente visítanos en nuestras instalaciones",
    },
]

class Icons extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        {contactinfo.map((item, i) => (
                            <div key={i} className="col-lg-4">
                                <div className="andro_icon-block">
                                    <Link to="#">
                                        <i className={item.icon} />
                                        <h5>{item.title}</h5>
                                        <p>{item.para}</p>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                        <rect height={500} width={500} className="andro_svg-stroke-shape-anim" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Icons;