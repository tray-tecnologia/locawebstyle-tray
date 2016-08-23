import React from 'react';

const ItemsFilterFields = React.createClass({

    /**
     * When the user change some filter
     */
    handleChange(event) {
        event.nativeEvent.preventDefault();

        this.props.onFilterInput({
            id: this.refs.filtersId.value,
            name: this.refs.filtersName.value,
            status: this.refs.filtersStatus.value,
        });
    },

    /**
     * Renders the component
     */
    render () {
        return (
            <div className="ls-box-filter">
                <form className="ls-form ls-form-horizontal" data-ls-module="form" onSubmit={this.handleChange}>
                    <fieldset>
                        <div className="row ls-sm-margin-bottom">
                            <label className="ls-label col-md-3 col-xs-12">
                                <b className="ls-label-text">Código ou referência</b>
                                <input
                                    className="ls-field"
                                    ref="filtersId"
                                    type="text"
                                    name="id"
                                    placeholder="Ex: 1234"
                                />
                            </label>
                            <label className="ls-label col-md-3 col-xs-12">
                                <b className="ls-label-text">Status</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="status"
                                        ref="filtersStatus"
                                    >
                                        <option value="">Todos</option>
                                        <option value="active">Ativo</option>
                                        <option value="inactive">Inativo</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-4 col-xs-12">
                                <b className="ls-label-text">Nome do item</b>
                                <input
                                    className="ls-field"
                                    name="name"
                                    placeholder="Ex: Camiseta"
                                    type="text"
                                    ref="filtersName"
                                />
                            </label>
                            <div className="col-md-2 visible-md visible-lg ls-md-margin-bottom">
                                <button className="ls-btn" type="submit">Filtrar</button>
                                <div data-ls-module="dropdown" className="ls-dropdown ls-no-margin-top">
                                    <button className="ls-btn"></button>
                                    <ul className="ls-dropdown-nav">
                                        <li><a className="ls-color-danger" onClick={this.props.resetFilters}>Limpar filtro</a></li>
                                    </ul>
                                </div>
                            </div>
                            <label className="ls-label col-md-3 col-xs-12">
                                <b className="ls-label-text">Categoria</b>
                                <div className="ls-custom-select">
                                    <select className="ls-select" name="" id="">
                                        <option value="">Todas</option>
                                        <option value="Principal">Principal</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-3 col-xs-12">
                                <b className="ls-label-text">Estoque</b>
                                <div className="ls-custom-select">
                                    <select className="ls-select" name="" id="">
                                        <option value="0">Todos</option>
                                        <option value="1">Maior que 0</option>
                                        <option value="2">Igual a 0</option>
                                        <option value="3">Menor que 0</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Preço inicial</b>
                                <div className="ls-prefix-group">
                                    <span className="ls-label-text-prefix">R$</span>
                                    <input className="ls-mask-money" type="text" name="price_start" />
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Preço final</b>
                                <div className="ls-prefix-group">
                                    <span className="ls-label-text-prefix">R$</span>
                                    <input className="ls-mask-money" type="text" name="price_end" />
                                </div>
                            </label>
                            <div className="col-md-2 hidden-md hidden-lg ls-md-margin-bottom ls-txt-right">
                                <button className="ls-btn" type="submit">Filtrar</button>
                                <div data-ls-module="dropdown" className="ls-dropdown ls-no-margin-top">
                                    <button className="ls-btn"></button>
                                    <ul className="ls-dropdown-nav">
                                        <li><a className="ls-color-danger" onClick={this.props.resetFilters}>Limpar filtro</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
});

export default ItemsFilterFields;
