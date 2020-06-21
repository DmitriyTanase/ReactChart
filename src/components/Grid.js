import {Layout, Row, Col} from 'antd';
import React from 'react';
import '../grid.css';
import 'antd/dist/antd.css';

const { Content } = Layout;
class Grid extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
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
            </Layout>
        )
    }
}

export default Grid;