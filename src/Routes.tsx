import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Today from 'Pages/Today/Today';
import DjStation from 'Pages/DjStation/DjStation';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Today} />
          <Route exact path="/dj_station" component={DjStation} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    );
  }
}
