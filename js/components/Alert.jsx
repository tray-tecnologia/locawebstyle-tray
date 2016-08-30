import React from 'react';

class Alert extends React.Component {

    componentDidUpdate() {
        ls.dismiss.init();
    }

    checkAlert() {
        return (this.props.message && this.props.type);
    }

    render () {
        if (!this.checkAlert()) {
            return null;
        }

        let className = 'ls-float-left ls-width-500 ls-lg-margin-top ls-alert-' + this.props.type;
        let dismissable = '';

        if (this.props.dismissable) {
            dismissable = (
                <span data-ls-module="dismiss" className="ls-dismiss">&times;</span>
            );

            className += ' ls-dismissable';
        }

        return (
            <div className="ls-alert-fixed-top ls-lg-space ls-no-padding-left ls-no-padding-right">
                <div className={className}>
                    <div className="row">
                        <div className="col-xs-12">
                            {dismissable}
                            <strong>{this.props.title}</strong> {this.props.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;
