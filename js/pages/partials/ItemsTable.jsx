import React from 'react';

import ItemsTableHead from './ItemsTableHead.jsx';
import ItemsTableBody from './ItemsTableBody.jsx';

class ItemsTable extends React.Component {
    render() {
        if (!this.props.items.length) {
            return (
                <div>
                    <p>Nenhum item encontrado com esses filtros.</p>
                </div>
            );
        }

        return (
            <table className="ls-table ls-no-hover">
                <ItemsTableHead />
                <ItemsTableBody items={this.props.items} />
            </table>
        );
    }
} 

export default ItemsTable;