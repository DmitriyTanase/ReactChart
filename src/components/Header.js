import {Link} from "react-router-dom";
import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import AuthService from "../services/auth.service";



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser } = this.state;

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
                            {currentUser ? (
                                <div>
                                    <Menu.Item>
                                        <Link to="/profile">{currentUser.username}</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a href="/" onClick={this.logOut}>
                                            LogOut
                                        </a>
                                    </Menu.Item>
                                </div>
                            ) : (
                                <div>
                                    <Menu.Item>
                                        <Link to="/login">Login</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/register">Register</Link>
                                    </Menu.Item>
                                </div>
                            )}
                        </Menu>
                    </Header>
                </Layout>
            </div>
        )
    }
}

export default Header;