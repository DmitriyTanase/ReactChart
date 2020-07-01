import {Layout, Row, Col} from 'antd';
import React from 'react';
import '../grid.css';
import 'antd/dist/antd.css';
import UserService from "../services/user.service";

const { Content } = Layout;
class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                })
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                })
            }
        )
    }

    render() {
        return (
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <header className="jumbotron">
                        <h3>{this.state.content}</h3>
                    </header>
                    <div className="site-layout-content">
                        <Row id='row1'  align="middle" justify="space-between">
                            <Col id='col1'  md={8}>
                                    Column
                            </Col>
                            <Col id='col2'  md={8}>
                                    Column
                            </Col>
                            <Col id='col3'  md={8}>
                                    Column
                            </Col>
                        </Row>
                        <Row id='row2'  align="middle" justify="space-around">
                            <Col id='col4'  md={8}>
                                    Column
                            </Col>
                            <Col id='col5'  md={8}>
                                    Column
                            </Col>
                            <Col id='col6'  md={8}>
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