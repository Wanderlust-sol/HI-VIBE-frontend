import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Today from 'Pages/Today/Today';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Today} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    );
  }
}
