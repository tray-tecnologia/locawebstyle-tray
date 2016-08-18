import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Layouts
import App from '../layout/app.jsx';

// Pages
import Home from '../pages/home.jsx';
import Items from '../pages/items.jsx';

// Routes
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="items" component={Items} />
    </Route>
  </Router>
), document.getElementById('app'))
