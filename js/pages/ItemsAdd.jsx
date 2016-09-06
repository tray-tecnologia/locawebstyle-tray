import React from 'react';
import { Link, withRouter } from 'react-router';

import Breadcrumb from '../components/Breadcrumb.jsx';
import Alert from '../components/Alert.jsx';

import ItemsForm from './partials/items_add/ItemsForm.jsx';

class ItemsAdd extends React.Component {

    constructor() {
        super();
        this.state = {
            alert: {
                message: '',
                title: '',
                type: '',
            },
            valid: false,
        }

        this.timeout = null;
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
        }, 4000);
    }

    change(event) {
        let valid = event.currentTarget.checkValidity();

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.setState({ valid: valid });
        }, 1000);
    }

    componentDidMount() {
        ls.collapse.init();
    }

    render() {
        let fixedBarStyle = {
            width: 'calc(100% - 325px)'
        };

        let fixedBarClasses = 'ls-alert-fixed-bottom ls-no-padding';

        if (!this.state.valid) {
            fixedBarClasses += ' ls-display-none';
        }

        return (
            <div>
                <Breadcrumb title="Incluir Item" />

                <form className="ls-form" onChange={this.change.bind(this)} onSubmit={this.submitNewItem.bind(this)}>
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

                    <ItemsForm className="ls-lg-margin-bottom" />

                    <div className={fixedBarClasses} style={fixedBarStyle}>
                        <div className="ls-box ls-box-gray ls-txt-right ls-no-margin-left ls-no-margin-right ls-float-right">
                            <Link to="/items" className="ls-btn">Cancelar</Link>
                            <button type="submit" className="ls-btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(ItemsAdd);
