import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {toggleSidebar, toggleAside} = this.props;
        return (
            <header className="main-header">
                <a className="logo">
                    <span className="logo-mini">X</span>
                    <span className="logo-lg"><b>Panel</b>X</span>
                </a>
                
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" onClick={toggleSidebar}>
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#" onClick={toggleAside}><i className="fa fa-gears" /></a>
                              </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;