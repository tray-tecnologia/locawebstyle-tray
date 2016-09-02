import React from 'react';

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

        let unselectedItemsTable = null;

        let items = this.props.items.filter((element) => {
            return !element.selected;
        }).map((element, index) => {
            if (element.selected) {
                return null;
            }

            return (
                <tr key={index}>
                    <td className="ls-text-sm">{element.id} - {element.name}</td>
                    <td className="ls-text-sm ls-txt-right">R$ 99,00</td>
                    <td className="ls-text-sm ls-txt-right">
                        <a href="#" aria-label="Ver imagem do produto" className="ls-text-xl ls-sm-margin-right ls-tooltip-left">
                            <span className="ls-ico-images"></span>
                        </a>
                        <button className="ls-btn-xs ls-btn-primary" onClick={this.onSelect.bind(this)} data-item-id={element.id}>Selecionar</button>
                    </td>
                </tr>
            );
        });

        if (items.length > 0) {
            unselectedItemsTable = (
                <table className="ls-table ls-table-striped ls-table-bordered ls-lg-margin-bottom">
                    <tbody>
                        {items}
                    </tbody>
                </table>
            );
        }

        let selectedItems = this.props.items.filter((element) => {
            return element.selected;
        }).map((element, index) => {
            return (
                <tr key={index}>
                    <td className="ls-text-sm">{element.id} - {element.name}</td>
                    <td className="ls-text-sm ls-txt-right">R$ 99,00</td>
                    <td className="ls-text-sm ls-txt-right">
                        <a href="#" aria-label="Ver imagem do produto" className="ls-text-xl ls-sm-margin-right ls-tooltip-left">
                            <span className="ls-ico-images"></span>
                        </a>
                        <button className="ls-btn-xs ls-btn-danger" onClick={this.onRemove.bind(this)} data-item-id={element.id}>Remover</button>
                    </td>
                </tr>
            );
        });

        let selectedItemsTable = null;

        if (selectedItems.length > 0) {
            selectedItemsTable = (
                <div>
                    <h5>Produtos selecionados</h5>
                    <table className="ls-table ls-table-striped ls-table-bordered ls-no-margin-bottom">
                        <tbody>
                            {selectedItems}
                        </tbody>
                    </table>
                </div>
            );
        }

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

                {unselectedItemsTable}

                {selectedItemsTable}
            </div>
        );
    }
}
