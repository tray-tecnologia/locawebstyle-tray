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

    render() {
        return (
            <div>
                <Breadcrumb title="Incluir Item" />
                <Alert message={this.state.alert.message} title={this.state.alert.title} type={this.state.alert.type} dismissable="true" />
            </div>
        );
    }
}

export default ItemsAdd;
