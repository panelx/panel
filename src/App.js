import React, {Component} from 'react';
import ioClient from 'socket.io-client';

import './assets/css/style.css';

import Header from './components/app/Header';
import Aside from './components/app/Aside';
import Modal from './components/app/Modal';
import Dashboard from './components/app/Dashboard';
import NewWidgetForm from './components/tools/NewWidgetForm';

class App extends Component {
    constructor(props){
        super(props);
        
        this.initSocket();
        
        const widgetsPreset = JSON.parse(localStorage.getItem('widgets'));
        
        this.state = {
            'data': {},
            'sidebar': 1,
            'modal': false,
            'widgets': widgetsPreset ? widgetsPreset : []
        }
    }
    
    initSocket = () => {
        this.socket = ioClient('http://localhost:3001');
        
        this.socket.on('connect', () => {
            this.socket.on('newPackage', response => {
                this.setState({
                    data: Object.assign({}, this.state.data, {
                        [response.scriptId]: this.state.data[response.scriptId] ? 
                            [ ...this.state.data[response.scriptId], response ] :
                            [response]
                    })
                })
            });
        });
    }
    
    toggleSidebar = () => {
        this.setState(prev => ({
            sidebar: !prev.sidebar
        }))
    }
    
    toggleModal = () => {
        this.setState(prev => ({
            modal: !prev.modal
        }))
    }
    
    addWidget = (widget) => {
        this.setState(prev => ({
            widgets: [...prev.widgets, widget]
        }), () => {
            localStorage.setItem('widgets', JSON.stringify(this.state.widgets));
        });
    }
    
    removeWidget = (id) => {
        this.setState(prev => ({
            widgets: prev.widgets.slice(0,id).concat(prev.widgets.slice(id+1))
        }), () => {
            localStorage.setItem('widgets', JSON.stringify(this.state.widgets));
        });
    }
    
    render() {
        const {data, widgets, sidebar, aside, modal} = this.state;
        
        return (
            <div
                className={
                    "wrapper sidebar-mini " +
                    (sidebar ? 'sidebar-collapse' : '')
                }
                >
                {modal && <Modal title="Add widget" toggle={this.toggleModal}>
                    <NewWidgetForm
                        {...{data}}
                        toggle={this.toggleModal}
                        addWidget={this.addWidget}
                    />
                </Modal>}
                
                <Header
                    toggleSidebar={this.toggleSidebar}
                    toggleModal={this.toggleModal}
                    />
                <Aside />
                <div className="content-wrapper">
                    <section className="content container-fluid">
                        <Dashboard
                            {...{data}}
                            layout={widgets}
                            removeWidget={this.removeWidget}
                            />
                    </section>
                </div>
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

export default App;