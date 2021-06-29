import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Home' component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
      
    </>
  );
}

export default App;
