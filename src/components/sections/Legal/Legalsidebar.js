import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Recentpost
import post1 from '../../../assets/img/blog/5.jpg';
import post2 from '../../../assets/img/blog/3.jpg';

const recentpost = [
    {
        photo:post1,
        title:"Avocado Tips & Tricks",
        postdate:"May 20, 2021",
        url:"/blog-single",
    },
    {
        photo:post2,
        title:"Freshly Picked Organics",
        postdate:"May 20, 2021",
        url:"/blog-single",
    },
]
class Legalsidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Recent Posts Start */}
                <div className="sidebar-widget widget-recent-posts">
                    <h5 className="widget-title">Recent Posts</h5>
                    {recentpost.map((item, i) => (
                        <article key={i} className="post">
                            <Link to={item.url}><img src={item.photo} alt="post" /></Link>
                            <h6> <Link to={item.url}>{item.title}</Link> </h6>
                            <span>Posted on <Link to={item.url}>{item.postdate}</Link> </span>
                        </article>
                    ))}
                </div>
                {/* Recent Posts End */}
                {/* Categories Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title"> Post Categories </h5>
                    <ul className="sidebar-widget-list">
                        <li>
                            <Link to="#"> Frutas <span>(32)</span> </Link>
                            <ul>
                                <li> <Link to="#">Vegetables &amp; Fruits <span>(14)</span> </Link> </li>
                                <li> <Link to="#">Dairy <span>(39)</span></Link> </li>
                                <li> <Link to="#">Vegan <span>(54)</span> </Link> </li>
                            </ul>
                        </li>
                        <li> <Link to="#"> Abarrotes <span>(24)</span> </Link> </li>
                        <li> <Link to="#"> Lácteos y Huevos <span>(44)</span> </Link> </li>
                        <li> <Link to="#"> Baby &amp; Kids Care <span>(15)</span> </Link> </li>
                    </ul>
                </div>
                {/* Categories End */}
                {/* Newsletter Start */}
                <div className="sidebar-widget">
                    <div className="andro_newsletter-form">
                        <h5>Join our newsletter</h5>
                        <p>Get exclusive weekly deals with our newsletter subscription</p>
                        <form method="post">
                            <div className="form-group">
                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                            </div>
                            <button type="submit" className="andro_btn-custom btn-block" name="button">Join Newsletter</button>
                        </form>
                    </div>
                </div>
                {/* Newsletter End */}
            </div>
        );
    }
}

export default Legalsidebar;