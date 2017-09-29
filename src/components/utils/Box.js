import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {title, children, className, remove} = this.props;
        return (
            <div className={className}>
                <div className={"box "}>
                    <div className="box-header with-border">
                        <h3 className="box-title">{title}</h3>
                        {remove && <button
                            onClick={remove}
                            type="button"
                            className="btn btn-box-tool pull-right"
                        >
                            <i className="fa fa-times"></i>
                        </button>}
                    </div>
                    <div className="box-body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;