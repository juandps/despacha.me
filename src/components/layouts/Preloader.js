import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSuccess: false
        }
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({
                fetchSuccess: true
            });
        });
    }
    render() {
        const classNamess = this.state.fetchSuccess ? 'hidden' : '';
        return (
            <div className={`andro_preloader ${classNamess}`}>
                <div className="spinner">
                    <div className="dot1" />
                    <div className="dot2" />
                </div>
            </div>

        );
    }
}

export default Preloader;