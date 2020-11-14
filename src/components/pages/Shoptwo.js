import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Shoptwo/Breadcrumb';
import Shopboxes from '../sections/Shoptwo/Shopboxes';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Shoptwo extends Component {
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

export default Shoptwo;