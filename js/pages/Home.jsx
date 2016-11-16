import React from 'react';

import Breadcrumb from '../components/Breadcrumb.jsx';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Breadcrumb title="Início" />

                <p className="ls-md-margin-bottom">
                    A ideia desse projeto é padronizar o uso dos componentes do LS (LocawebStyle),
                    dando exemplos reais de implementações.<br />

                    Lembre-se de alguns detalhes quando estiver trabalhando com o LS:
                </p>

                <p>
                    - Não escreva nenhuma linha de CSS (o LS já é sua implementação de design)<br />
                    - Utilize NPM (ou Yarn) ao invés do Bower (NPM for all things)<br />
                    - Nem tudo é função do LS, você vai precisar de outras dependências
                </p>

            </div>
        );
    }

}

export default HomePage;
