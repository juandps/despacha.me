import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Registertext from '../sections/Register/Registertext';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Register extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Registertext/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Register;