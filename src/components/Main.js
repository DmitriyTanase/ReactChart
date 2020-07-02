import {Switch, Route} from "react-router-dom";
import React from 'react';
import 'antd/dist/antd.css';
import Home from './Home'
import Grid from './Grid'
import pie from './Pie/index'
import donut from './Donut/index'
import Area from "./Area/index";


class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/grid" component={Grid}/>
                    <Route path="/List of Charts" component={Area}/>
                    <Route path="/Online Charts" component={pie}/>
                </Switch>
            </div>
        )
    };
}

export default Main;