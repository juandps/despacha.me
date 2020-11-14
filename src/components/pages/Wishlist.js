import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Wishlist/Breadcrumb';
import Wishlisttext from '../sections/Wishlist/Wishlisttext';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Wishlist extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Wishlisttext/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Wishlist;