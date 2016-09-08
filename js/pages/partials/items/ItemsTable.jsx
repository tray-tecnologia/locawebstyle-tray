import React from 'react';

import ItemsSelectedActions from './ItemsSelectedActions.jsx';
import ItemsTableHead from './ItemsTableHead.jsx';
import ItemsTableBody from './ItemsTableBody.jsx';

class ItemsTable extends React.Component {

    componentDidMount() {
        ls.checkboxToggle.init();
    }

    render() {
        if (!this.props.items.length) {
            return (
                <div>
                    <p>Nenhum item encontrado com esses filtros.</p>
                </div>
            );
        }

        return (
            <div>
                <ItemsSelectedActions items={this.props.items} />

                <table className="ls-table ls-no-hover">
                    <ItemsTableHead onSelectItem={this.props.onSelectItem} />
                    <ItemsTableBody items={this.props.items} onSelectItem={this.props.onSelectItem} />
                </table>
            </div>
        );
    }
}

export default ItemsTable;