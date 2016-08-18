import React from 'react';

class Breadcrumb extends React.Component {
  render () {
    return (
        <div>
            <div className="ls-title-intro ls-no-margin-bottom ls-no-border">
                <ol className="ls-breadcrumb ls-no-border">
                    <li className="ls-no-padding-left"><a href="/">Início</a></li>
                    <li>Itens</li>
                </ol>
            </div>

            <h1 className="ls-title-intro ls-ico-home ls-no-border ls-no-padding-top">
                Page title
            </h1>
        </div>
    );
  }
}

export default Breadcrumb;
