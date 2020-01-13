import React, { Component } from 'react';
import CircularButton from './CircleButton';

class ConnectButtons extends Component {
    render() {
        return (
            <div className="connectButtons">
                <CircularButton icon={'envelope'} link={'https://www.google.com'} />
                <CircularButton icon={['fab', 'linkedin']} link={'https://www.linkedin.com/mynetwork/'} />
                <CircularButton icon={['fab', 'github']} link={'https://www.github.com/gnawang'} />
                <CircularButton icon={['fas', 'passport']} link={'/static/files/AlexanderWang2018.pdf'} />
            </div>
        );
    }
}

export default ConnectButtons;