import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Banner from '../sections/Hometwo/Banner';
import Icons from '../sections/Hometwo/Icons';
import Products from '../sections/Hometwo/Products';
import Featureproducts from '../sections/Hometwo/Featureproducts';
import Cta from '../sections/Hometwo/Cta';
import Toppicks from '../sections/Hometwo/Toppicks';
import Blog from '../sections/Hometwo/Blog';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Hometwo extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Banner/>
                <Icons/>
                <Products/>
                <Featureproducts/>
                <Cta/>
                <Toppicks/>
                <Blog/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Hometwo;