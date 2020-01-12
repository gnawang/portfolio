import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './pages/Home';
import NavigationBar from './modules/NavigationBar';
import Footer from './modules/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Route name="home" exact path="/" component={Home} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;