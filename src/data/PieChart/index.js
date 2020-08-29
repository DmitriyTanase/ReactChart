import React from 'react'
import Chart from 'react-apexcharts'

import chartColors from 'data/chartColors'

import './index.css'

export default (props) => {
    const labels = []
    const series = []
    for (const d of props.data) {
        labels.push(d.title)
        series.push(d.value)
    }

    const options = {
        chart: {
            toolbar: { show: false },
        },
        labels,
        dataLabels: {
            formatter: (val, opts) => {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return props.disableLabels ? [val + '%'] : [name, val + '%']
            },
        },
        tooltip: {
            enabled: !!props.enableTooltip,
            y: { formatter: (v) => v + '%' },
        },
        colors: chartColors,
        legend: {
            show: false,
        },
    }

    return <Chart className="pie-chart" type="pie" options={options} series={series} />
}
