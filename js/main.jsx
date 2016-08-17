import React from 'react';
import {render} from 'react-dom';

import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
