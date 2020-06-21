import {Layout, Menu, Row, Col} from 'antd';
import React from 'react';
import '../grid.css';
import 'antd/dist/antd.css';
import Table from './table';
//import LineChart from './LineChart/index'
import Donut from "./Donut/index";
import Area from "./Area";
import Pie from "./Pie";


class Page extends React.Component {

    render() {
        return (
            <div>
                <Pie />
            </div>
        )
    }
}

// const {Header, Content, Footer} = Layout;
//
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             pieData: [],
//             //donutData: null,
//             //areaData: null,
//
//             pieLoading: false,
//             //donutLoading: false,
//             //areaLoading: false,
//
//             error: null
//         };
//     }

// componentDidMount() {
//
//      fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((response) => {
//             this.setState({pieData: response});
//             this.setState({pieLoading: true});
//         })
//         .then((error) => {
//             this.setState({false: true});
//             this.setState({error});
//         })

    // getPieData(e) {
    //     e.preventDefault();
    //
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((response) => {
    //             this.setState({pieData: response});
    //             this.setState({pieLoading: true});
    //         })
    //         .then((error) => {
    //             this.setState({false: true});
    //             this.setState({error});
    //         })
    // }

    // getDonutData() {
    //     this.setState({donutLoading: true});
    //     const donutData = await fetch
    //     this.setState({donutData, donutLoading: false})
    // }
    //
    // getAreaData() {
    //     this.setState({areaLoading: true});
    //     const areaData = await fetch
    //     this.setState({areaData, areaLoading: false})
    // }
//}

    // render() {
    //     return (
    //         <div>
    //             <Pie
    //                 data={this.state.pieData} loading={this.state.pieLoading}
    //                 getData={this.getPieData} error={this.state.error}
    //             />
    //             {/*<Donut data={this.state.donutData} loading={this.state.donutLoading} getData={this.getDonutData}/>*/}
    //             {/*<Area data={this.state.areaData} loading={this.state.areaLoading} getData={this.getAreaData}/>*/}
    //             {/*<Table data={this.state.areaData} loading={this.state.areaLoading} getData={this.getAreaData}/>*/}
    //         </div>
    //     )
    // }

    // gettingDataForPie = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const mainData = await response.json();
    //     console.log(mainData);
    // };

    // render() {
    //     return (
    //         <Layout className="layout">
    //             <Header>
    //                 <div className="logo" />
    //                 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    //                     <Menu.Item key="1">nav 1</Menu.Item>
    //                     <Menu.Item key="2">nav 2</Menu.Item>
    //                     <Menu.Item key="3">nav 3</Menu.Item>
    //                 </Menu>
    //             </Header>
    //             <Content style={{ padding: '0 50px' }}>
    //                 <div className="site-layout-content">
    //                     <Table />
    //                     {/*<LineChart />*/}
    //                     <Donut />
    //                     <Area />
    //                     <Pie pieDataMetod = {this.gettingDataForPie} />
    //                     <Row id='row1' gutter={[32, 30]}>
    //                         <Col id='col1' span={5}>
    //                             <div>
    //                                 Column
    //                             </div>
    //                         </Col>
    //                         <Col id='col2' span={5}>
    //                             <div>
    //                                 Column
    //                             </div>
    //                         </Col>
    //                         <Col id='col3' span={5}>
    //                             <div>
    //                                 Column
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                     <Row id='row2' gutter={[32, 2]}>
    //                         <Col id='col4' span={5}>
    //                             <div>
    //                                 Column
    //                             </div>
    //                         </Col>
    //                         <Col id='col5' span={3}>
    //                             <div>
    //                                 Column
    //                             </div>
    //                         </Col>
    //                         <Col id='col6' span={7}>
    //                             <div>
    //                                 Column
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                 </div>
    //             </Content>
    //             <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    //         </Layout>
    //     )
    // }
//}

export default Page;