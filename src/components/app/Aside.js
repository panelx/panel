import React, { Component } from 'react';
import axios from 'axios';

class Aside extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newDashboard: false
        }
    }
    
    handleAddNew = () => {
        this.setState({
            newDashboard: true
        })
    }
    
    handleKey = (e) => {
        if(e.key === 'Enter'){
            const {updateDashboards} = this.props;
            
            axios.post(
                'http://localhost:3001/dashboard/new', {title: e.target.value}
            ).then(response => {
                updateDashboards(response.data);
                
                this.setState({
                    newDashboard: false
                });
            });
        }
    }

    render() {
        const {dashboards, changeDashboard} = this.props;
        const {newDashboard} = this.state;

        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">Dashboards</li>
                        {dashboards.map((item, index) => 
                            <li key={index}><a href="#" onClick={() => changeDashboard(index)}><i className="fa fa-link"></i> <span>{item.title}</span></a></li>
                        )}
                        {newDashboard && <li><input type="text" className="form-control" onKeyDown={this.handleKey}/></li>}
                        <li><a href="#" onClick={this.handleAddNew}><i className="fa fa-plus"></i> <span>Add new</span></a></li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Aside;