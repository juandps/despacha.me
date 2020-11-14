import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Breadcrumb extends Component {
    render() {
        return (
            <div className="andro_subheader pattern-bg primary-bg">
                <div className="container">
                    <div className="andro_subheader-inner">
                        <h1>Shop v2 (Full Width)</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Shop v2 (Full Width)</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}

export default Breadcrumb;