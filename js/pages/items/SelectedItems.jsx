import React from 'react';

export default class SelectedItems extends React.Component {
    render() {
        let items = this.props.selectedItems.map((element, index) => {
            return (
                <tr className={!element.available ? 'ls-background-danger' : ''} key={index}>
                    <td className="ls-text-sm">{element.id} - {element.name}</td>
                    <td className="ls-text-sm ls-txt-right ls-width-150">R$ 99,00</td>
                    <td className="ls-text-sm ls-txt-right ls-width-150">
                        <span aria-label="Ver imagem do produto" className="ls-display-inline-block ls-tooltip-left">
                            <i className="ls-ico-images ls-text-xl ls-sm-margin-right"></i>
                        </span>
                        <button className="ls-btn-xs ls-btn-danger" onClick={this.props.onRemove} data-item-id={element.id}>
                            {this.props.multi ? 'Remover' : 'Alterar'}
                        </button>
                    </td>
                </tr>
            );
        });

        if (!items.length) {
            return null;
        }

        let style = {
            height: '230px',
            overflow: 'scroll'
        };

        return (
            <div>
                <h5 className="ls-md-margin-bottom">{items.length > 1 ? 'Itens selecionados' : 'Item selecionado'}</h5>
                <div style={items.length > 4 ? style : {}}>
                    <table className="ls-table ls-table-striped ls-table-bordered ls-no-margin">
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
