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
                        <Row id='row1'  align="middle" >
                            <Col id='col1'
                                 xs={24}
                                 sm={24}
                                 md={8}
                                 lg={6}>
                                    Column
                            </Col>
                            <Col id='col2'
                                 xs={24}
                                 sm={24}
                                 md={8}
                                 lg={6}>
                                    Column
                            </Col>
                            <Col id='col3'
                                 xs={24}
                                 sm={24}
                                 md={8}
                                 lg={6}>
                                    Column
                            </Col>
                        </Row>
                        <Row id='row2'  align="middle" >
                            <Col id='col4'
                                 xs={24}
                                 sm={24}
                                 md={8}
                                 lg={6}>
                                    Column
                            </Col>
                            <Col id='col5'
                                 xs={24}
                                 sm={24}
                                 md={8}
                                 lg={6}>
                                    Column
                            </Col>
                            <Col id='col6'
                                 xs={24}
                                 sm={24}
                                 md={8}
                                 lg={6}>
                                    Column
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Grid;