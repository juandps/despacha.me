import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Cta extends Component {
  render() {
    return (
      <div className="section pt-0">
        <div className="andro_cta-notice secondary-bg pattern-bg rounded-0">
          <div className="container">
            <div className="andro_cta-notice-inner">
              <h3 className="text-white">Buy Today and Get 20% Off</h3>
              <p className="text-white">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
              <Link to="#" className="andro_btn-custom light">Comprar Ahora</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cta;