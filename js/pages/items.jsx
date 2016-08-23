import React from 'react';

import Breadcrumb from '../components/Breadcrumb.jsx';
import ItemsEmpty from '../pages/partials/ItemsEmpty.jsx';
import { FilterableItemsTable } from '../pages/partials/ItemsFull.jsx';

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
