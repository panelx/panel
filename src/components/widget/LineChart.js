import React, { Component } from 'react';
import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import Box from '../utils/Box';

class LineChart extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {data, title, remove} = this.props;

        return (
            <Box {...{title, remove}} className="col-lg-6">
                <ResponsiveContainer width="100%" height={200}>
                    <LChart data={data}>
                        <Line type="monotone" dataKey="data" stroke="red" />
                        <Tooltip />
                    </LChart>
                </ResponsiveContainer>
            </Box>
        );
    }
}

export default LineChart;