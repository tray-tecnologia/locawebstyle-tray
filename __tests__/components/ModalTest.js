import React from 'react';
import renderer from 'react-test-renderer';

import Modal from '../../js/components/Modal.jsx';

locastyle.modal.init = function() {};
locastyle.general.init = function() {};

describe('Modal', () => {
    it('show modal"', () => {
        let modalTree = renderer.create(
            <Modal />
        ).toJSON();

        expect(modalTree).toMatchSnapshot();
    });
});
