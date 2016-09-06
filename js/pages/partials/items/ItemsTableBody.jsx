import React from 'react';

import ItemsTableItem from './ItemsTableItem.jsx';

class ItemsTableBody extends React.Component {

    render() {
        let itemsNodes = this.props.items.map((item) => {
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

export default ItemsTableBody;
