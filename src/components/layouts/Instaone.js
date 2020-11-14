import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import insta1 from '../../assets/img/ig/1.jpg';
import insta2 from '../../assets/img/ig/2.jpg';
import insta3 from '../../assets/img/ig/3.jpg';
import insta4 from '../../assets/img/ig/4.jpg';
import insta5 from '../../assets/img/ig/5.jpg';
import insta6 from '../../assets/img/ig/6.jpg';

const instapost = [
    {
        photo: insta1,
    },
    {
        photo: insta2,
    },
    {
        photo: insta3,
    },
    {
        photo: insta4,
    },
    {
        photo: insta5,
    },
    {
        photo: insta6,
    },
]
class Instaone extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col-lg-4 primary-bg pattern-bg">
                    <div className="andro_instagram">
                        <h3 className="text-white">Follow Us On Instagram</h3>
                        <Link to="#" className="andro_btn-custom light">Follow Us</Link>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row no-gutters">
                        {instapost.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-4 col-sm-4 col-6 p-0">
                                <Link to="#" className="andro_ig-item">
                                    <img src={item.photo} alt="ig" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default Instaone;