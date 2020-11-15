import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Shopone/Breadcrumb';
import Shopboxes from '../sections/Shopone/Shopboxes';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Shopone extends Component {
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

export default Shopone;