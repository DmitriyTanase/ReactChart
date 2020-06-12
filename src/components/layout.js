import {Layout, Menu, Row, Col} from 'antd';
import React from 'react';
import '../layout.css';
import 'antd/dist/antd.css';
import Table from './table';
//import LineChart from './LineChart/index'
import Donut from "./Donut/index";
import Area from "./Area";
import Pie from "./Pie";

const { Header, Content, Footer } = Layout;

class Page extends React.Component {
    gettingDataForPie = async (e) => {
        e.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const mainData = await response.json();
        const dataLength = mainData.map(item => item.name.length);
        console.log(dataLength);
        return dataLength;
    };

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Table />
                        {/*<LineChart />*/}
                        <Donut />
                        <Area />
                        <Pie pieDataMetod = {this.gettingDataForPie} />
                        <Row id='row1' gutter={[32, 30]}>
                            <Col id='col1' span={5}>
                                <div>
                                    Column
                                </div>
                            </Col>
                            <Col id='col2' span={5}>
                                <div>
                                    Column
                                </div>
                            </Col>
                            <Col id='col3' span={5}>
                                <div>
                                    Column
                                </div>
                            </Col>
                        </Row>
                        <Row id='row2' gutter={[32, 2]}>
                            <Col id='col4' span={5}>
                                <div>
                                    Column
                                </div>
                            </Col>
                            <Col id='col5' span={3}>
                                <div>
                                    Column
                                </div>
                            </Col>
                            <Col id='col6' span={7}>
                                <div>
                                    Column
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default Page;