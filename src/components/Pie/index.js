import React, {Component} from "react";
import Chart from "react-apexcharts";
import { Typography, Space } from 'antd';

const { Text } = Typography;
class Pie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.map(item => item.name.length)
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
        const {error, isLoaded, items} = this.state;
        if (error) {
            return (
                <space align="center">
                    <Text strong type="danger" fontSize={14}>Ошибка: {error.message}</Text>
                </space>
            );
        } else if (!isLoaded) {
            return (
                <space align="center">
                    <Text color="primary" fontSize={14}>Загрузка...</Text>
                </space>
            );
        } else {
            return (
                <div>
                    <Chart
                        series={[{data: items}]}
                        type="line"
                        options={{}}
                         width="500"
                    />
                </div>
            );
        }
    }
}

export default Pie;