import React, {Component} from 'react';
import ioClient from 'socket.io-client';

import './assets/css/style.css';

import Header from './components/app/Header';
import Aside from './components/app/Aside';
import Modal from './components/app/Modal';
import Dashboard from './components/app/Dashboard';
import NewWidgetForm from './components/tools/NewWidgetForm';

import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        
        this.initSocket();

        this.state = {
            'data': {},
            'sidebar': 1,
            'modal': false,
            'dashboards': [],
            'dashboard': 0
        }
    }
    
    componentDidMount = () => {
        axios.get('http://localhost:3001/dashboards').then(response => {
            this.setState({
                dashboards: response.data
            });
        });
    }
    
    updateDashboards = (response) => {
        this.setState({
            dashboards: response
        })
    }
    
    removeDashboard = () => {
        axios.delete('http://localhost:3001/dashboard/' + this.getDashboardId())
            .then(response => {
                this.setState({
                    dashboards: response.data
                });
            });
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
    
    getDashboardId = () => this.state.dashboards[this.state.dashboard]._id;
    
    addWidget = (widget) => {
        const {dashboard} = this.state;
        
        axios.post(
            'http://localhost:3001/widget/new?dashboardId=' + this.getDashboardId(), widget
        ).then(response => {
            this.updateDashboards(response.data);
        });
    }
    
    removeWidget = (id) => {
        axios.delete(
            'http://localhost:3001/widget/' + id
        ).then(response => {
            this.updateDashboards(response.data);
        });
    }
    
    changeDashboard = (id) => {
        this.setState({
            dashboard: id
        });
    }
    
    render() {
        const {
            data, widgets, sidebar, aside, modal, dashboards, dashboard
        } = this.state;
        
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
                    removeDashboard={this.removeDashboard}
                    />
                <Aside
                    {...{dashboards}}
                    changeDashboard={this.changeDashboard}
                    updateDashboards={this.updateDashboards}
                />
                <div className="content-wrapper">
                    <Dashboard
                        {...{data}}
                        layout={dashboards[dashboard]}
                        removeWidget={this.removeWidget}
                    />
                </div>
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

export default App;