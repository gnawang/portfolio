import React, { Component } from 'react';
import TEXT from '../../const/text';

class Banner extends Component {
    render() {
        return (
            <div className="module fullscreen">
                <div className="banner">
                    <h1>{TEXT.GREETING}</h1>
                </div>
            </div>
        );
    }
}

export default Banner;