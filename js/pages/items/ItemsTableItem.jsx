import React from 'react';

class ItemsTableItem extends React.Component {
    render() {
        if (!this.props.item) {
            throw new Error('Prop "item" is missing!');
        }

        return (
            <tr>
                <td>
                    <input checked={this.props.item.selected} type="checkbox" data-item-id={this.props.item.id} data-checkbox-toggle="items-table" onChange={this.props.onSelectItem} />
                </td>
                <td>{this.props.item.id}</td>
                <td>
                    <a className="ls-ico-external" href={this.props.item.url}>{this.props.item.name}</a>
                </td>
                <td>{this.props.item.category}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.stock}</td>
                <td className={'ls-txt-center ls-width-100 ' + (this.props.item.status ? 'ls-background-success': 'ls-background-danger')}>
                    {this.props.item.status ? 'Ativo' : 'Inativo'}
                </td>
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