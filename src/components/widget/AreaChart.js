import React, { Component } from 'react';
import { AreaChart as AChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import Box from '../utils/Box';

class AreaChart extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {data, title, remove} = this.props;
        if(!data) return false;
        return (
            <Box {...{title, remove}} className="col-lg-6">
                <ResponsiveContainer width="100%" height={200}>
                    <AChart data={data.slice(-100)} margin={{top: 10, right: 30, left: -30, bottom: 10}}>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='data' stroke='#212dcb' fill='#212dcb' fillOpacity={.2} />
                    </AChart>
                </ResponsiveContainer>
            </Box>
        );
    }
}

export default AreaChart;