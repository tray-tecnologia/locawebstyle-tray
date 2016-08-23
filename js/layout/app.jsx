import React from 'react';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Sidebar />
        <main className="ls-main">
          <div className="container-fluid">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
