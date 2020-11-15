import React, { Component } from 'react';
import Headertwo from '../layouts/Headertwo';
import Breadcrumb from '../sections/Bloglist/Breadcrumb';
import Listpost from '../sections/Bloglist/Listpost';

import Footertwo from '../layouts/Footertwo';

class Bloglist extends Component {
    render() {
        return (
            <div>
                <Headertwo/>
                <Breadcrumb/>
                <Listpost/>
                
                <Footertwo/>
            </div>
        );
    }
}

export default Bloglist;