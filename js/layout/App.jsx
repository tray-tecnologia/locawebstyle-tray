import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { addEditable } from '../store/Actions.jsx';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Alert from '../components/Alert.jsx';

@connect((store) => {
    return {
        editable: true,
    }
})
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    toggleEditable() {
        // store.dispatch(addEditable());
    }

    render() {
        let contentEditable = this.props.editable;

        return (
            <div>
                <Header />
                <Sidebar router={this.props.router} />
                <main className="ls-main">
                    <div className="container-fluid ls-lg-margin-bottom" contentEditable={contentEditable}>
                        {this.props.children}
                    </div>
                    <div className="container-fluid">
                        <button className="ls-btn" onClick={this.toggleEditable.bind(this)}>Habilitar/desabilitar edição de conteúdo</button>
                    </div>
                </main>
            </div>
        );
    }

}

export default withRouter(App);
