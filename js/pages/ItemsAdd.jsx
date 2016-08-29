import React from 'react';

import Breadcrumb from '../components/Breadcrumb.jsx';
import Alert from '../components/Alert.jsx';

class ItemsAdd extends React.Component {

    constructor() {
        super();
        this.state = {
            alert: {
                message: '',
                title: '',
                type: '',
            }
        }
    }

    showAlert(options) {
        this.setState({ alert: options });
    }

    componentDidMount() {
        ls.collapse.init();
    }

    render() {
        return (
            <div>
                <Breadcrumb title="Incluir Item" />

                <form action="">
                    <div data-ls-module="collapse" data-target="#30" className="ls-collapse ls-box ls-box-gray">
                        <a href="#" className="ls-collapse-header">
                            <h3 className="ls-collapse-title">
                                Exclusivo Tray
                            </h3>
                            <p>
                                Itens de acesso exclusivo para funcionários Tray.
                            </p>
                        </a>
                        <div className="ls-collapse-body" id="30">
                            <div className="row">
                                <div className="col-md-4">
                                    <h3>Configurações</h3>
                                    <p>Configurações referentes a exibição do item.</p>
                                </div>
                                <div className="col-md-8">

                                </div>
                            </div>
                        </div>
                    </div>

                    <Alert message={this.state.alert.message} title={this.state.alert.title} type={this.state.alert.type} dismissable="true" />
                </form>

            </div>
        );
    }
}

export default ItemsAdd;
