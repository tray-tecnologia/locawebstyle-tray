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
            items: [],
        }
    },

    componentDidMount: function () {
        var items = [
            { id: 1, name: 'Nome do item 1', category: 'Camisetas', price: 'R$ 210,00', stock: 6, status: 1, url: 'item/1' },
            { id: 2, name: 'Nome do item 2', category: 'Camisetas', price: 'R$ 110,00', stock: 3, status: 1, url: 'item/2' },
            { id: 3, name: 'Nome do item 3', category: 'Camisetas', price: 'R$ 310,00', stock: 4, status: 0, url: 'item/3' },
        ];

        this.setState({ items: items });
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
    render: function () {
        return (
            <tr>
                <td>
                    <input type="checkbox" data-checkbox-toggle="items-table"/>
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

var itemsTables = document.querySelectorAll('[data-react="items-table-container"]');
Object.keys(itemsTables).map(function (value, index) {
    ReactDOM.render(
        <ItemsTable />,
        itemsTables[value]
    );
});
