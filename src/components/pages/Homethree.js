import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Banner from '../sections/Homethree/Banner';
import Categories from '../sections/Homethree/Categories';
import Shopcta from '../sections/Homeone/Shopcta';
import Icons from '../sections/Homethree/Icons';
import Products from '../sections/Homethree/Products';
import Featureproducts from '../sections/Hometwo/Featureproducts';
import Cta from '../sections/Hometwo/Cta';
import Toppicks from '../sections/Hometwo/Toppicks';
import Ctamasonary from '../sections/Homethree/Ctamasonary';
import Blogpost from '../sections/Homethree/Blog';
import Testimonials from '../sections/Homethree/Testimonials';
import Faqcontact from '../sections/Homethree/Faqcontact';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';
import Shopboxes from '../sections/Shoptwo/Shopboxes';

class Homethree extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Banner/>
                <Categories/>
                {/*<Shopcta/>
                <Icons/>*/}
                <Shopboxes/>
                {/*<Products/>
                <Featureproducts/>
                <Cta/>
                <Toppicks/>
                <Ctamasonary/> 
                <Blogpost/>
                <Testimonials/>*/}
                {/*<Faqcontact/>
                <Instatwo/>*/}
                <Footertwo/>
            </div>
        );
    }
}

export default Homethree;