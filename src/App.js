import React from 'react';
import {Layout, Row, Col, Menu, Space} from 'antd';
import Grid from './components/Grid';
import 'antd/dist/antd.css';
import Area from "./components/Area";
import Donut from "./components/Donut";
import Table from "./components/table";
import Pie from "./components/Pie";
import Radial from "./components/Radial";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const {Header, Content, Footer} = Layout;
export default function App() {
    return (
        <Router>
            <div>
                <Layout>
                    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item>
                                <Link to="/">Grid</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/charts">Charts</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/onlineCharts">Online charts</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>

                <Content style={{marginTop: 64,}}>
                    <Switch>
                        <Route path="/charts">
                            <StaticCharts/>
                        </Route>
                        <Route path="/onlineCharts">
                            <OnlineCharts/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Content>

                <Footer style={{
                    textAlign: 'center',
                    position: "fixed",
                    width: "100%",
                }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>
        </Router>
    );
}

function Home() {
    return <Grid/>;
}

function StaticCharts() {
    return (
        <div>
            <h2>Static Charts</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col >
                    <Table/>
                </Col>
                <Col >
                    <Donut/>
                </Col>
                <Col >
                    <Area/>
                </Col>
            </Row>
        </div>
    )
}

function OnlineCharts() {
    return (
        <div>
            <h2>Online charts</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col >
                    <Pie/>
                </Col>
                <Col >
                    <Radial/>
                </Col>
            </Row>
        </div>
    )
}


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Main />
//                 <Footer/>
//             </div>
//             // <div>
//             //     <Page />
//             // </div>
//         )
//     }
// }
//
// export default App;
