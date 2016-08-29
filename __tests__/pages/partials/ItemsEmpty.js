import React from 'react';
import renderer from 'react-test-renderer';

import ItemsEmpty from '../../../js/pages/partials/ItemsEmpty.jsx';

locastyle.general.init = function() {};

describe('Items Empty', () => {
    it('show component', () => {
        let tree = renderer.create(
            <ItemsEmpty />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('show component', () => {
        let tree = renderer.create(
            <ItemsEmpty />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
