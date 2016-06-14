var ProductsTable = React.createClass({
    render: function () {
        return (
            <table className="ls-table ls-no-hover">
                <ProductsTableHead />
                <ProductsTableBody />
            </table>
        );
    }
});

var ProductsTableHead = React.createClass({
    render: function () {
        return (
            <thead>
                <tr>
                    <th className="ls-width-50">
                        <input type="checkbox" data-ls-module="checkboxToggle" data-checkbox-target="foo" id="checkboxElement" />
                    </th>
                    <th>Código</th>
                    <th>Status</th>
                    <th>Produto</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>

                    </th>
                </tr>
            </thead>
        );
    }
});

var ProductsTableBody = React.createClass({
    getInitialState: function () {
        return {
            products: [],
        }
    },

    componentDidMount: function () {
        var products = [
            { id: 1, name: 'Nome do produto 1', category: 'Camisetas', price: 'R$ 210,00', stock: 6, status: 1, url: 'products/1' },
            { id: 2, name: 'Nome do produto 2', category: 'Camisetas', price: 'R$ 110,00', stock: 3, status: 1, url: 'products/2' },
            { id: 3, name: 'Nome do produto 3', category: 'Camisetas', price: 'R$ 310,00', stock: 4, status: 0, url: 'products/3' },
        ];

        this.setState({ products: products });
        this.setState({ products: [] });
    },
    render: function () {
        var productNodes;

        if (!this.state.products.length) {
            productNodes = (
                <tr>
                    <td className="ls-txt-center" colSpan="8">Nenhum produto encontrado</td>
                </tr>
            );
        } else {
            productNodes = this.state.products.map(function (product) {
                return (
                    <ProductsTableItem product={product} key={product.id} />
                );
            });
        }

        return (
            <tbody>
                {productNodes}
            </tbody>
        );
    }
});

var ProductsTableItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>
                    <input type="checkbox" data-checkbox-toggle="foo"/>
                </td>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.status ? 'Ativo' : 'Inativo'}</td>
                <td>
                    <a className="ls-ico-external" href="{this.props.product.url}">{this.props.product.name}</a>
                </td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.stock}</td>
                <td className="ls-txt-right">
                    <a href="#" className="ls-btn-default">Detalhes</a>
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

var prodTables = document.querySelectorAll('[data-react="products-table-container"]');
Object.keys(prodTables).map(function (value, index) {
    ReactDOM.render(
        <ProductsTable />,
        prodTables[value]
    );
});
