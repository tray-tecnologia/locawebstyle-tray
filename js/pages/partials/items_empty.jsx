import React from 'react';

import ChangeText from '../../components/change_text.jsx';

class ItemsEmpty extends React.Component {

    componentDidMount() {
        locastyle.init();
    }

    render () {
        return (
            <div>
                <h2 className="ls-title-5">Você ainda não possui itens cadastrados.</h2>
                <hr className="ls-no-border" />

                <div className="ls-box ls-lg-space">
                    <h2 className="ls-title-3">Inclua seu primeiro item</h2>
                    <hr className="ls-no-border" />
                    <p>
                        Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
                        Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                        Manduma pindureta quium dia nois paga.
                    </p>
                    <button className="ls-btn-primary" onClick={this.props.addItems}>
                        <ChangeText from="Incluir item" to="Aguarde, salvando os dados..." />
                    </button>
                </div>

                <div className="ls-box ls-lg-space">
                    <h2 className="ls-title-3">Importe seus itens rapidamente</h2>
                    <hr className="ls-no-border" />
                    <p>
                        Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
                        Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                        Manduma pindureta quium dia nois paga.
                    </p>
                    <p>
                        <a href="#" className="ls-btn-primary">Opção 1</a>
                        <a href="#" className="ls-btn-primary">Opção 2</a>
                        <a href="#" className="ls-btn-primary">Opção 3</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ItemsEmpty;
