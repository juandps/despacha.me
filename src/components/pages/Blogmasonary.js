import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Blogmasonary/Breadcrumb';
import Masonarypost from '../sections/Blogmasonary/Masonarypost';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Blogmasonary extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Masonarypost/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Blogmasonary;