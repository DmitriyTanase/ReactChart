import React from 'react';
import {Layout, Row, Col, Menu} from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header.js';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Grid from './components/Grid';
import Area from "./components/Area";
import Donut from "./components/Donut";
import Table from "./components/table";
import Pie from "./components/Pie";
import Radial from "./components/Radial";
import FetchCarts from "./components/FetchingCharts/getData"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const {Content, Footer} = Layout;
export default function App() {
    return (
        <Router>
            <div>
                <Header />
                {/*<Layout>*/}
                {/*    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>*/}
                {/*        <Menu theme="dark" mode="horizontal">*/}
                {/*            <Menu.Item>*/}
                {/*                <Link to="/">Grid</Link>*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item>*/}
                {/*                <Link to="/charts">Charts</Link>*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item>*/}
                {/*                <Link to="/onlineCharts">Online charts</Link>*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item>*/}
                {/*                <Link to="/login">Login</Link>*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item>*/}
                {/*                <Link to="/register">Register</Link>*/}
                {/*            </Menu.Item>*/}
                {/*            <Menu.Item>*/}
                {/*                <Link to="/profile">{currentUser.username}</Link>*/}
                {/*            </Menu.Item>*/}
                {/*        </Menu>*/}
                {/*    </Header>*/}
                {/*</Layout>*/}

                <Content style={{marginTop: 64}}>
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
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                </Content>

                <Footer style={{textAlign: 'center', width: "100%"}}>
                    <p>Ant Design ©2018 Created by Ant UED</p>
                    <p>Ant Design ©2018 Created by Ant UED</p>
                    <p>Ant Design ©2018 Created by Ant UED</p>
                </Footer>
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
            <Row align="middle" justify="space-between">
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
            <FetchCarts />
            <Row align="middle" justify="space-between">
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
