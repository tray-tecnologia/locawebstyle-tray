import React from 'react';
import renderer from 'react-test-renderer';

import ItemsTableItem from '../../../js/pages/partials/ItemsTableItem.jsx';

describe('TableItem', () => {
    it('show a row with active item', () => {
        const item = {
            id: 1,
            status: true,
            url: '/items/1',
            name: 'Item 1',
            category: 'Items',
            price: 9.34,
            stock: 35
        };

        const itemsTableItemComp = renderer.create(
            <ItemsTableItem item={item} />
        );

        expect(itemsTableItemComp.toJSON()).toMatchSnapshot();
    });

    it('show a row with inactive item', () => {
        const item = {
            id: 1,
            status: false,
            url: '/items/1',
            name: 'Item 1',
            category: 'Items',
            price: 9.34,
            stock: 35
        };

        const itemsTableItemComp = renderer.create(
            <ItemsTableItem item={item} />
        );

        expect(itemsTableItemComp.toJSON()).toMatchSnapshot();
    });

    it('show a row with no item', () => {
        expect(() => {
            renderer.create(
                <ItemsTableItem />
            )
        }).toThrowError(/missing/);
    });
});
