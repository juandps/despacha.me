import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Cart/Breadcrumb';
import Carttext from '../sections/Cart/Carttext';
import Cartform from '../sections/Cart/Cartform';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Cart extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Carttext/>
                <Cartform/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Cart;