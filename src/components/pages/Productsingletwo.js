import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Productsingletwo/Breadcrumb';
import Productcontent from '../sections/Productsingletwo/Productcontent';
import Addinfo from '../sections/Productsingle/Addinfo';
import Relatedproducts from '../sections/Productsingle/Relatedproducts';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Productsingletwo extends Component {
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

export default Productsingletwo;