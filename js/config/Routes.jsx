import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// Store
import store from '../store/Stores.jsx';

// Layout
import App from '../layout/App.jsx';

// Pages
import HomePage from '../pages/Home.jsx';
import ItemsPage from '../pages/Items.jsx';
import ItemsAddPage from '../pages/ItemsAdd.jsx';
import AppsPage from '../pages/Apps.jsx';

// Routes
render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute name="home" component={HomePage} />
        <Route path="items" name="items" component={ItemsPage} />
        <Route path="items/add" component={ItemsAddPage} />
        <Route path="apps" name="apps" component={AppsPage} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
