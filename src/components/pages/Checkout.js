import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Checkout/Breadcrumb';
import Checkouttext from '../sections/Checkout/Checkouttext';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Checkout extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Checkouttext/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Checkout;