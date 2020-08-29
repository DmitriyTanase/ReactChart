import React from 'react'

import metricsData from 'data/json/metrics'

import './index.css'

const goal = {
    total_sales: 6300,
    total_orders: 210,
}

const config = {
    total_sales: {
        key: 'total_sales',
        title: 'Total Sales',
        format: (v) => (
            <div>
                <p>{Math.round((goal.total_sales * (v + 100)) / 100)}</p>
                <p>({v}%)</p>
            </div>
        ),
        colorRange: [16, 7],
    },
    total_orders: {
        key: 'total_orders',
        title: 'Total Orders',
        format: (v) => (
            <div>
                <p>{Math.round((goal.total_orders * (v + 100)) / 100)}</p>
                <p>({v}%)</p>
            </div>
        ),
        colorRange: [16, 7],
    },
    return_rate: {
        key: 'return_rate',
        title: 'Return Rate',
        format: (v) => v + '%',
        colorRange: [20, 0],
        goal: 10,
    },
    delay_rate: {
        key: 'delay_rate',
        title: 'Delay Rate',
        format: (v) => v + '%',
        colorRange: [0, 0],
        goal: 3.8,
    },
    aov: {
        key: 'aov',
        title: 'AOV',
        format: (v) => v,
        colorRange: [26, 7],
        goal: 30,
    },
    aoc: {
        key: 'aoc',
        title: 'AOC',
        format: (v) => v,
        colorRange: [10, 5],
        goal: 7.8,
    },
}

const getColor = (v, range) => {
    // for range = [0,0] always return grey
    if (range[0] === 0 && range[1] === 0) return 'grey'

    if (v > range[0]) return 'red'
    if (v < range[1]) return 'green'

    return 'grey'
}

const MetricBox = ({ metricKey }) => {
    const data = metricsData[metricKey]
    const cfg = config[metricKey]

    let value = data.value
    // get color
    const color = getColor(value, cfg.colorRange)
    // format value
    value = cfg.format(value)

    return (
        <div className={'metric metric-color_' + color}>
            <div className="metric-content">
                <div className="metric-title">{data.title || cfg.title}</div>
                <div className="metric-value">{value}</div>
            </div>
        </div>
    )
}

export default () => {
    return (
        <div className="metrics block-frame">
            <div className="metrics-wrapper">
                <div className="metrics-row">
                    <MetricBox metricKey={config.total_sales.key} />
                    <MetricBox metricKey={config.total_orders.key} />
                    <MetricBox metricKey={config.return_rate.key} />
                </div>
                <div className="metrics-row">
                    <MetricBox metricKey={config.delay_rate.key} />
                    <MetricBox metricKey={config.aov.key} />
                    <MetricBox metricKey={config.aoc.key} />
                </div>
            </div>
        </div>
    )
}
