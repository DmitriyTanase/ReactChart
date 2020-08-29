import React from 'react'
import Chart from 'react-apexcharts'

import './index.css'

export default (props) => {
    const options = {
        plotOptions: {
            radialBar: {
                startAngle: -110,
                endAngle: 110,
                track: {
                    background: '#c7c7c7',
                    startAngle: -110,
                    endAngle: 110,
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        fontSize: '30px',
                        show: true,
                    },
                },
            },
        },
        colors: ['#ff7675'],
    }

    if (props.label) {
        options.labels = [props.label]
    }

    return <Chart className="radial-chart" type="radialBar" options={options} series={[props.data]} height="100%" />
}
