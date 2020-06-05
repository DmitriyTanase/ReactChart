import React from 'react';
import Page from './components/layout'
import chart from "./components/totalProducts";

class App extends React.Component {
    render() {
        return (
            <div>
                <Page />
                <div id={chart}/>
            </div>
        )
    }
}

export default App;
