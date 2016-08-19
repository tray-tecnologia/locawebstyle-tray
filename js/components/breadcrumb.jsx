import React from 'react';

import { Link } from 'react-router';

class Breadcrumb extends React.Component {
    render () {
        return (
            <div>
                <div className="ls-title-intro ls-no-margin-bottom ls-no-border">
                    <ol className="ls-breadcrumb ls-no-border">
                        <li className="ls-no-padding-left"><Link to="/">Início</Link></li>
                    </ol>
                </div>

                <h1 className="ls-title-intro ls-ico-home ls-no-border ls-no-padding-top ls-lg-margin-bottom">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default Breadcrumb;
