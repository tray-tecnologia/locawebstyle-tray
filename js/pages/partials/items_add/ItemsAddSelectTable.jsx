import React from 'react';

import UnselectedItems from './UnselectedItems.jsx';
import SelectedItems from './SelectedItems.jsx';

export default class ItemsAddSelectTable extends React.Component {

    onSelect(event) {
        event.nativeEvent.preventDefault();
        this.props.onSelect(
            event.nativeEvent.target.getAttribute('data-item-id')
        );
    }

    onRemove(event) {
        event.nativeEvent.preventDefault();
        this.props.onRemove(
            event.nativeEvent.target.getAttribute('data-item-id')
        );
    }

    render() {
        return (
            <div className="ls-box">
                <h5>Lista de produtos</h5>
                <div className="ls-box-filter">
                    <fieldset className="ls-form ls-form-inline">

                        <label className="ls-label col-sm-5">
                            <input className="ls-field" type="text" placeholder="Código ou referência" name="products[filters][code]" />
                        </label>

                        <label className="ls-label col-sm-5">
                            <input className="ls-field" type="text" placeholder="Nome do produto" name="products[filters][code]" />
                        </label>

                    </fieldset>
                </div>

                <UnselectedItems items={this.props.items} onSelect={this.onSelect.bind(this)} />

                <SelectedItems items={this.props.items} onRemove={this.onRemove.bind(this)} />
            </div>
        );
    }
}
