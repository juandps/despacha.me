import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Productsingle/Breadcrumb';
import Productcontent from '../sections/Productsingle/Productcontent';
import Addinfo from '../sections/Productsingle/Addinfo';
import Relatedproducts from '../sections/Productsingle/Relatedproducts';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo'; 

class Productsingle extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Productcontent/>
                <Addinfo/>
                <Relatedproducts/>              
                <Footertwo/>
            </div>
        );
    }
}

export default Productsingle;