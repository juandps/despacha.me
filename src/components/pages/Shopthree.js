import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Shopthree/Breadcrumb';
import Shopboxes from '../sections/Shopthree/Shopboxes';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footer';

class Shopthree extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Shopboxes/>              
                <Footertwo/>
            </div>
        );
    }
}

export default Shopthree;