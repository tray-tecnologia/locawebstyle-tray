import React from 'react';
import { Link } from 'react-router';

class ItemsEmpty extends React.Component {

    componentDidMount() {
        locastyle.general.init();
    }

    render () {
        return (
            <div>
                <div className="ls-lg-margin-bottom">
                    <h2 className="ls-title-5">Você ainda não possui itens cadastrados.</h2>
                </div>

                <div className="ls-box ls-lg-space">
                    <h3 className="ls-title-3 ls-sm-margin-bottom">Inclua seu primeiro item</h3>

                    <p className="ls-md-margin-bottom">
                        Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
                        Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                        Manduma pindureta quium dia nois paga.
                    </p>

                    <Link
                        className="ls-btn-primary ls-sm-margin-top"
                        id="btn-action"
                        to="/items/add">
                        Incluir item
                    </Link>

                    <button id="btn-default" className="ls-btn ls-sm-margin-top" onClick={this.props.addItems} data-toggle-class="ls-display-none" data-target="#btn-default, #btn-default-disabled">
                        Carregar itens
                    </button>
                    <button id="btn-default-disabled" className="ls-btn ls-sm-margin-top ls-disabled ls-display-none">
                        Aguarde, carregando itens...
                    </button>
                </div>
            </div>
        );
    }

}

export default ItemsEmpty;
