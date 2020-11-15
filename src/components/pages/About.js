import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/About/Breadcrumb';
import Abouttext from '../sections/About/Abouttext';
import Cta from '../sections/Hometwo/Cta';
import Abouttexttwo from '../sections/About/Abouttexttwo';
import Testimonials from '../sections/About/Testimonials';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class About extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Abouttext/>
                <Cta/>
                <Abouttexttwo/>
                <Testimonials/>
                
                <Footertwo/>
            </div>
        );
    }
}

export default About;