import React from 'react';

class Modal extends React.Component {

    componentDidMount() {
        locastyle.modal.init();
    }

    render() {
        return (
            <div>
                <div className="ls-modal" id="modal">
                    <div className="ls-modal-box">
                        <div className="ls-modal-header">
                            <button data-dismiss="modal">&times; </button>
                            <h4 className="ls-modal-title">Desativar aplicativo</h4>
                        </div>
                        <div className="ls-modal-body" id="myModalBody">
                            <p>Deseja desativar o aplicativo?</p>
                        </div>
                        <div className="ls-modal-footer ls-txt-right">
                            <button className="ls-btn ls-float-left" data-dismiss="modal">Fechar</button>
                            <button type="submit" className="ls-btn-danger">Desativar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
