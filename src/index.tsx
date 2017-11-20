import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './containers/App';

const history = createBrowserHistory();

const AppComcponent = <App name="Helgo" age={55}/>

ReactDOM.render(
    <Router history={history}>
      <Switch>
        <Route path="/" component={() => <App name="Marvin" age={44}/>} />
      </Switch>
    </Router>,
  document.getElementById('root')
);
