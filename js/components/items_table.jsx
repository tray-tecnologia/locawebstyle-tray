var ItemsTable = React.createClass({
    render: function () {
        return (
            <table className="ls-table ls-no-hover">
                <ItemsTableHead />
                <ItemsTableBody />
            </table>
        );
    }
});

var ItemsTableHead = React.createClass({
    render: function () {
        return (
            <thead>
                <tr>
                    <th className="ls-width-50">
                        <input type="checkbox" data-ls-module="checkboxToggle" data-checkbox-target="items-table"/>
                    </th>
                    <th>Código</th>
                    <th>Status</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
});

var ItemsTableBody = React.createClass({
    getInitialState: function () {
        return {
            items: [
                { id: 1, name: 'Nome do item 1', category: 'Camisetas', price: 'R$ 210,00', stock: 6, status: 1, url: 'item/1', checked: false },
                { id: 2, name: 'Nome do item 2', category: 'Camisetas', price: 'R$ 110,00', stock: 3, status: 1, url: 'item/2', checked: false },
                { id: 3, name: 'Nome do item 3', category: 'Camisetas', price: 'R$ 310,00', stock: 4, status: 0, url: 'item/3', checked: false },
            ],
        }
    },

    componentDidMount: function () {
        // var items = [];
        // this.setState({ items: items });
    },

    /**
     * When DOM update
     */
    componentDidUpdate: function() {
        locastyle.init();
    },

    render: function () {
        var itemNodes;

        if (!this.state.items.length) {
            itemNodes = (
                <tr>
                    <td className="ls-txt-center" colSpan="8">Nenhum item encontrado</td>
                </tr>
            );
        } else {
            itemNodes = this.state.items.map(function (item) {
                return (
                    <ItemsTableItem item={item} key={item.id} />
                );
            });
        }

        return (
            <tbody>
                {itemNodes}
            </tbody>
        );
    }
});

var ItemsTableItem = React.createClass({
    handleChange: function(param1) {
        
    },
    render: function () {
        return (
            <tr>
                <td>
                    <input type="checkbox" data-checkbox-toggle="items-table" onChange={this.handleChange} />
                </td>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.status ? 'Ativo' : 'Inativo'}</td>
                <td>
                    <a className="ls-ico-external" href="{this.props.item.url}">{this.props.item.name}</a>
                </td>
                <td>{this.props.item.category}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.stock}</td>
                <td className="ls-txt-right">
                    <a href="#" className="ls-btn-default ls-display-none">Detalhes</a>
                    <div data-ls-module="dropdown" className="ls-dropdown">
                        <button className="ls-btn"></button>
                        <ul className="ls-dropdown-nav">
                            <li><a href="#">Editar</a></li>
                            <li><a href="#">Duplicar</a></li>
                            <li><a className="ls-text-danger" href="#">Excluir</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        );
    }
});

var ItemsFilter = React.createClass({
    render: function() {
        return (
            <fieldset>
                <label className="ls-label col-md-4 col-xs-12">
                    <b className="ls-label-text">Código ou referência</b>
                    <input type="text" name="nome" placeholder="Ex: 1234" className="ls-field" required />
                </label>
                <label className="ls-label col-md-3 col-xs-12">
                    <b className="ls-label-text">Status</b>
                    <div className="ls-custom-select">
                        <select className="ls-select" name="" id="">
                            <option value="">Todos</option>
                            <option value="">Ativo</option>
                            <option value="">Inativo</option>
                        </select>
                    </div>
                </label>
                <label className="ls-label col-md-4 col-xs-12">
                    <b className="ls-label-text">Nome do produto</b>
                    <input type="text" name="nome" placeholder="Ex: Smartphone novo" className="ls-field" required />
                </label>
                <label className="ls-label col-md-3 col-xs-12">
                    <b className="ls-label-text">Categoria</b>
                    <div className="ls-custom-select">
                        <select className="ls-select" name="" id="">
                            <option value="">Todas</option>
                            <option value="">Acessórios</option>
                            <option value="">Calçados</option>
                        </select>
                    </div>
                </label>
            </fieldset>
        );
    },
});

var itemsTables = document.querySelectorAll('[data-react="items-table-container"]');
Object.keys(itemsTables).map(function (value, index) {
    ReactDOM.render(
        <ItemsTable />,
        itemsTables[value]
    );
});

ReactDOM.render(
    <ItemsFilter />,
    document.querySelector('[data-react="items-table-filter"]')
);
