export default {
    options: {
        chart: {
            type: 'line',
            height: '450',
            stacked: false
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "series-2",
                data: [20, 45, 35, 70, 40, 50, 77, 91]
            }
        ]
    }
}