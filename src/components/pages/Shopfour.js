import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Shopfour/Breadcrumb';
import Shoplist from '../sections/Shopfour/Shoplist';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Shopfour extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Shoplist/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Shopfour;