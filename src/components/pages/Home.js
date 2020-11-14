import React, { Component } from 'react';
import Header from '../layouts/Header';
import Banner from '../sections/Homeone/Banner';
import Category from '../sections/Homeone/Categories';
import Featureproduct from '../sections/Homeone/Featureproduct';
import Shopcta from '../sections/Homeone/Shopcta';
import Topcategory from '../sections/Homeone/Topcategory';
import Cta from '../sections/Homeone/Cta';
import Dailydeal from '../sections/Homeone/Dailydeal';
import Blogpost from '../sections/Homeone/Blogpost';
import Otherproduct from '../sections/Homeone/Otherproduct';
import Instaone from '../layouts/Instaone';
import Footer from '../layouts/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Category/>
                <Featureproduct/>
                <Shopcta/>
                <Topcategory/>
                <Cta/>
                <Dailydeal/>
                <Blogpost/>
                <Otherproduct/>
                <Instaone/>
                <Footer/>
            </div>
        );
    }
}

export default Home;