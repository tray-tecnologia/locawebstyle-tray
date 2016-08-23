import React from 'react';

class ItemsFilterFields extends React.Component {
  render () {
    return (
        <div className="ls-box-filter">    
            <form className="ls-form ls-form-horizontal" data-ls-module="form">
                <fieldset>
                    <div className="row ls-sm-margin-bottom">
                        <label className="ls-label col-md-3 col-xs-12">
                            <b className="ls-label-text">Código ou referência</b>
                            <input className="ls-field" type="text" name="name" placeholder="Ex: 1234" required />
                        </label>
                        <label className="ls-label col-md-3 col-xs-12">
                            <b className="ls-label-text">Status</b>
                            <div className="ls-custom-select">
                                <select className="ls-select" name="" id="">
                                    <option value="">Todos</option>
                                    <option value="true">Ativo</option>
                                    <option value="false">Inativo</option>
                                </select>
                            </div>
                        </label>
                        <label className="ls-label col-md-4 col-xs-12">
                            <b className="ls-label-text">Nome do item</b>
                            <input type="text" name="nome" placeholder="Ex: Smartphone novo" className="ls-field" required />
                        </label>
                        <div className="col-md-2 col-xs-12 ls-md-margin-bottom">
                            <button className="ls-btn">Filtrar</button>
                            <div data-ls-module="dropdown" className="ls-dropdown ls-no-margin-top">
                                <button className="ls-btn"></button>
                                <ul className="ls-dropdown-nav">
                                    <li><a href="#" className="ls-color-danger">Limpar filtro</a></li>
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
                                <input className="ls-mask-money" type="text" name="price_start" required />
                            </div>
                        </label>
                        <label className="ls-label col-md-2 col-xs-12">
                            <b className="ls-label-text">Preço final</b>
                            <div className="ls-prefix-group">
                                <span className="ls-label-text-prefix">R$</span>
                                <input className="ls-mask-money" type="text" name="price_end" required />
                            </div>
                        </label>
                    </div>
                    <div className="row">
                    </div>
                </fieldset>
            </form>
        </div>
    );
  }
}

export default ItemsFilterFields;
