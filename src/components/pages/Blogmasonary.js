import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Blogmasonary/Breadcrumb';
import Masonarypost from '../sections/Blogmasonary/Masonarypost';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Blogmasonary extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Masonarypost/>
                
                <Footertwo/>
            </div>
        );
    }
}

export default Blogmasonary;