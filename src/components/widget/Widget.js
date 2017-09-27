import React, { Component } from 'react';
import Box from './Box';

class Widget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {widgetType, type, value, name} = this.props;
        switch(widgetType){
            case 'TextBox':
                return <Box {...this.props} />;
            default:
                return null;
        }
    }
}

export default Widget;