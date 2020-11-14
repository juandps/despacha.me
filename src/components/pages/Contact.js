import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Contact/Breadcrumb';
import Locations from '../sections/Contact/Locations';
import Icons from '../sections/Contact/Icons';
import Faqcontact from '../sections/Contact/Faqcontact';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Locations/>
                <Icons/>
                <Faqcontact/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;