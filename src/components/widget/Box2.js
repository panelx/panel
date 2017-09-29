import React, { Component } from 'react';

class Box2 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {data, title, remove, type} = this.props;
        if(!data) return false;
        return (
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className={"info-box " + type}>
                    <span className="info-box-icon">
                        <i className="fa fa-bookmark-o box__icon"></i>
                    </span>
                    
                    <div className="info-box-content">
                        <span className="info-box-text">{title}</span>
                        <span className="info-box-number">{value}</span>
                        
                        <div className="progress">
                            <div className="progress-bar" style={{'width': data[data.length - 1] + '%'}}></div>
                        </div>
                        <span className="progress-description">
                            ---
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Box2;