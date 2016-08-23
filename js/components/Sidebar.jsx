import React from 'react';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Sidebar extends React.Component {
  render () {
    return (
        <aside className="ls-sidebar">
            <div className="ls-sidebar-inner">

                <nav className="ls-menu">
                    <ul>
                        <li><Link className="ls-ico-home" to="/">Início</Link></li>
                        <li><Link className="ls-ico-users" to="/items">Lista de itens</Link></li>
                        <li><Link className="ls-ico-table-alt" to="/apps">Página de aplicativo</Link></li>
                    </ul>
                </nav>

            </div>
        </aside>
    );
  }
}

export default Sidebar;
