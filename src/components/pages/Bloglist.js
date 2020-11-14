import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Bloglist/Breadcrumb';
import Listpost from '../sections/Bloglist/Listpost';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Bloglist extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Listpost/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Bloglist;