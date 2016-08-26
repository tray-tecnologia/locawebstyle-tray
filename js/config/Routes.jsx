import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Layouts
import App from '../layout/App.jsx';

// Pages
import HomePage from '../pages/Home.jsx';
import ItemsPage from '../pages/Items.jsx';
import ItemsAddPage from '../pages/ItemsAdd.jsx';
import AppsPage from '../pages/Apps.jsx';

// Routes
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute name="home" component={HomePage} />
      <Route path="items" name="items" component={ItemsPage} />
      <Route path="items/add" component={ItemsAddPage} />
      <Route path="apps" name="apps" component={AppsPage} />
    </Route>
  </Router>
), document.getElementById('app'));
