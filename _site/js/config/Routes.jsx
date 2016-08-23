import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Layouts
import App from '../layout/App.jsx';

// Pages
import HomePage from '../pages/Home.jsx';
import ItemsPage from '../pages/Items.jsx';
import AppsPage from '../pages/Apps.jsx';

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
