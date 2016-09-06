import React from 'react';
import { Link } from 'react-router';

import ItemsAddSelectTable from './ItemsAddSelectTable.jsx';

class ItemsForm extends React.Component {

    constructor() {
        super();

        this.state = {
            items: [
                { id: 1001, selected: false, name: 'Smartphone Motorola Moto B', price: 99.00, },
                { id: 1523, selected: false, name: 'Smartphone Motorola Moto A', price: 99.00, },
                { id: 1762, selected: false, name: 'Smartphone Motorola Moto G', price: 99.00, },
                { id: 1070, selected: false, name: 'Smartphone Motorola Moto E', price: 99.00, },
                { id: 1545, selected: false, name: 'Smartphone Motorola Moto W', price: 99.00, },
                { id: 1031, selected: false, name: 'Smartphone Motorola Moto Maxx', price: 999.00, },
                { id: 17462, selected: false, name: 'Smartphone Motorola Moto GGG', price: 919.00, },
            ],
        };
    }

    onSelect(itemID) {
        let items = this.state.items.map((item, index) => {
            if (item.id == itemID) {
                item.selected = true;
            }

            return item;
        });

        this.setState({items:items});
    }

    onRemove(itemID) {
        let items = this.state.items.map((item, index) => {
            if (item.id == itemID) {
                item.selected = false;
            }

            return item;
        });

        this.setState({items:items});
    }

    render() {
        return (
            <fieldset className={this.props.className}>
                <section className="row ls-lg-margin-bottom">
                    <div className="col-md-4">
                        <h3 className="ls-title-4 ls-md-margin-bottom">Apresentação</h3>
                        <p>
                            Defina se este kit estará ativo para ser exibido na loja.Caso não esteja pronto, desmaque a opção ao lado.
                        </p>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <div className="ls-label">
                            <label className="ls-label-text ls-no-bold">
                                <input type="checkbox" name="kit[status]" /> Kit ativo - será exibido na loja para venda
                            </label>
                            <label className="ls-label-text ls-no-bold">
                                <input type="checkbox" name="kit[featured]" /> Exibir selo destaque no kit <span className="ls-ico-help"></span>
                            </label>
                            <label className="ls-label-text ls-no-bold">
                                <input type="checkbox" name="kit[new]" /> Exibir selo lançamento no kit <span className="ls-ico-help"></span>
                            </label>
                            <label className="ls-label-text ls-no-bold">
                                <input type="checkbox" name="kit[additional]" /> Exibir selo adicional no kit <span className="ls-ico-help"></span>
                            </label>
                        </div>
                    </div>
                    <div className="ls-clearfix"></div>
                </section>

                <section className="row ls-lg-margin-bottom">
                    <div className="col-md-4">
                        <h3 className="ls-title-4 ls-md-margin-bottom">Nome e categoria</h3>
                        <p>
                            Insira os dados básicos do kit, selecione sua categoria e crie uma boa descrição falando de suas funcionalidades.
                        </p>
                        <p>
                            Selecione uma ou mais categorias para listar seu kit.
                        </p>
                        <Link className="ls-text-sm ls-ico-shaft-right ls-ico-right" to="/items/add">
                            Incluir novas categorias
                        </Link>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        <label className="ls-label">
                            <b className="ls-label-text">Nome do kit</b>
                            <input type="text" name="kit[name]" placeholder="Ex: Iphone 5s 16GB" required />
                        </label>

                        <div className="row">
                            <label className="ls-label col-md-6">
                                <b className="ls-label-text">Categoria principal</b>
                                <div className="ls-custom-select">
                                    <select className="ls-custom" name="kit[category]">
                                        <option value="">Categoria 1</option>
                                        <option value="">- Categoria 1.1</option>
                                        <option value="">--Categoria 1.1.1</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="ls-clearfix"></div>
                </section>

                <section className="row ls-lg-margin-bottom">
                    <div className="col-md-4">
                        <h3 className="ls-title-4 ls-md-margin-bottom">Produtos do kit</h3>
                        <p>
                            Caso um dos produtos esteja indisponível ou sob consulta, seu kit poderá não ser exibido na loja para venda.
                        </p>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <ItemsAddSelectTable
                            items={this.state.items}
                            onSelect={this.onSelect.bind(this)}
                            onRemove={this.onRemove.bind(this)}
                        />
                    </div>
                    <div className="ls-clearfix"></div>
                </section>
            </fieldset>
        );
    }
}

export default ItemsForm;
