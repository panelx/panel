import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {toggleSidebar, toggleModal} = this.props;
        return (
            <header className="main-header">
                <a className="logo">
                    <span className="logo-mini">X</span>
                    <span className="logo-lg"><b>Panel</b>X</span>
                </a>
                
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="header__icon" onClick={toggleSidebar}>
                        <i className="fa fa-bars"/>
                    </a>
                    <a href="#" className="header__icon" onClick={toggleModal}>
                        <i className="fa fa-plus-circle"/>
                    </a>
                </nav>
            </header>
        );
    }
}

export default Header;