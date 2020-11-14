import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Homeblogsidebar';
import Masonry from 'react-masonry-component';

import img1 from '../../../assets/img/blog/11.jpg';
import img2 from '../../../assets/img/blog/2.jpg';
import img3 from '../../../assets/img/blog/3.jpg';
import img4 from '../../../assets/img/blog/4.jpg';
import img5 from '../../../assets/img/blog/10.jpg';
import img6 from '../../../assets/img/blog/5.jpg';

const blogpost = [
  {
    photo: img1,
    url: "/blog-detail",
    title: "Difference Is In the Soil",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    postdate: "May 20, 2021",
    urltext: "Read More",
  },
  {
    photo: img2,
    url: "/blog-detail",
    title: "Planting Season Begins",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    postdate: "May 20, 2021",
    urltext: "Read More",
  },
  {
    photo: img3,
    url: "/blog-detail",
    title: "Freshly Picked Organics",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    postdate: "May 20, 2021",
    urltext: "Read More",
  },
  {
    photo: img4,
    url: "/blog-detail",
    title: "Make The Perfect Basket",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    postdate: "May 20, 2021",
    urltext: "Read More",
  },
  {
    photo: img5,
    url: "/blog-detail",
    title: "Avocado Tips & Tricks",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    postdate: "May 20, 2021",
    urltext: "Read More",
  },
  {
    photo: img6,
    url: "/blog-detail",
    title: "Into the Blueberry Season",
    para: "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    postdate: "May 20, 2021",
    urltext: "Read More",
  },
]
class Blogpost extends Component {
  render() {
    const imagesLoadedOptions = {
      itemSelector: '.masonry-item',
    }
    return (
      <div className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4 className="title">Latest News</h4>
              </div>
              <Masonry className="row masonry" imagesLoadedOptions={imagesLoadedOptions}>
                {blogpost.map((item, i) => (
                  <div key={i} className="col-lg-6 col-md-6 masonry-item">
                    <article className="andro_post">
                      <div className="andro_post-thumb">
                        <Link to={item.url}>
                          <img src={item.photo} alt="post" />
                        </Link>
                      </div>
                      <div className="andro_post-body">
                        <div className="andro_post-categories">
                          <Link to={item.url}>Food</Link>
                          <Link to={item.url}>Veg</Link>
                        </div>
                        <div className="andro_post-desc">
                          <h5> <Link to={item.url}>{item.title}</Link> </h5>
                          <span> <span className="fw-600">Posted On</span> <Link to={item.url} className="andro_post-date">{item.postdate}</Link> </span>
                          <p>{item.para}</p>
                        </div>
                        <Link className="andro_btn-custom btn-block" to={item.url}> {item.urltext} </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </Masonry>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogpost;