import React from 'react';
import ChartBar from '../Chart/ChartBar'
import './Chart.css';

function Chart(props){
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

return (
    <div className='chart'>
    {props.dataPoints.map((dataPoint) => (
    <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue = {totalMaximum}
        label={dataPoint.label}
        />
        
    ))}
    </div>
);
}

export default Chart;