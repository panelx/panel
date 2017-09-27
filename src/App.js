import React, {Component} from 'react';
import ioClient from 'socket.io-client';

import './assets/css/style.css';

import Header from './components/Header';
import Aside from './components/Aside';
import Box from './components/widget/Box';
import NewWidgetForm from './components/tools/NewWidgetForm';

class App extends Component {
    constructor(props){
        super(props);
        
        this.initSocket();
        
        this.state = {
            'data': {},
            'sidebar': 1,
            'widgets': []
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
    
    addWidget = (widget) => {
        this.setState(prev => ({
            widgets: [...prev.widgets, widget]
        }));
    }
    
    removeWidget = (id) => {
        this.setState(prev => ({
            widgets: prev.widgets.slice(id, -1)
        }));
    }
    
    render() {
        const {data, widgets, sidebar} = this.state;

        return (
            <div className={"hold-transition skin-black sidebar-mini " + (sidebar ? 'sidebar-collapse' : '')}>
                <div className="wrapper">
                    <Header toggleSidebar={this.toggleSidebar}/>
                    <Aside />
                    <div className="content-wrapper">
                        <section className="content container-fluid">
                            <NewWidgetForm {...{data}} addWidget={this.addWidget}/>
                            <div className="row">
                                {widgets && widgets.map((item, index) => <Box
                                        key={index}
                                        title={item.title}
                                        value={data[item.scriptId]}
                                        className="col-md-3 col-sm-6 col-xs-12"
                                        remove={() => this.removeWidget(index)}
                                    />
                                )}
                            </div>
                        </section>
                    </div>
                    <div className="control-sidebar-bg"></div>
                </div>
            </div>
        );
    }
}

export default App;