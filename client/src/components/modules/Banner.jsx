import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="module fullscreen">
                <div className="banner">
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default Banner;