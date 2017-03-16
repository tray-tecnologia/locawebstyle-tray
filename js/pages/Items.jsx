import React from 'react';

import store from '../store/Stores.jsx';

import Breadcrumb from '../components/Breadcrumb.jsx';
import AnimatedContent from '../components/AnimatedContent.jsx';
import FilterableItemsTable from '../pages/partials/items/FilterableItemsTable.jsx';

class ItemsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  checkStore () {
    store.subscribe(() => this.forceUpdate());
  }

  render () {
    this.checkStore();

    return (
        <div>
            <Breadcrumb title="Itens" />

            <AnimatedContent>
              <FilterableItemsTable />
            </AnimatedContent>
        </div>
    );
  }
}

export default ItemsPage;
