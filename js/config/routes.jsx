import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Layouts
import App from '../layout/app.jsx';

// Pages
import HomePage from '../pages/home.jsx';
import ItemsPage from '../pages/items.jsx';
import AppsPage from '../pages/apps.jsx';

// Routes
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="items" component={ItemsPage} />
      <Route path="apps" component={AppsPage} />
    </Route>
  </Router>
), document.getElementById('app'))
