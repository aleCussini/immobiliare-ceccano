import React, {Component} from 'react'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import firebase from "./components/Firebase/firebase"
import {BrowserRouter} from "react-router-dom"
import Routes from "./components/Routes"

const db = firebase.database()

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {items: []}
    }

    componentDidMount() {
        db.ref("/data").on("value", snapshotData => {
            let allItems = []
            snapshotData.forEach(snapshot => {
                allItems.push(snapshot.val())
            })
            this.setState({items: allItems})
        })
    }

    render() {
        return (
            <BrowserRouter>
                <WindowDimensionsProvider>
                    <Routes items={this.state.items}/>
                </WindowDimensionsProvider>
            </BrowserRouter>
        )
    }
}

export default App