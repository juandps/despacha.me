import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const categories = [
    {
        icon: "flaticon-diet",
        title: "Frutas",
        link: "#",
    },
    {
        icon: "flaticon-supplements",
        title: ">Farmacia",
        link: "#",
    },
    {
        icon: "flaticon-groceries",
        title: "Combos",
        link: "#",
    },
    {
        icon: "flaticon-cleaning-spray",
        title: "Aseo",
        link: "#",
    },
    {
        icon: "flaticon-baby",
        title: "Cuidado baby",
        link: "#",
    },
    {
        icon: "flaticon-olive-oil",
        title: "Oils",
        link: "#",
    }
]

class Categories extends Component {
    render() {
        return (
            <div className="section section-padding category_section">
                <div className="container">
                    <div className="row">
                        {categories.map((item, i) => (
                            <div key={i} className="col-lg-2 col-md-3 col-sm-4">
                                <div className="andro_icon-block text-center has-link">
                                    <Link to={item.link}>
                                        <i className={item.icon} />
                                        <h5>{item.title}</h5>
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

export default Categories;