import React, { Component } from "react";
import Chart from "react-apexcharts";
//import pieData from "./PieData";

class Pie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350,
                    type: 'line'
                },
                dataLabels: {
                    enabled: false
                }
            },
            series: [{
                name: 'Pie Plot1',
                type: 'area',
                data: this.props.pieDataMetod
            }]
        }
    }

    render() {
        return (
            <div className="pie">
                <form>
                    <button> Получить данные </button>
                </form>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    width="500"
                />
            </div>
        );
    }
}

export default Pie;