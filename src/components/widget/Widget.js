import React, { Component } from 'react';
import Box from './Box';
import Box2 from './Box2';
import LineChart from './LineChart';

class Widget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {widgetType} = this.props;
        
        switch(widgetType){
            case 'TextBox':
                return <Box {...this.props} />;
            case 'TextBox2':
                return <Box2 {...this.props} />;
            case 'LineChart':
                return <LineChart {...this.props} />;
            default:
                return null;
        }
    }
}

export default Widget;