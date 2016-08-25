import React from 'react';

import ItemsTableItem from './ItemsTableItem.jsx';

class ItemsTableBody extends React.Component {

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