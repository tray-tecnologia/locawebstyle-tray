import React from 'react';

import ItemsEmpty from './items_empty.jsx';

import ItemsFilterFields from './ItemsFilterFields.jsx';

const ItemsTable = React.createClass({
    render() {
        if (!this.props.items || !this.props.items.length) {
            return (
                <div>
                    <ItemsEmpty addItems={this.addItems} />
                </div>
            );
        }

        return (
            <div>
                <table className="ls-table ls-no-hover">
                    <ItemsTableHead />
                    <ItemsTableBody items={this.props.items} />
                </table>
            </div>
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

    componentDidMount() {
        locastyle.init();
    }

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

const FilterableItemsTable = React.createClass({

    getInitialState() {
        return {
            filters: {
                code: '',
                status: '',
                name: '',
                price_start: '',
                price_end: '',
            },
            items: [],
        };
    },

    addItems() {
        $.get('http://www.mocky.io/v2/57b6113a0f0000b515ae6fdd', (response) => {
            this.setState({ items: response.items });
        });
    },

    removeItems() {
        this.setState({ items: [] });
    },


    setFilter(e, b, c) {
        console.log(e, b, c);
    },

    render() {
        if (!this.state.items || !this.state.items.length) {
            return (
                <div>
                    <ItemsEmpty addItems={this.addItems} />
                </div>
            );
        }

        return (
            <div>
                <ItemsFilterFields />
                <ItemsTable items={this.state.items} />
            </div>
        );
    }
});

export { FilterableItemsTable };
