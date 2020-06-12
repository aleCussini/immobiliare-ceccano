import React from "react"
import {Route, Switch} from "react-router-dom"
import TileDetails from "./Content/TileDetails"
import Content from "./Content"

const Routes = ({items}) => {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Content items={items} {...props}/>}/>
            <Route path="/details" component={TileDetails}/>
        </Switch>
    )
}

export default Routes