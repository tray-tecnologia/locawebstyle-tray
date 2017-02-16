import React from 'react';

class AnimatedContent extends React.Component {

    render () {

        return (
            <div className="animated fadeInRight">
                {this.props.children}
            </div>
        );
    }

}

export default AnimatedContent;