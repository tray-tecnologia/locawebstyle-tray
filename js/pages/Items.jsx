import React from 'react';

import Breadcrumb from '../components/Breadcrumb.jsx';
import FilterableItemsTable from '../pages/partials/items/FilterableItemsTable.jsx';

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
