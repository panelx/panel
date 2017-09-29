import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {toggle, title, children} = this.props;
        return (
            <div className="modal fade in modal--open">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close" onClick={toggle}>
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;