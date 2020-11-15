import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Postsingle/Breadcrumb';
import Detailcontent from '../sections/Postsingle/Detailcontent';
import Commentform from '../sections/Postsingle/Commentform';
import Relatedpost from '../layouts/Relatedpost';
import Instatwo from '../layouts/Instatwo';
import Footertwo from '../layouts/Footertwo';

class Postsingle extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Detailcontent/>
                <Commentform/>
                <Relatedpost/>               
                <Footertwo/>
            </div>
        );
    }
}

export default Postsingle;