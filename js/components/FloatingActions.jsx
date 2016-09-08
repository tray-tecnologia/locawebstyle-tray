import React from 'react';

export default class FloatingActions extends React.Component {

    render () {
        let fixedBarStyle = {
            width: 'calc(100% - 30px)'
        };

        let fixedBarStyleDesktop = {
            width: 'calc(100% - 325px)'
        };

        return (
            <div>
                <div className="hidden-xs hidden-sm">
                    <div className="ls-alert-fixed-bottom ls-no-padding" style={fixedBarStyleDesktop}>
                        <div className="ls-actions-btn ls-bg-white ls-txt-right ls-no-margin">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="visible-xs visible-sm">
                    <div className="ls-alert-fixed-bottom ls-no-padding" style={fixedBarStyle}>
                        <div className="ls-actions-btn ls-bg-white ls-txt-right ls-no-margin">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
