import React from 'react';
import { Link } from 'react-router';

class ItemsActions extends React.Component {

    render () {
        return (
            <div className="ls-txt-right">
                <Link className="ls-btn ls-btn-primary" to="/items/add">
                    Incluir novo item
                </Link>
            </div>
        );
    }

}

export default ItemsActions;
