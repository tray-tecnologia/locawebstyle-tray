import React from 'react';
import { withRouter } from 'react-router';

import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            contentEditable: false
        }
    }

    toggleEditable() {
        this.setState({ contentEditable: !this.state.contentEditable });
    }

    render() {
        let contentEditable = this.state.contentEditable ? true : false;

        return (
            <div>
                <Header />
                <Sidebar router={this.props.router} />
                <main className="ls-main">
                    <div className="container-fluid" contentEditable={contentEditable}>
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
