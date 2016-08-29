import React from 'react';

class Alert extends React.Component {

    componentDidMount() {
        ls.dismiss.unbind();
        ls.init();
    }

    checkAlert() {
        return (this.props.message && this.props.type);
    }

    render () {
        if (!this.checkAlert()) {
            return null;
        }

        let className = 'ls-alert ls-alert-' + this.props.type;
        let dismissable = '';

        if (this.props.dismissable) {
            dismissable = (
                <span data-ls-module="dismiss" className="ls-dismiss">&times;</span>
            );

            className += ' ls-dismissable';
        }

        return (
            <div className={className}>
                {dismissable}
                <strong>{this.props.title}</strong> {this.props.message}
            </div>
        );
    }
}

export default Alert;
