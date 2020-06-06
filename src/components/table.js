import React from 'react';
import ApexCharts from 'apexcharts';

let options = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    series: [75],
    labels: ['Total Products'],
};

let chart = new ApexCharts(document.querySelector("#chart"), options);
//chart.render();

class Table extends React.Component {
    render() {
        return (
            <div id="chart">

            </div>
        );
    }
}

export default Table;