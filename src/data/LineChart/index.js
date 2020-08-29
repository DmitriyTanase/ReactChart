import React, {Component} from "react";
import Chart from "react-apexcharts";
import lineChartData from "./lineChartData"

class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {lineChartData}
    }

    render() {
        return (
            <div className="line">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="500"
                />
            </div>
        );
    }
}

export default LineChart;