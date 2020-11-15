import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Author
import author from '../../assets/img/people/4.jpg';
// Recentpost
import post1 from '../../assets/img/blog/5.jpg';
import post2 from '../../assets/img/blog/3.jpg';
import post3 from '../../assets/img/blog/4.jpg';

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
    {
        photo:post3,
        title:"Make The Perfect Basket",
        postdate:"May 20, 2021",
        url:"/blog-single",
    },
]
class Blogsidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* About Author Start */}
                <div className="sidebar-widget widget-about-author">
                    <div className="widget-about-author-inner">
                        <img src={author} alt="author" />
                        <h5>Jina Flock</h5>
                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                        <Link to="/blog-grid" className="andro_btn-custom btn-block">View All Posts</Link>
                    </div>
                    <ul className="andro_sm">
                        <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                        <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                        <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                        <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                    </ul>
                </div>
                {/* About Author End */}
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
                            <Link to="/blog-single"> Frutas <span>(32)</span> </Link>
                            <ul>
                                <li> <Link to="/blog-single">Vegetables &amp; Fruits <span>(14)</span> </Link> </li>
                                <li> <Link to="/blog-single">Dairy <span>(39)</span></Link> </li>
                                <li> <Link to="/blog-single">Vegan <span>(54)</span> </Link> </li>
                            </ul>
                        </li>
                        <li> <Link to="/blog-single"> Abarrotes <span>(24)</span> </Link> </li>
                        <li> <Link to="/blog-single"> Lácteos y Huevos <span>(44)</span> </Link> </li>
                        <li> <Link to="/blog-single"> Baby &amp; Kids Care <span>(15)</span> </Link> </li>
                    </ul>
                </div>
                {/* Categories End */}
                {/* Populares Start */}
                <div className="sidebar-widget">
                    <h5 className="widget-title">Populares</h5>
                    <div className="tagcloud">
                        <Link to="/blog-single">Health</Link>
                        <Link to="/blog-single">Frutas</Link>
                        <Link to="/blog-single">Ingredients</Link>
                        <Link to="/blog-single">Organic</Link>
                        <Link to="/blog-single">Farms</Link>
                        <Link to="/blog-single">Green</Link>
                        <Link to="/blog-single">Fiber</Link>
                        <Link to="/blog-single">Farmacia</Link>
                        <Link to="/blog-single">Gain</Link>
                        <Link to="/blog-single">Live Stock</Link>
                        <Link to="/blog-single">Harvest</Link>
                    </div>
                </div>
                {/* Populares End */}
                {/* Newsletter Start */}
                <div className="sidebar-widget">
                    <div className="andro_newsletter-form primary-bg pattern-bg">
                        <h5 className="text-white">Join our newsletter</h5>
                        <p className="text-white">Get exclusive weekly deals with our newsletter subscription</p>
                        <form method="post">
                            <div className="form-group">
                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                            </div>
                            <button type="submit" className="andro_btn-custom light btn-block" name="button">Join Newsletter</button>
                        </form>
                    </div>
                </div>
                {/* Newsletter End */}
            </div>

        );
    }
}

export default Blogsidebar;