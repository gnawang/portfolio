import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPassport } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faPassport);

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default App;