import React from 'react';

export default class FloatingActions extends React.Component {

    render () {
        return (
            <div>
                <div className="hidden-xs hidden-sm">
                    <div className="ls-no-padding">
                        <div className="ls-actions-btn ls-bg-white ls-txt-right ls-no-margin">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="visible-xs visible-sm">
                    <div className="ls-no-padding">
                        <div className="ls-actions-btn ls-bg-white ls-txt-right ls-no-margin">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
