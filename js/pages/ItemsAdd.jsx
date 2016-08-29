import React from 'react';
import { Link, withRouter } from 'react-router';

import Breadcrumb from '../components/Breadcrumb.jsx';
import Alert from '../components/Alert.jsx';

import ItemsForm from './partials/ItemsForm.jsx';

class ItemsAdd extends React.Component {

    constructor() {
        super();
        this.state = {
            alert: {
                message: '',
                title: '',
                type: '',
            },
        }
    }

    showAlert(options) {
        this.setState({ alert: options });
    }

    submitNewItem(event) {
        event.nativeEvent.preventDefault();

        this.showAlert({
            message: 'Mensagem de sucesso aqui!',
            title: 'Sucesso!',
            type: 'success',
        });

        setTimeout(() => {
            this.props.router.push('/items');
        }, 1500);
    }

    componentDidMount() {
        ls.collapse.init();
    }

    render() {
        return (
            <div>
                <Breadcrumb title="Incluir Item" />

                <form className="ls-form" onSubmit={this.submitNewItem.bind(this)}>
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

                    <ItemsForm />

                    <hr />

                    <div className="ls-txt-right">
                        <Link to="/items" className="ls-btn">Cancelar</Link>
                        <button type="submit" className="ls-btn-primary">Salvar</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(ItemsAdd);
