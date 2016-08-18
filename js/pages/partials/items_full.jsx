import React from 'react';

import ItemsEmpty from './items_empty.jsx';

const ItemsTable = React.createClass({
    getInitialState() {
        return {
            items: [],
        };
    },

    addItems() {
        let items = [
            { id: 1, name: 'Item 1', status: true, url: '/item/1', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 2, name: 'Item 2', status: false, url: '/item/2', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 3, name: 'Item 3', status: true, url: '/item/3', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 4, name: 'Item 4', status: false, url: '/item/4', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 5, name: 'Item 5', status: true, url: '/item/5', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 6, name: 'Item 6', status: true, url: '/item/1', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 7, name: 'Item 7', status: false, url: '/item/2', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 8, name: 'Item 8', status: true, url: '/item/3', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 9, name: 'Item 9', status: false, url: '/item/4', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 10, name: 'Item 10', status: true, url: '/item/5', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 11, name: 'Item 11', status: true, url: '/item/1', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 12, name: 'Item 12', status: false, url: '/item/2', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 13, name: 'Item 13', status: true, url: '/item/3', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 14, name: 'Item 14', status: false, url: '/item/4', category: 'Imediato', price: 9.99, stock: 1000 },
            { id: 15, name: 'Item 15', status: true, url: '/item/5', category: 'Imediato', price: 9.99, stock: 1000 },
        ];

        this.setState({ items: items });
    },

    render() {
        if (!this.state.items.length) {
            return (
                <div>
                    <ItemsEmpty addItems={this.addItems} />
                </div>
            );
        }

        return (
            <table className="ls-table ls-no-hover">
                <ItemsTableHead />
                <ItemsTableBody items={this.state.items} />
            </table>
        );
    }
})

class ItemsTableHead extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th className="ls-width-50">
                        <input type="checkbox" data-ls-module="checkboxToggle" data-checkbox-target="items-table"/>
                    </th>
                    <th>Código</th>
                    <th>Status</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
}

class ItemsTableBody extends React.Component {
    render() {
        if (!this.props.items || !this.props.items.length) {
            return null;
        }

        var itemsNodes = this.props.items.map((item) => {
            return (
                <ItemsTableItem item={item} key={item.id} />
            );
        });

        return (
            <tbody>
                {itemsNodes}
            </tbody>
        );
    }
};

class ItemsTableItem extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <input type="checkbox" data-checkbox-toggle="items-table" onChange={this.handleChange} />
                </td>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.status ? 'Ativo' : 'Inativo'}</td>
                <td>
                    <a className="ls-ico-external" href="{this.props.item.url}">{this.props.item.name}</a>
                </td>
                <td>{this.props.item.category}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.stock}</td>
                <td className="ls-txt-right">
                    <a href="#" className="ls-btn-default ls-display-none">Detalhes</a>
                    <div data-ls-module="dropdown" className="ls-dropdown">
                        <button className="ls-btn"></button>
                        <ul className="ls-dropdown-nav">
                            <li><a href="#">Editar</a></li>
                            <li><a href="#">Duplicar</a></li>
                            <li><a className="ls-text-danger" href="#">Excluir</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        );
    }
};

class ItemsFilter extends React.Component {
    render() {
        return null;
    }
    /*
    render() {
        return (
            <fieldset>
                <label className="ls-label col-md-4 col-xs-12">
                    <b className="ls-label-text">Código ou referência</b>
                    <input type="text" name="nome" placeholder="Ex: 1234" className="ls-field" required />
                </label>
                <label className="ls-label col-md-3 col-xs-12">
                    <b className="ls-label-text">Status</b>
                    <div className="ls-custom-select">
                        <select className="ls-select" name="" id="">
                            <option value="">Todos</option>
                            <option value="">Ativo</option>
                            <option value="">Inativo</option>
                        </select>
                    </div>
                </label>
                <label className="ls-label col-md-4 col-xs-12">
                    <b className="ls-label-text">Nome do produto</b>
                    <input type="text" name="nome" placeholder="Ex: Smartphone novo" className="ls-field" required />
                </label>
                <label className="ls-label col-md-3 col-xs-12">
                    <b className="ls-label-text">Categoria</b>
                    <div className="ls-custom-select">
                        <select className="ls-select" name="" id="">
                            <option value="">Todas</option>
                            <option value="">Acessórios</option>
                            <option value="">Calçados</option>
                        </select>
                    </div>
                </label>
            </fieldset>
        );
    }
    */
};

export { ItemsTable, ItemsTableHead, ItemsTableBody, ItemsTableItem };
