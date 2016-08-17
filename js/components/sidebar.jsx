import React from 'react';

class Sidebar extends React.Component {
  render () {
    return (
        <aside className="ls-sidebar">
            <div className="ls-sidebar-inner">

                <nav className="ls-menu">
                    <ul>
                        <li><a href="/#" className="ls-ico-users" title="Lista de itens">Lista de itens</a></li>
                        <li><a href="/#" className="ls-ico-users" title="Lista vazia">Lista vazia</a></li>
                        <li><a href="/#" className="ls-ico-users" title="Página de aplicativo">Página de aplicativo</a></li>
                    </ul>
                </nav>

            </div>
        </aside>
    );
  }
}

export default Sidebar;
