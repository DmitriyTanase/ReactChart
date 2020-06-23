import React, {Component} from "react";
import Chart from "react-apexcharts";
import Area from "./area";
import Column from "./column";


class FetchCarts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            names: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: false,
                        items: result.map(item => item.name.length),
                        names: result.map(item => item.name)
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <Area DataSeries={this.state.items} DataLabels={this.state.names} loading={this.state.isLoaded}/>
                <Column DataSeries={this.state.items} DataLabels={this.state.names} loading={this.state.isLoaded}/>
            </div>
        )
    }
}

export default FetchCarts;