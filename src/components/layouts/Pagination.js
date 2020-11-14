import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Pagination extends Component {
    render() {
        return (
            <ul className="pagination mb-0">
                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item active">
                    <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                </li>
                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            </ul>
        );
    }
}

export default Pagination;