import React from 'react';

import Breadcrumb from '../components/breadcrumb.jsx';

const AppsPage = React.createClass({

  getInitialState() {
      return {

      };
  },

  render () {
    return (
        <div>
            <Breadcrumb title="Página de aplicativo" />

            <div className="ls-md-space ls-no-padding-top ls-no-padding-right ls-txt-right">
                <a href="#" className="ls-btn-danger">Desabilitar aplicativo</a>
            </div>

            <div className="ls-box-group ls-overflow-hidden ls-sm-space ls-no-padding-left ls-no-padding-right ls-no-padding-top">

                <div className="row">
                    <div className="col-md-4">
                        <div className="ls-box ls-md-space ls-no-bg">
                            <div className="ls-box-head">
                                <h6 className="ls-title-6">Titulo da caixa</h6>
                                <p className="ls-sm-space ls-no-padding-left">
                                    Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros.
                                    Vivamus sit amet nibh non tellus tristique interdum.
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
                                <h6 className="ls-title-6">Titulo da caixa</h6>
                                <p className="ls-sm-space ls-no-padding-left">
                                    Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros.
                                    Vivamus sit amet nibh non tellus tristique interdum.
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
                                <h6 className="ls-title-6">Titulo da caixa</h6>
                                <p className="ls-sm-space ls-no-padding-left">
                                    Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros.
                                    Vivamus sit amet nibh non tellus tristique interdum.
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
        </div>
    );
  }
});

export default AppsPage;
