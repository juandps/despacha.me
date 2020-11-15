import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Checkout/Breadcrumb';
import Checkouttext from '../sections/Checkout/Checkouttext';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Checkout extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Checkouttext/>
               
                <Footertwo/>
            </div>
        );
    }
}

export default Checkout;