import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Logintext from '../sections/Login/Logintext';
import Instatwo from '../layouts/Instatwo';
import Footer from '../layouts/Footer';

class Login extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Logintext/>
                <Instatwo/>
                <Footer/>
            </div>
        );
    }
}

export default Login;