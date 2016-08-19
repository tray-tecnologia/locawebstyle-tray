import React from 'react';

const ChangeText = React.createClass({
    getInitialState() {
        return {
            text: this.props.from,
        };
    },

    changeText() {
        this.setState({ text: this.props.to });
    },

    render () {
        return (
            <span onClick={this.changeText}>
                {this.state.text}
            </span>
        );
    }
}); 

export default ChangeText;
