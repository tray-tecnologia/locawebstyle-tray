import React from 'react';

import Breadcrumb from '../components/breadcrumb.jsx';
import ItemsEmpty from '../pages/partials/items_empty.jsx';
import { FilterableItemsTable } from '../pages/partials/items_full.jsx';

class ItemsPage extends React.Component {
  render () {
    return (
        <div>
            <Breadcrumb title="Itens" />
            <FilterableItemsTable />
        </div>
    );
  }
}

export default ItemsPage;
