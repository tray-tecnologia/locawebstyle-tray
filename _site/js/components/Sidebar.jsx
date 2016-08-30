import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {

    getActiveRoute(routePath) {
        if (!routePath) {
            return false;
        }

        return this.props.router.isActive(routePath);
    }

    render () {
        return (
            <aside className="ls-sidebar">
                <div className="ls-sidebar-inner">
                    <nav className="ls-menu">
                        <ul>
                            <li><Link className="ls-ico-home" activeClassName="ls-active" to="/">Início</Link></li>
                            <li className={this.getActiveRoute('items') ? 'ls-active' : ''}><Link className="ls-ico-users" activeClassName="ls-active" to="/items">Lista de itens</Link></li>
                            <li className={this.getActiveRoute('apps') ? 'ls-active' : ''}><Link className="ls-ico-table-alt" to="/apps">Página de aplicativo</Link></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;
