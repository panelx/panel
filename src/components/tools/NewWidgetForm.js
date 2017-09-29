import React, { Component } from 'react';

class NewWidgetForm extends Component {
    constructor(props) {
        super(props);
        
        this.data = this.props.data;
        
        this.state = {
            title: '',
            scriptId: 0,
            type: 'bg-aqua',
            widgetType: 'TextBox'
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
        const {addWidget, toggle} = this.props;
        const {title, scriptId, type, widgetType} = this.state;
        
        addWidget({title, scriptId, type, widgetType});
        toggle();
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
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.handleNameChange} type="text" className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label>Type</label>
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
                            <option>TextBox2</option>
                            <option>LineChart</option>
                            <option>RawOutput</option>
                            <option>AreaChart</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Script</label>
                        <select className="form-control" onChange={this.handleScriptChange}>
                            {Object.keys(this.data).map((key) => <option value={this.data[key][0].data} key={key}>Id: {key}; Wartość: {this.data[key][0].data}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewWidgetForm;