import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Productsingletwo/Breadcrumb';
import Productcontent from '../sections/Productsingletwo/Productcontent';
import Addinfo from '../sections/Productsingle/Addinfo';
import Relatedproducts from '../sections/Productsingle/Relatedproducts';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Productsingletwo extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Productcontent/>
                <Addinfo/>
                <Relatedproducts/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Productsingletwo;