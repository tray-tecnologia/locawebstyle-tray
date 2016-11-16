import React from 'react';

import store from '../store/Stores.jsx';

import Breadcrumb from '../components/Breadcrumb.jsx';
import FilterableItemsTable from '../pages/partials/items/FilterableItemsTable.jsx';

class ItemsPage extends React.Component {
  constructor(props) {
    super(props);

    store.subscribe(() => {
        this.forceUpdate();
    });
  }

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
