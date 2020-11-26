import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Cart/Breadcrumb';
import Carttext from '../sections/Cart/Carttext';
import Footertwo from '../layouts/Footertwo';

class Cart extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Carttext/>
                
                <Footertwo/>
            </div>
        );
    }
}

export default Cart;