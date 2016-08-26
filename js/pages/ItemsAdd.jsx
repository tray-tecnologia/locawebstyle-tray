import React from 'react';

import Breadcrumb from '../components/Breadcrumb.jsx';

class ItemsAdd extends React.Component {
  render () {
    return (
        <div>
            <Breadcrumb title="Incluir Item" />
            Adding new item...
        </div>
    );
  }
}

export default ItemsAdd;
