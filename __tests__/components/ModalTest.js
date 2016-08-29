import React from 'react';
import renderer from 'react-test-renderer';

import Modal from '../../js/components/Modal.jsx';

locastyle.modal.init = function() {};
locastyle.general.init = function() {};

describe('Modal', () => {
    it('show modal"', () => {
        const modalComp = renderer.create(
            <Modal />
        );

        let modalTree = modalComp.toJSON();
        expect(modalTree).toMatchSnapshot();
    });
});
