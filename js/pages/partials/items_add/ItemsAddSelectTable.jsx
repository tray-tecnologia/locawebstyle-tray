import React from 'react';

import UnselectedItems from './UnselectedItems.jsx';
import SelectedItems from './SelectedItems.jsx';

export default class ItemsAddSelectTable extends React.Component {

    constructor() {
        super()
        this.selectedItems = []
    }

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

    filterSelectedItems() {
        if (!this.props.items.length) {
            return false
        }

        this.selectedItems = this.props.items.filter((element) => {
            return element.selected;
        })

        return this.selectedItems
    }

    hasSelectedItems() {
        return this.selectedItems.length > 0
    }

    render() {
        let filter = null
        let noItems = null

        this.filterSelectedItems()

        if (this.props.items.length >= 11) {
            filter = (
                <div className="ls-box-filter ls-md-margin-bottom">
                    <fieldset className="ls-form ls-form-inline">

                        <label className="ls-label col-sm-5">
                            <input className="ls-field" type="text" placeholder="Código ou referência" name="products[filters][code]" />
                        </label>

                        <label className="ls-label col-sm-5">
                            <input className="ls-field" type="text" placeholder="Nome do produto" name="products[filters][code]" />
                        </label>

                    </fieldset>
                </div>
            )
        }

        if (!this.props.items.length) {
            noItems = (
                <p>
                    Nenhum item disponível
                </p>
            )
        }

        let title = (
            <h5 className="ls-title-6 ls-md-margin-bottom">Lista de itens ({this.props.items.length})</h5>
        )

        if (this.hasSelectedItems() && !this.props.multi) {
            title = null
            filter = null
        }

        return (
            <div className="ls-box">
                {title}
                {noItems}
                {filter}
                <UnselectedItems multi={this.props.multi} items={this.props.items} hasSelectedItems={this.hasSelectedItems()} onSelect={this.onSelect.bind(this)} />
                <SelectedItems selectedItems={this.selectedItems} multi={this.props.multi} items={this.props.items} onRemove={this.onRemove.bind(this)} />
            </div>
        );
    }
}
