import React from 'react';

class Modal extends React.Component {

    componentDidMount() {
        locastyle.modal.init();
        locastyle.general.init();
    }

    render() {
        return (
            <div>
                <div className="ls-modal" id="modal">
                    <div className="ls-modal-box">
                        <div className="ls-modal-header">
                            <button data-dismiss="modal">&times; </button>
                            <h4 className="ls-modal-title">Desabilitar aplicativo</h4>
                        </div>
                        <div className="ls-modal-body" id="myModalBody">
                            <p>Deseja desabilitar o aplicativo?</p>
                        </div>
                        <div className="ls-modal-footer ls-txt-right">
                            <button className="ls-btn ls-float-left" data-dismiss="modal">Fechar</button>
                            <button type="submit" className="ls-btn ls-btn-danger ls-btn-primary-danger" id="btn-modal" data-toggle-class="ls-display-none" data-target="#btn-modal, #btn-modal-disabled">
                                Desabilitar
                            </button>
                            <div>
                                <button id="btn-modal-disabled" className="ls-btn-danger ls-disabled ls-display-none" data-toggle-class="ls-display-none" data-target="#btn-modal, #btn-modal-disabled">
                                    Aguarde, desabilitando aplicativo...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
