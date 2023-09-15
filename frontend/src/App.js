import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import Homepage from './views/Homepage';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './views/Navbar';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <Route exact path="/home" component={Homepage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/home" />
        </Switch>
      </AuthProvider> 
    </Router>
  );
}

export default App;
