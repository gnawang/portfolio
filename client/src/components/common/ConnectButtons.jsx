import React, { Component } from 'react';
import CircularButton from './CircleButton';

class ConnectButtons extends Component {
    render() {
        return (
            <div className="connectButtons">
                <CircularButton icon={'envelope'} link={'mailto:gnawang@umich.edu'} />
                <CircularButton icon={['fab', 'linkedin']} link={'https://www.linkedin.com/in/gnawang/'} />
                <CircularButton icon={['fab', 'github']} link={'https://github.com/gnawang'} />
                <CircularButton icon={['fas', 'passport']} link={'/static/files/alexander_wang_resume.pdf'} />
            </div>
        );
    }
}

export default ConnectButtons;
