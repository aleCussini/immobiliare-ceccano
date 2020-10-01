import React from "react"
import {Route, Switch} from "react-router-dom"
import TileDetails from "./Content/TileDetails"
import Content from "./Content/Content"
import ToSalePage from "./Content/ToSalePage"
import ToBuyPage from "./Content/ToBuyPage"
import Contacts from "./Content/Contacts"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Content {...props}/>}/>
            <Route path="/details" render={(props) => <TileDetails {...props}/>}/>
            <Route path="/sale" render={(props) => <ToSalePage {...props}/>}/>
            <Route path="/buy" render={(props) => <ToBuyPage {...props}/>}/>
            <Route path="/contacts" render={() => <Contacts/>}/>
        </Switch>
    )
}

export default Routes