import React from "react";
import Chart from "react-apexcharts";

class Area extends React.Component {

    render() {
        const series = this.props.items;
        const names = this.props.names;
        return (
            <div>
                {this.props.loading
                    ? <h4>Loading...</h4>
                    : <div>
                        <Chart
                            series={[{data: this.props.items}]}
                            options={{labels: names}}
                            type="area"
                            width="500"
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Area;