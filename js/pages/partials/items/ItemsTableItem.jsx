import React from 'react';

class ItemsTableItem extends React.Component {
    render() {
        if (!this.props.item) {
            throw new Error('Prop "item" is missing!');
        }

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
                    <button className="ls-btn">
                        <span className="ls-ico-list"></span>
                    </button>
                </td>
            </tr>
        );
    }
};

export default ItemsTableItem;