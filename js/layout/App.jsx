import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { addEditable, removeEditable } from '../store/Actions.jsx';
import store from '../store/Stores.jsx';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Alert from '../components/Alert.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    /**
     * Turns on page into an editor of text
     */
    onAddEditable() {
        store.dispatch(addEditable());
    }

    /**
     * Turns off page into an editor of text
     */
    onRemoveEditable() {
        store.dispatch(removeEditable());
    }

    isEditable() {
        return store.getState().editable;
    }

    render() {
        let editable = this.isEditable();
        return (
            <div>
                <Header />
                <Sidebar router={this.props.router} />
                <main className="ls-main">
                    <div className="container-fluid ls-lg-margin-bottom" contentEditable={editable}>
                        {this.props.children}
                    </div>
                    <div className="container-fluid">
                        <button className="ls-btn" onClick={this.onAddEditable}>Habilitar edição de conteúdo</button>
                        <button className="ls-btn" onClick={this.onRemoveEditable}>Desabilitar edição de conteúdo</button>
                    </div>
                </main>
            </div>
        );
    }

}

export default withRouter(App);
