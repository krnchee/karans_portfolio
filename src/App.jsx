import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
