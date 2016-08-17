import React from 'react';

class Header extends React.Component {
  render () {
    return (
        <header>
            <div className="ls-topbar">
                <div className="ls-notification-topbar">

                    <div className="ls-alerts-list">
                        <a href="#" className="ls-ico-bell-o" data-counter="8" data-ls-module="topbarCurtain" data-target="#ls-notification-curtain"><span>Notificações</span></a>
                        <a href="#" className="ls-ico-bullhorn" data-ls-module="topbarCurtain" data-target="#ls-help-curtain"><span>Ajuda</span></a>
                        <a href="#" className="ls-ico-question" data-ls-module="topbarCurtain" data-target="#ls-feedback-curtain"><span>Sugestões</span></a>
                    </div>

                    <div data-ls-module="dropdown" className="ls-dropdown ls-user-account">
                        <a href="#" className="ls-ico-user">
                            <img src="http://fakeimg.pl/50/" alt="" />
                            <span className="ls-name">Tray E-commerce</span> (trayuser)
                        </a>

                        <nav className="ls-dropdown-nav ls-user-menu">
                            <ul>
                                <li><a href="#">Meus dados</a></li>
                                <li><a href="#">Faturas</a></li>
                                <li><a href="#">Planos</a></li>
                                <li><a href="#">Sair</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <span className="ls-show-sidebar ls-ico-menu"></span>

                <a href="#" className="ls-go-next"><span className="ls-text">Voltar à lista de serviços</span></a>

                <h1 className="ls-brand-name">
                    <a href="home" className="ls-ico-earth">
                        <small>Light</small>
                        Tray E-commerce Store
                    </a>
                </h1>

            </div>

            <aside className="ls-notification">
                <nav className="ls-notification-list" id="ls-notification-curtain">
                    <h3 className="ls-title-2">Notificações</h3>
                    <ul>
                        <li className="ls-dismissable">
                            <a href="#">Blanditiis est est dolorem iure voluptatem eos deleniti repellat et laborum consequatur</a>
                            <a href="#" data-ls-module="dismiss" className="ls-ico-close ls-close-notification"></a>
                        </li>
                        <li className="ls-dismissable">
                            <a href="#">Similique eos rerum perferendis voluptatibus</a>
                            <a href="#" data-ls-module="dismiss" className="ls-ico-close ls-close-notification"></a>
                        </li>
                        <li className="ls-dismissable">
                            <a href="#">Qui numquam iusto suscipit nisi qui unde</a>
                            <a href="#" data-ls-module="dismiss" className="ls-ico-close ls-close-notification"></a>
                        </li>
                        <li className="ls-dismissable">
                            <a href="#">Nisi aut assumenda dignissimos qui ea in deserunt quo deleniti dolorum quo et consequatur</a>
                            <a href="#" data-ls-module="dismiss" className="ls-ico-close ls-close-notification"></a>
                        </li>
                        <li className="ls-dismissable">
                            <a href="#">Sunt consequuntur aut aut a molestiae veritatis assumenda voluptas nam placeat eius ad</a>
                            <a href="#" data-ls-module="dismiss" className="ls-ico-close ls-close-notification"></a>
                        </li>
                    </ul>
                </nav>

                <nav className="ls-notification-list" id="ls-help-curtain">
                    <h3 className="ls-title-2">Feedback</h3>
                    <ul>
                        <li><a href="#">&gt; quo fugiat facilis nulla perspiciatis consequatur</a></li>
                        <li><a href="#">&gt; enim et labore repellat enim debitis</a></li>
                    </ul>
                </nav>

                <nav className="ls-notification-list" id="ls-feedback-curtain">
                    <h3 className="ls-title-2">Ajuda</h3>
                    <ul>
                        <li className="ls-txt-center hidden-xs">
                            <a href="#" className="ls-btn-dark ls-btn-tour">Fazer um Tour</a>
                        </li>
                        <li><a href="#">&gt; Guia</a></li>
                        <li><a href="#">&gt; Wiki</a></li>
                    </ul>
                </nav>
            </aside>
        </header>
    );
  }
}

export default Header;
