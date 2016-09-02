import React from 'react';

export default class SelectedItems extends React.Component {
    render() {

        let items = this.props.items.filter((element) => {
            return element.selected;
        }).map((element, index) => {
            return (
                <tr key={index}>
                    <td className="ls-text-sm">{element.id} - {element.name}</td>
                    <td className="ls-text-sm ls-txt-right">R$ 99,00</td>
                    <td className="ls-text-sm ls-txt-right">
                        <a href="#" aria-label="Ver imagem do produto" className="ls-text-xl ls-sm-margin-right ls-tooltip-left">
                            <span className="ls-ico-images"></span>
                        </a>
                        <button className="ls-btn-xs ls-btn-danger" onClick={this.props.onRemove} data-item-id={element.id}>Remover</button>
                    </td>
                </tr>
            );
        });

        if (!items.length) {
            return null;
        }

        let style = {
            height: '280px',
            overflow: 'scroll'
        };

        return (
            <div>
                <h5>Produtos selecionados</h5>
                <div style={items.length > 5 ? style : {}}>
                    <table className="ls-table ls-table-striped ls-table-bordered ls-no-margin-bottom">
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
