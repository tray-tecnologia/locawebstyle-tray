import React from 'react';
import TestUtils from 'react-addons-test-utils';

ls.init = function() {};
ls.alert.init = function() {};
ls.dismiss.init = function() {};
ls.dismiss.unbind = function() {};

import Alert from '../../js/components/Alert.jsx';

describe('Alert', () => {
    it('show an info message', () => {
        let message = 'An info message!';

        const alertComp = TestUtils.renderIntoDocument(
            <Alert message={message} type="info" />
        );

        let alertContainer = TestUtils.findRenderedDOMComponentWithClass(
            alertComp,
            'ls-alert-fixed-top'
        );

        let alertDOM = TestUtils.findRenderedDOMComponentWithClass(
            alertComp,
            'ls-alert-info'
        );

        expect(alertContainer.textContent.trim()).toBe(message);
        expect(alertDOM.className).toContain('ls-alert-info');
    });

    it('show error message with title', () => {
        let message = 'Error message!';
        let title = 'Error!';

        const alertComp = TestUtils.renderIntoDocument(
            <Alert title={title} message={message} type="danger" />
        );

        let alertDOM = TestUtils.findRenderedDOMComponentWithClass(
            alertComp,
            'ls-alert-fixed-top'
        );

        let alertTitleDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'strong'
        );

        expect(alertDOM.className).toContain('ls-alert-fixed-top');
        expect(alertTitleDOM.textContent).toBe(title);
        expect(alertDOM.textContent).toBe(title + ' ' + message);
    });

    it('show message with dismissable option', () => {
        let message = 'Warning message!';
        let title = 'Warning!';
        let dismissable = '×';

        const alertComp = TestUtils.renderIntoDocument(
            <Alert
                dismissable="true"
                title={title}
                message={message}
                type="warning"
            />
        );

        let alertDOM = TestUtils.findRenderedDOMComponentWithClass(
            alertComp,
            'ls-alert-warning'
        );

        let alertDismissableDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'span'
        );

        expect(alertDOM.className).toContain('ls-alert-warning');
        expect(alertDOM.className).toContain('ls-dismissable');
        expect(alertDOM.textContent).toBe(dismissable + title + ' ' + message);
        expect(alertDismissableDOM.textContent).toBe(dismissable);
    });
});
