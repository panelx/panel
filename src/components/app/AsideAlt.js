import React, { Component } from 'react';

class AsideAlt extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {open, children} = this.props;
        return (
            <aside
                className={
                    "control-sidebar control-sidebar-dark " + 
                    (open ? 'control-sidebar-open' : '')
                }
                >
                <div className="tab-content">
                    {children}
                </div>
            </aside>
        );
    }
}

export default AsideAlt;