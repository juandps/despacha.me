import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Legal/Breadcrumb';
import Legaltext from '../sections/Legal/Legaltext';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Legal extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Legaltext/>              
                <Footertwo/>
            </div>
        );
    }
}

export default Legal;