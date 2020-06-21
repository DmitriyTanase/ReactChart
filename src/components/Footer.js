import {Layout} from "antd";
import React from "react";
import 'antd/dist/antd.css';


const { Footer } = Layout;
class BottomSide extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        )
    }
}
export default BottomSide;
