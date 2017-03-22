import React from 'react';

import Breadcrumb from '../../components/Breadcrumb.jsx';
import AnimatedContent from '../../components/AnimatedContent.jsx';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Breadcrumb title="Início" />
                <AnimatedContent>
                    <p className="ls-md-margin-bottom">
                        A ideia desse projeto é padronizar o uso dos componentes do LS (LocawebStyle),
                        dando exemplos reais de implementações.<br />

                        Lembre-se de alguns detalhes quando estiver trabalhando com o LS:
                    </p>

                    <ul className="ls-md-margin-left">
                        <li>Não escreva nenhuma linha de CSS (o LS já é sua implementação de design)</li>
                        <li>Utilize NPM (ou Yarn) ao invés do Bower (NPM for all things)</li>
                        <li>Nem tudo é responsabilidade do LS, você vai precisar de outras dependências</li>
                    </ul>
                </AnimatedContent>
            </div>
        );
    }

}

export default HomePage;
