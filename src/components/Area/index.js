import React, { Component } from "react";
import Chart from "react-apexcharts";
import areaData from "./AreaData";

class Area extends Component {
    render() {

        return (
            <div className="area">
                <Chart
                    options={areaData.options}
                    series={areaData.series}
                    type="area"
                    width="450"
                />
            </div>
        );
    }
}

export default Area;