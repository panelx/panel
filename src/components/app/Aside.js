import React, { Component } from 'react';

class Aside extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">Dashboards</li>
                        <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Dashboard 1</span></a></li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Aside;