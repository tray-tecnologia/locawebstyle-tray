import React from 'react';

class ItemsTableHead extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th className="ls-width-50">
                        <input type="checkbox" data-item-id="0" onChange={this.props.onSelectItem} data-ls-module="checkboxToggle" data-checkbox-target="items-table"/>
                    </th>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th className="ls-txt-center ls-width-100">Status</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default ItemsTableHead;