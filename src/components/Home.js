import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Space } from 'antd';

const { Text } = Typography;


class Home extends React.Component {
    render() {
        return (
            <Space align="center">
                <Text type="primary">Home Page</Text>
                <Text type="secondary">Watching other pages</Text>
            </Space>
        )
    }
}

export default Home;