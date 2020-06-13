import React from "react"
import {Route, Switch} from "react-router-dom"
import TileDetails from "./Content/TileDetails"
import Content from "./Content/Content"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Content {...props}/>}/>
            <Route path="/details" render={(props) => <TileDetails {...props}/>}/>
        </Switch>
    )
}

export default Routes