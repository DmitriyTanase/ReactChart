import React from "react";
import Chart from "react-apexcharts";

class Column extends React.Component {

    render() {
        return (
            <div>
                {this.props.loading
                    ? <h4>Loading...</h4>
                    : <div>
                        <Chart
                            series={[{data: this.props.DataSeries}]}
                            options={{labels: this.props.DataLabels}}
                            type="bar"
                            width="500"
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Column;