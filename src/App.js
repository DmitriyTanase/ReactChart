import React from 'react';
import {Layout, Menu, Space} from 'antd';
import Grid from './components/Grid';
import 'antd/dist/antd.css';
import Area from "./components/Area";
import Donut from "./components/Donut";
import Table from "./components/table";
import Pie from "./components/Pie";
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
                    <Header>
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item>
                                <Link to="/">Grid</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/about">Charts</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/users">Online charts</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>

                <Content>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>
        </Router>
    );
}

function Home() {
    return <Grid />;
}

function About() {
    return (
        <div>
            <h2>Static Charts</h2>
            <Space direction="horizontal" size={10}>
                <Table />
                <Donut />
                <Area />
            </Space>
        </div>
    )
}

function Users() {
    return (
        <div>
            <h2>Online charts</h2>
            <Space>
                <Pie />
            </Space>
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
