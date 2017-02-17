import React from 'react';
import { Link } from 'react-router';

import ItemsAddSelectTable from './ItemsAddSelectTable.jsx';

class ItemsForm extends React.Component {

    constructor() {
        super();

        this.state = {
            items: this.factoryItems(3),
        };
    }

    addNewItem(event) {
        event.preventDefault()

        let items = this.state.items

        items.push(this.factoryItems()[0])

        this.setState({
            items: items
        })
    }

    removeItem(event) {
        event.preventDefault()
        let items = this.state.items

        if (items.length > 0) {
            items.pop()
        }

        this.setState({ items: items })
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    factoryItems(total = 1) {
        let items = []

        for (var count = 0; count < total; count++) {
            items.push({
                id: this.getRandomInt(1, 1000),
                selected: false,
                name: `Item de uma lista ${this.getRandomInt(1, 1000)}`,
                price: Math.random(),
            })
        }

        items.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }

            if (a.id < b.id) {
                return 0;
            }

            return -1;
        })

        return items
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
                        <h3 className="ls-title-4 ls-md-margin-bottom">Itens do kit</h3>
                        <p className="ls-lg-margin-bottom">
                            Caso um dos produtos esteja indisponível ou sob consulta, seu kit poderá não ser exibido na loja para venda.
                        </p>

                        <div className="ls-txt-right">
                            <button onClick={this.addNewItem.bind(this)} className="ls-btn">+</button>
                            <button onClick={this.removeItem.bind(this)} className="ls-btn">-</button>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <ItemsAddSelectTable
                            items={this.state.items}
                            onSelect={this.onSelect.bind(this)}
                            onRemove={this.onRemove.bind(this)}
                        />
                    </div>
                </section>
                <div className="ls-clearfix"></div>
            </fieldset>
        );
    }
}

export default ItemsForm;
