import React from 'react';

import ItemsActions from './ItemsActions.jsx';
import ItemsEmpty from './ItemsEmpty.jsx';
import ItemsTable from './ItemsTable.jsx';
import ItemsFilterFields from './ItemsFilterFields.jsx';

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
                category: '',
                stock: '',
                price_start: '',
                price_end: '',
                attribute: '',
                brand: '',
                has_variants: '',
                has_images: '',
            },
            items: [],
            filteredItems: [],
        };
    },

    /**
     * When user filter some data
     */
    onFilterInput(filters) {
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
        this.onFilterInput(this.getInitialState().filters);
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

        let filteredItems = items.filter(function(item) {
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

        let strStatus = item.status ? 'active' : 'inactive';
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

    onSelectItem(event) {
        const ALL_ITEMS = 0;
        let itemID = event.currentTarget.getAttribute('data-item-id');
        let selected = event.currentTarget.checked;

        let itemsUpdated = this.state.items.map((item) => {
            if (item.id == itemID || itemID == ALL_ITEMS) {
                item.selected = selected;
            }

            return item;
        });

        this.setState({ items: itemsUpdated });
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

        let items = this.isFiltering() ? this.state.filteredItems : this.state.items;

        return (
            <div>
                <ItemsActions />
                <ItemsFilterFields filters={this.state.filters} resetFilters={this.resetFilters} onFilterInput={this.onFilterInput} />
                <ItemsTable items={items} onSelectItem={this.onSelectItem} />
            </div>
        );
    }
});

export default FilterableItemsTable;
