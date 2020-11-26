import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as request from 'superagent';
import Shopboxes from '../Shoptwo/Shopboxes';

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

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            reiniciar: ''
        }
    }
    render() {
        return (
            <div>
                <div className="section section-padding category_section">
                    <div className="container">
                        <div className="row">
                            {categories.map((item, i) => (
                                <div key={i} className="col-lg-2 col-md-3 col-sm-4">
                                    <div className="andro_icon-block text-center has-link">
                                        <Link to={item.link}>
                                            <i className={item.icon} id={item.title} onClick={this.catCambiar.bind(this)}/>
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
        );
    }

    catCambiar(event) {
        const cat = event.target.id;
        console.log(cat);
        this.setState({reiniciar: ''});
        setTimeout(() => {this.setState({reiniciar: <Shopboxes cat={cat}/>})}, 100);
    }

    componentDidMount() {
        this.setState({reiniciar: <Shopboxes cat="nada"/>})
    }
}

export default Categories;