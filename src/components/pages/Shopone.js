import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Shopone/Breadcrumb';
import Shopboxes from '../sections/Shopone/Shopboxes';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Shopone extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Shopboxes/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Shopone;