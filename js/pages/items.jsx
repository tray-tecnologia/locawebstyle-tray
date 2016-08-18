import React from 'react';

import Breadcrumb from '../components/breadcrumb.jsx';
import ItemsEmpty from '../pages/partials/items_empty.jsx';
import { ItemsTable } from '../pages/partials/items_full.jsx';

class Items extends React.Component {
  render () {
    return (
        <div>
            <Breadcrumb title="Itens" />
            <ItemsTable />
        </div>
    );
  }
}

export default Items;
