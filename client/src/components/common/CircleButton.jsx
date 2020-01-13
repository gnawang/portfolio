import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CircleButton extends Component {
    render() {
        return (
            <a className="circularButton" href={this.props.link}>
                <FontAwesomeIcon icon={this.props.icon} fixedWidth size="2x" className="icon" />
            </a>
        );
    }
}

export default CircleButton;