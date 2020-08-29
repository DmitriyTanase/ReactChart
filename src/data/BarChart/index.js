import React from 'react'
import Chart from 'react-apexcharts'

import chartColors from 'data/chartColors'

import './index.css'

export default (props) => {
    const options = {
        chart: {
            stacked: true,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: { horizontal: true },
        },
        xaxis: {
            title: { text: 'Units' },
            categories: props.data.items,
        },
        yaxis: { title: { text: 'Product' } },
        fill: { opacity: 1 },
        legend: { show: false },
        colors: chartColors,
    }

    return <Chart className="bar-chart" type="bar" options={options} series={props.data.series} height="100%" />
}
