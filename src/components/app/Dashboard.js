import React, { Component } from 'react';
import Widget from '../widget/Widget';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {data, layout, removeWidget} = this.props;

        if(!layout) return false;

        return (
            <div>
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>{layout && layout.title}</small>
                    </h1>
                </section>
                
                <section className="content container-fluid">
                    <div className="row">
                        {layout.widgets.map((widget, index) => (
                            <Widget
                                key={index}
                                {...widget}
                                data={data[widget.scriptId]}
                                remove={() => removeWidget(widget._id)}
                                />
                        ))}
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Dashboard;