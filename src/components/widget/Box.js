import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, value, title, remove} = this.props;
        return (
            <div className={className}>
                <div className="info-box">
                    <button
                        onClick={remove}
                        type="button"
                        className="btn btn-box-tool pull-right"
                    >
                        <i className="fa fa-times"></i>
                    </button>
                    <span className="info-box-icon bg-aqua">
                        <i className="fa fa-thermometer box__icon"></i>
                    </span>
                    
                    <div className="info-box-content">
                        <span className="info-box-text">{title}</span>
                        <span className="info-box-number">{value}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;