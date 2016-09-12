import React from 'react';

export default class ItemsSelectedActions extends React.Component {

    getSelectedItems(items) {
        let selected = items.filter((item) => {
            return item.selected == true;
        });

        return selected;
    }

    render() {
        let items = this.getSelectedItems(this.props.items);

        if (!items || !items.length > 0) {
            return null;
        }

        return(
            <div className="ls-box-filter ls-position-fixed ls-full-width">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="ls-sm-margin-top">{items.length > 1 ? items.length + ' itens selecionados' : items.length + ' item selecionado'}</p>
                    </div>
                    <div className="col-sm-6 ls-txt-right">
                        <button className="ls-btn">Ação em massa</button>
                    </div>
                </div>
            </div>
        );
    }

}
