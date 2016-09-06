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
            category: this.refs.filtersCategory.value,
            stock: this.refs.filtersStock.value,
            price_start: this.refs.filtersPriceStart.value,
            price_end: this.refs.filtersPriceEnd.value,
            attribute: this.refs.filtersAttribute.value,
            brand: this.refs.filtersBrand.value,
            has_variants: this.refs.filtersHasVariants.value,
            has_images: this.refs.filtersHasImages.value,
        });
    },

    componentDidMount() {
        locastyle.collapse.init();
        locastyle.form.init();
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
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Código ou referência</b>
                                <input
                                    className="ls-field"
                                    value={this.props.filters.id}
                                    onChange={this.handleChange}
                                    ref="filtersId"
                                    type="text"
                                    name="products[id]"
                                    placeholder="Ex: 1234"
                                />
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Status</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[status]"
                                        ref="filtersStatus"
                                        value={this.props.filters.status}
                                        onChange={this.handleChange}
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
                                    name="products[name]"
                                    placeholder="Ex: Camiseta"
                                    type="text"
                                    ref="filtersName"
                                    value={this.props.filters.name}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Categoria</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[category]"
                                        id="products-filters-category"
                                        ref="filtersCategory"
                                        value={this.props.filters.category}
                                        onChange={this.handleChange}
                                    >
                                        <option value="">Todas</option>
                                        <option value="Principal">Principal</option>
                                        <option value="Segundo nível">- Segundo nível</option>
                                        <option value="Terceiro nível">-- Terceiro nível</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Estoque</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[stock]"
                                        ref="filtersStock"
                                        value={this.props.filters.stock}
                                        onChange={this.handleChange}
                                    >
                                        <option value="0">Todos</option>
                                        <option value="1">Maior que 0</option>
                                        <option value="2">Igual a 0</option>
                                        <option value="3">Menor que 0</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="row ls-sm-margin-bottom">
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Preço inicial</b>
                                <div className="ls-prefix-group">
                                    <span className="ls-label-text-prefix">R$</span>
                                    <input
                                        className="ls-mask-money"
                                        type="text"
                                        name="price_start"
                                        placeholder="0,00"
                                        ref="filtersPriceStart"
                                        value={this.props.filters.price_start}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Preço final</b>
                                <div className="ls-prefix-group">
                                    <span className="ls-label-text-prefix">R$</span>
                                    <input
                                        className="ls-mask-money"
                                        type="text"
                                        placeholder="0,00"
                                        name="price_end"
                                        ref="filtersPriceEnd"
                                        value={this.props.filters.price_end}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Atributos</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[attributes]"
                                        id="products-attributes"
                                        ref="filtersAttribute"
                                        value={this.props.filters.attribute}
                                        onChange={this.handleChange}
                                    >
                                        <option value="0">Todos</option>
                                        <option value="1">Destaque</option>
                                        <option value="2">Novidades</option>
                                        <option value="3">Promoções</option>
                                        <option value="4">Frete grátis</option>
                                        <option value="5">Sob consulta</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Marcas</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[brands]"
                                        id="products-brands"
                                        ref="filtersBrand"
                                        value={this.props.filters.brand}
                                        onChange={this.handleChange}
                                    >
                                        <option value="0">Todas</option>
                                        <option value="1">Apple</option>
                                        <option value="2">Motorola</option>
                                        <option value="3">LG</option>
                                        <option value="4">Samsung</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Variações</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[variants]"
                                        id="products-variants"
                                        ref="filtersHasVariants"
                                        value={this.props.filters.has_variants}
                                        onChange={this.handleChange}
                                    >
                                        <option value="0">Ocultar</option>
                                        <option value="1">Exibir</option>
                                    </select>
                                </div>
                            </label>
                            <label className="ls-label col-md-2 col-xs-12">
                                <b className="ls-label-text">Imagem disponível</b>
                                <div className="ls-custom-select">
                                    <select
                                        className="ls-select"
                                        name="products[has_images]"
                                        id="products-has-images"
                                        ref="filtersHasImages"
                                        value={this.props.filters.has_images}
                                        onChange={this.handleChange}
                                    >
                                        <option value="0">Todos</option>
                                        <option value="1">Sim</option>
                                        <option value="2">Não</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="ls-collapse ls-no-bg ls-no-border ls-no-padding" data-ls-module="collapse">
                                    <div className="ls-collapse-header ls-display-none"></div>
                                    <div id="products-filter-collapse" className="ls-collapse-body ls-no-padding">
                                        <div className="row">
                                            <label className="ls-label col-md-3 col-xs-12">
                                                <b className="ls-label-text">Outro filtro</b>
                                                <input
                                                    className="ls-field"
                                                    type="text"
                                                    name="other"
                                                    placeholder="Ex: 1234"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ls-txt-right">
                                <button className="ls-btn ls-btn-danger" type="button" onClick={this.props.resetFilters}>Limpar filtro</button>
                                <button className="ls-btn" type="button" data-ls-module="collapse" data-target="#products-filter-collapse">
                                    Expandir/ocultar filtro
                                </button>
                                <button className="ls-btn" type="submit">Filtrar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
});

export default ItemsFilterFields;
