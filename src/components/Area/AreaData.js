export default {
    options: {
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001],
        },
        chart: {
            height: 350,
            type: 'line'
        },
        dataLabels: {
            enabled: false
        }
    },
    series: [{
        name: 'Area Plot1',
        type: 'area',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }]
}