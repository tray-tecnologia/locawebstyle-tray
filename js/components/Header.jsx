import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className="ls-topbar">
                    <div className="ls-notification-topbar">
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

                    <h1 className="ls-brand-name">
                        <Link className="ls-ico-earth" to="/">
                            <small>Light</small>
                            Tray E-commerce Store
                        </Link>
                    </h1>
                </div>
            </header>
        );
    }
}

export default Header;
