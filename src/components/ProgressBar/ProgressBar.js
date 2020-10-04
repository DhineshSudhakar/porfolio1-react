import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ percent }) => {

    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        setValue(percent * 100);
    }, [percent]);

    return (
        <div className="progress-div" style={{ width: "100%" }}>
            <div style={{ width: `${value}%` }} className="progress" />
        </div>
    );
};

export default ProgressBar