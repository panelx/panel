import React, { Component } from 'react';
import Box from '../utils/Box';

class RawOutput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, title, remove} = this.props;
        if(!data) return false;
        return (
            <Box {...{title, remove}} className="col-lg-6">
                <div className="console">
                    {data.slice(-8).map((line, index) => (
                        <p className="console__line" key={index}>&gt; {JSON.stringify(line)}</p>
                    ))}
                </div>
            </Box>
        );
    }
}

export default RawOutput;