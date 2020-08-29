import {Link} from "react-router-dom";
import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import AuthService from "../services/auth.service";


const {Header} = Layout;

class Navigbar extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = ({
            currentUser: undefined
        });
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const {currentUser} = this.state;

        return (
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
                            <Menu.Item>
                                <Link to="/profile">Account</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/" onClick={this.logOut}>
                                    LogOut
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/login">Login</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/register">Register</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            </div>
        )
    }
}


export default Navigbar;