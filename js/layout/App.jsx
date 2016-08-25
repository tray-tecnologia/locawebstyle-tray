import React from 'react';
import { withRouter } from 'react-router';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar router={this.props.router} />
                <main className="ls-main">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(App);
