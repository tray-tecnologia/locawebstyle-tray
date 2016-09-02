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
                <tr key={index}>
                    <td className="ls-text-sm">{element.id} - {element.name}</td>
                    <td className="ls-text-sm ls-txt-right ls-width-150">R$ 99,00</td>
                    <td className="ls-text-sm ls-txt-right ls-width-150">
                        <a href="#" aria-label="Ver imagem do produto" className="ls-text-xl ls-sm-margin-right ls-tooltip-left">
                            <span className="ls-ico-images"></span>
                        </a>
                        <button className="ls-btn-xs ls-btn-primary" onClick={this.props.onSelect} data-item-id={element.id}>Selecionar</button>
                    </td>
                </tr>
            );
        });

        let style = {
            height: '280px',
            overflow: 'scroll'
        };

        return (
            <div className="ls-lg-margin-bottom" style={items.length > 5 ? style : {}}>
                <table className="ls-table ls-table-striped ls-table-bordered">
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}
