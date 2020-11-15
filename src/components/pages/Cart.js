import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Cart/Breadcrumb';
import Carttext from '../sections/Cart/Carttext';
import Cartform from '../sections/Cart/Cartform';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Cart extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Carttext/>
                <Cartform/>
                
                <Footertwo/>
            </div>
        );
    }
}

export default Cart;