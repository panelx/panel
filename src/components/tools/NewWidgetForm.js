import React, { Component } from 'react';

class NewWidgetForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            scriptId: 0,
            type: 'bg-aqua',
            widgetType: 'TextBox',
            collapsed: 1
        }
    }
    
    handleNameChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    
    handleScriptChange = (e) => {
        this.setState({
            scriptId: e.target.value
        })
    }
    
    handleSubmit = () => {
        const {addWidget} = this.props;
        const {title, scriptId, type, widgetType} = this.state;
        
        addWidget({title, scriptId, type, widgetType});
    }
    
    toggle = () => {
        this.setState(prev => ({
            collapsed: !prev.collapsed
        }));
    }
    
    handleTypeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }
    
    handleWidgetChange = (e) => {
        this.setState({
            widgetType: e.target.value
        })
    }
    
    render() {
        const {data} = this.props;
        const {collapsed} = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className={"box " + (collapsed ? 'collapsed-box' : '')}>
                        <div className="box-header with-border">
                            <h3 className="box-title">Dodaj nowy widget</h3>
                            <button type="button" className="btn btn-box-tool pull-right" onClick={this.toggle}>
                                {collapsed ? <i className="fa fa-plus" /> : <i className="fa fa-minus" />}
                            </button>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <label>Nazwa</label>
                                <input onChange={this.handleNameChange} type="text" className="form-control" />
                            </div>
                            
                            <div className="form-group">
                                <label>Typ</label>
                                <select className="form-control" onChange={this.handleTypeChange}>
                                    <option value="bg-aqua">Aqua</option>
                                    <option value="bg-green">Green</option>
                                    <option value="bg-yellow">Yellow</option>
                                    <option value="bg-red">Red</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>Widget</label>
                                <select className="form-control" onChange={this.handleWidgetChange}>
                                    <option>TextBox</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>Skrypt</label>
                                <select className="form-control" onChange={this.handleScriptChange}>
                                    {Object.keys(data).map(key => <option value={key} key={key}>Id: {key}; Wartość: {data[key]}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Dodaj</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewWidgetForm;