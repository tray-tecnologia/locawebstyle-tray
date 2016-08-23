import React from 'react';

import ItemsEmpty from './ItemsEmpty.jsx';

import ItemsFilterFields from './ItemsFilterFields.jsx';

const ItemsTable = React.createClass({
    render() {
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
            return (
                <tbody>
                    <tr>
                        <td className="ls-txt-center" colSpan="8">Nenhum item encontrado.</td>
                    </tr>
                </tbody>
            );
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
                    <input type="checkbox" data-checkbox-toggle="items-table" />
                </td>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.status ? 'Ativo' : 'Inativo'}</td>
                <td>
                    <a className="ls-ico-external" href={this.props.item.url}>{this.props.item.name}</a>
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

    /**
     * Get initial state of component
     */
    getInitialState() {
        return {
            filters: {
                id: '',
                name: '',
                status: '',
            },
            items: [],
            filteredItems: [],
        };
    },

    /**
     * When user filter some data
     */
    onFilterInput(filters, isFiltering = false) {
        this.setState({
            filters: filters,
        }, function() {
            this.filterItems();
        }.bind(this));
    },

    /**
     * Load items from backend
     */
    addItems() {
        $.get('http://www.mocky.io/v2/57b6113a0f0000b515ae6fdd', (response) => {
            this.setState({ items: response.items });
        });
    },

    /**
     * Reset filters
     */
    resetFilters() {
        this.setState({ filters: this.getInitialState().filters }, function() {
            this.filterItems();
        }.bind(this));
    },

    /**
     * Reset items
     */
    removeItems() {
        this.setState({ items: [] });
    },

    /**
     * Filter items
     */
    filterItems() {
        let filters = this.state.filters;
        let items = this.state.items;

        var filteredItems = items.filter(function(item) {
            item = this.filterItemById(filters.id, item);
            item = this.filterItemByName(filters.name, item);
            item = this.filterItemByStatus(filters.status, item);

            if (item) {
                return item;
            }
        }.bind(this));

        this.setState({ filteredItems: filteredItems });
    },

    /**
     * Filter items by id
     * @param {integer} id - Id of the item
     * @param {object}  item - Item
     * @return {object|undefined}  Returns the item if pass in the filter or undefined if fail
     */
    filterItemById(id, item) {
        if (!item) {
            return;
        }

        if (!id || id == item.id) {
            return item;
        }
    },

    /**
     * Filter items by name
     * @param {string} name - Name of the item
     * @param {object} item - Item
     * @return {object|undefined}  Returns the item if pass in the filter or undefined if fail
     */
    filterItemByName(name, item) {
        if (!item) {
            return;
        }

        if (!name || item.name.indexOf(name) !== -1) {
            return item;
        }
    },

    /**
     * Filter items by status
     * @param {string} status - Status of the item
     * @param {object} item - Item
     * @return {object|undefined}  Returns the item if pass in the filter or undefined if fail
     */
    filterItemByStatus(status, item) {
        if (!item) {
            return;
        }

        var strStatus = item.status ? 'active' : 'inactive';
        if (!status || strStatus === status) {
            return item;
        }
    },

    /**
     * Check if user is filtering
     * @return {boolean}
     */
    isFiltering() {
        return JSON.stringify(this.state.filters) !== JSON.stringify(this.getInitialState().filters);
    },

    /**
     * Render the component
     */
    render() {
        if (!this.state.items || !this.state.items.length) {
            return (
                <div>
                    <ItemsEmpty addItems={this.addItems} />
                </div>
            );
        }

        var items = this.isFiltering() ? this.state.filteredItems : this.state.items;

        return (
            <div>
                <ItemsFilterFields filters={this.state.filters} resetFilters={this.resetFilters} onFilterInput={this.onFilterInput} />
                <ItemsTable items={items} />
            </div>
        );
    }
});

export { FilterableItemsTable };
