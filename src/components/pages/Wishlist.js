import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Wishlist/Breadcrumb';
import Wishlisttext from '../sections/Wishlist/Wishlisttext';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Wishlist extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Wishlisttext/>
                
                <Footertwo/>
            </div>
        );
    }
}

export default Wishlist;