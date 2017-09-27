import React, {Component} from 'react';
import ioClient from 'socket.io-client';

import './assets/css/style.css';

import Header from './components/Header';
import Aside from './components/Aside';
import AsideAlt from './components/AsideAlt';
import Dashboard from './components/Dashboard';
import NewWidgetForm from './components/tools/NewWidgetForm';

class App extends Component {
    constructor(props){
        super(props);
        
        this.initSocket();
        
        const widgetsPreset = JSON.parse(localStorage.getItem('widgets'));
        
        this.state = {
            'data': {},
            'sidebar': 1,
            'aside': 0,
            'widgets': widgetsPreset ? widgetsPreset : []
        }
    }
    
    initSocket = () => {
        this.socket = ioClient('http://localhost:3001');
        
        this.socket.on('connect', () => {
            this.socket.on('newPackage', response => {
                this.setState({
                    data: Object.assign({}, this.state.data, {
                        [response.scriptId]: response.data
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
    
    toggleAside = () => {
        this.setState(prev => ({
            aside: !prev.aside
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
            widgets: prev.widgets.slice(id, -1)
        }));
    }
    
    render() {
        const {data, widgets, sidebar, aside} = this.state;

        return (
            <div
                className={
                    "hold-transition skin-black-light sidebar-mini " +
                    (sidebar ? 'sidebar-collapse' : '')
                }
            >
                <div className="wrapper">
                    <Header
                        toggleSidebar={this.toggleSidebar}
                        toggleAside={this.toggleAside}
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
                    <AsideAlt
                        open={aside}
                    >
                        <NewWidgetForm
                            {...{data}}
                            addWidget={this.addWidget}
                        />
                    </AsideAlt>
                    <div className="control-sidebar-bg"></div>
                </div>
            </div>
        );
    }
}

export default App;