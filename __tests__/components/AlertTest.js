import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Alert from '../../js/components/Alert.jsx';

ls.alert.init = function() {};
locastyle.alert.init = function() {};

describe('Alert', () => {
    it('show an info message', () => {
        let message = 'An info message!';

        const alertComp = TestUtils.renderIntoDocument(
            <Alert message={message} type="info" />
        );

        let alertDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'div'
        );

        expect(alertDOM.textContent.trim()).toBe(message);
        expect(alertDOM.className).toBe('ls-alert ls-alert-info');
    });

    it('show error message with title', () => {
        let message = 'Error message!';
        let title = 'Error!';

        const alertComp = TestUtils.renderIntoDocument(
            <Alert title={title} message={message} type="danger" />
        );

        let alertDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'div'
        );

        let alertTitleDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'strong'
        ); 

        expect(alertDOM.className).toBe('ls-alert ls-alert-danger');
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

        let alertDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'div'
        );

        let alertDismissableDOM = TestUtils.findRenderedDOMComponentWithTag(
            alertComp,
            'span'
        );

        expect(alertDOM.className).toBe('ls-alert ls-alert-warning ls-dismissable');
        expect(alertDOM.textContent).toBe(dismissable + title + ' ' + message);
        expect(alertDismissableDOM.textContent).toBe(dismissable);
    });
});
