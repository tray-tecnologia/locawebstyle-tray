import React from 'react';

import ItemsTableHead from './ItemsTableHead.jsx';
import ItemsTableBody from './ItemsTableBody.jsx';

class ItemsTable extends React.Component {
    render() {
        return (
            <table className="ls-table ls-no-hover">
                <ItemsTableHead />
                <ItemsTableBody items={this.props.items} />
            </table>
        );
    }
} 

export default ItemsTable;