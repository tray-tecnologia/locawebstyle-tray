import React from 'react';

import Breadcrumb from '../components/Breadcrumb.jsx';
import AnimatedContent from '../components/AnimatedContent.jsx';
import Modal from '../components/Modal.jsx';

const AppsPage = React.createClass({

  render () {
    return (
        <div>
            <Breadcrumb title="Página de aplicativo" />

            <AnimatedContent>

                <div className="ls-lg-margin-bottom ls-txt-right">
                    <button className="ls-btn-danger" data-ls-module="modal" data-target="#modal">Desabilitar aplicativo</button>
                </div>

                <div className="ls-box-group ls-overflow-hidden">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="ls-box ls-md-space ls-no-bg">
                                <div className="ls-box-head">
                                    <h6 className="ls-title-6 ls-sm-margin-bottom">Titulo da caixa</h6>
                                    <p className="ls-md-margin-bottom">
                                        Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                        Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                    </p>
                                </div>
                                <div className="ls-box-body">
                                    <a href="#" className="ls-btn ls-btn-primary ls-btn-block">Botão principal</a>
                                    <a href="#" className="ls-btn ls-btn-default ls-btn-block">Botão secundário</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ls-box ls-md-space ls-no-bg">
                                <div className="ls-box-head">
                                    <h6 className="ls-title-6 ls-sm-margin-bottom">Titulo da caixa</h6>
                                    <p className="ls-md-margin-bottom">
                                        Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                        Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                    </p>
                                </div>
                                <div className="ls-box-body">
                                    <a href="#" className="ls-btn ls-btn-primary ls-btn-block">Botão principal</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ls-box ls-md-space ls-no-bg">
                                <div className="ls-box-head">
                                    <h6 className="ls-title-6 ls-sm-margin-bottom">Titulo da caixa</h6>
                                    <p className="ls-md-margin-bottom">
                                        Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                        Non minim est incididunt do quis incididunt amet voluptate magna ut sint magna enim.
                                    </p>
                                </div>
                                <div className="ls-box-body">
                                    <a href="#" className="ls-btn ls-btn-primary ls-btn-block">Botão principal</a>
                                    <a href="#" className="ls-btn ls-btn-default ls-btn-block">Botão secundário</a>
                                    <a href="#" className="ls-btn ls-btn-default ls-btn-block">Botão secundário</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </AnimatedContent>

            <Modal />
        </div>
    );
  }
});

export default AppsPage;
