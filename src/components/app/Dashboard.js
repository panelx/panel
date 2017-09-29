import React, { Component } from 'react';
import Widget from '../widget/Widget';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, layout, removeWidget} = this.props;
        return (
            <div className="row">
                {layout && layout.map((widget, index) => (
                    <Widget
                        key={index}
                        {...widget}
                        data={data[widget.scriptId]}
                        remove={() => removeWidget(index)}
                    />
                ))}
            </div>
        );
    }
}

export default Dashboard;