import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import store from '../store/Stores.jsx';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Alert from '../components/Alert.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Sidebar router={this.props.router} />
                <main className="ls-main">
                    <div className="container-fluid ls-lg-margin-bottom">
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }

}

export default withRouter(App);
