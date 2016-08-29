import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../js/components/Header.jsx';

describe('Header', () => {
    it('show header information"', () => {
        let headerTree = renderer.create(
            <Header />
        ).toJSON();

        expect(headerTree).toMatchSnapshot();
    });
});
