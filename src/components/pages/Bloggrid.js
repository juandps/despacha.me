import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Bloggrid/Breadcrumb';
import Gridpost from '../sections/Bloggrid/Gridpost';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Bloggrid extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Gridpost/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Bloggrid;