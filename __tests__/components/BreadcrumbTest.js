import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Breadcrumb from '../../js/components/Breadcrumb.jsx';

describe('Breadcrumb', () => {
    it('show pages title', () => {
        let expectedPageTitle = 'Pages title!';

        const breadcrumbComponent = TestUtils.renderIntoDocument(
            <Breadcrumb title={expectedPageTitle} />
        );

        let pageTitle = TestUtils.findRenderedDOMComponentWithTag(
            breadcrumbComponent,
            'h1'
        );

        expect(pageTitle.textContent).toBe(expectedPageTitle);
    });

    it('without page title', () => {
        expect(() => {
            TestUtils.renderIntoDocument(
                <Breadcrumb />
            )
        }).toThrowError(/missing/);
    });

    it('home page link', () => {
        const breadcrumbComponent = TestUtils.renderIntoDocument(
            <Breadcrumb title="Page title!" />
        );

        let homePageLink = TestUtils.findRenderedDOMComponentWithTag(
            breadcrumbComponent,
            'a'
        );

        expect(homePageLink.textContent).toBe('Início');
    });
});
