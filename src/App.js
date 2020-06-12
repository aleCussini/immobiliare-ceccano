import React, {Component} from 'react'
import Content from './components/Content'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import firebase from "./components/Firebase/firebase";

const db = firebase.database();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []}
    }

    componentDidMount() {
        db.ref("/data").on("value", snapshotData => {
            let allItems = [];
            snapshotData.forEach(snapshot => {
                allItems.push(snapshot.val())
            })
            this.setState({items: allItems})
        })
    }

    render() {
        return (
            <WindowDimensionsProvider>
                <Content items={this.state.items}/>
            </WindowDimensionsProvider>
        );
    }
}

export default App