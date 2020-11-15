import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Registertext from '../sections/Register/Registertext';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Register extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Registertext/>              
                <Footertwo/>
            </div>
        );
    }
}

export default Register;