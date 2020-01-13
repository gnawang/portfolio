import React, { Component } from 'react';
import ConnectButtons from '../common/ConnectButtons';
import TEXT from '../../const/text';

class BusinessCard extends Component {
    render() {
        return (
            <div className="module halfscreen">
                <div className="businessCard">
                    <div className="card">
                        <div className="cardContent">
                            <h1>{TEXT.NAME}</h1>
                            <p>{TEXT.SLOGAN}</p> 
                        </div>
                        <div className="cardFooter">
                            <p>{TEXT.CONNECT}</p>
                            <ConnectButtons />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BusinessCard;