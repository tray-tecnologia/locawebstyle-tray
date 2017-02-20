import React from 'react';

export default class UnselectedItems extends React.Component {
    render() {
        let items = this.props.items.filter((element) => {
            return !element.selected;
        }).map((element, index) => {
            if (element.selected) {
                return null;
            }

            return (
                <tr className={!element.available ? 'ls-background-danger' : ''} key={index}>
                    <td className="ls-text-sm">
                        {element.id} - {element.name}
                    </td>
                    <td className="ls-text-sm ls-txt-right ls-width-150">R$ 99,00</td>
                    <td className="ls-text-sm ls-txt-right ls-width-150">
                        <span aria-label="Ver imagem do produto" className="ls-display-inline-block ls-tooltip-left">
                            <i className="ls-ico-images ls-text-xl ls-sm-margin-right"></i>
                        </span>
                        <button className="ls-btn-xs ls-btn ls-btn-primary" onClick={this.props.onSelect} data-item-id={element.id}>
                            Selecionar
                        </button>
                    </td>
                </tr>
            );
        });

        if (this.props.hasSelectedItems && !this.props.multi) {
            return null
        }

        let style = {
            height: '230px',
            overflow: 'scroll'
        };

        if (!items.length) {
            return null
        }

        return (
            <div className={this.props.hasSelectedItems ? 'ls-md-margin-bottom' : ''} style={items.length > 4 ? style : {}}>
                <table className="ls-table ls-table-striped ls-table-bordered ls-no-margin">
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}
