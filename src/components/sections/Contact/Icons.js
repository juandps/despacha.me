import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const contactinfo = [
    {
        icon: "flaticon-call",
        title: "Call Center",
        para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        icon: "flaticon-email",
        title: "Mail Us",
        para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        icon: "flaticon-location",
        title: "Nearest Branch",
        para: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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