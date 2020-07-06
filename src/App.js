import React from 'react';
import {Layout, Row, Col, Menu} from 'antd';
import 'antd/dist/antd.css';
import './app.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigbar from './components/Header.js';
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
                <Navigbar/>
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
                        <Route exact={true} path="/">
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <SignIn/>
                        </Route>
                        <Route path="/register">
                            <SignUp/>
                        </Route>
                        <Route path="/profile">
                            <Account/>
                        </Route>
                    </Switch>
                    <Footer style={{textAlign: 'center', width: "100%"}}>
                        <p>Ant Design ©2018 Created by Ant UED</p>
                        <p>Ant Design ©2018 Created by Ant UED</p>
                        <p>Ant Design ©2018 Created by Ant UED</p>
                    </Footer>
                </Content>
            </div>
        </Router>
    );
}

function Home() {
    return <Grid/>;
}

function SignIn() {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Row align="center">
                <Col>
                    <Login/>
                </Col>
            </Row>
        </Content>
    );
}

function SignUp() {
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Register/>
            </Content>
        </div>
    );
}

function Account() {
    return <Profile/>;
}

function StaticCharts() {
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <header className="jumbotron">
                    <h2>Static Charts</h2>
                </header>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Table/>
                    </Col>
                    <Col>
                        <Donut/>
                    </Col>
                    <Col>
                        <Area/>
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

function OnlineCharts() {
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <header className="jumbotron">
                    <h2>Online charts</h2>
                </header>
                <FetchCarts/>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Pie/>
                    </Col>
                    <Col>
                        <Radial/>
                    </Col>
                </Row>
            </Content>
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
