import React from "react"
import {Route, Switch} from "react-router-dom"
import TileDetails from "./Content/TileDetails"
import Content from "./Content/Content"
import ToSalePage from "./Content/ToSalePage"
import ToBuyPage from "./Content/ToBuyPage"
import ToRentPage from "./Content/ToRentPage"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={(props) => <Content {...props}/>}/>
            <Route path="/details" render={(props) => <TileDetails {...props}/>}/>
            <Route path="/sale" render={(props) => <ToSalePage {...props}/>}/>
            <Route path="/buy" render={(props) => <ToBuyPage {...props}/>}/>
            <Route path="/rent" render={(props) => <ToRentPage {...props}/>}/>
            <Route path='/blog1' exact render={(props) => <Content {...props}/>} component={() => { 
                window.open('https://immobiliarestudioceccano.blogspot.com/2020/07/vendere-casa-perche-partiamo-alti-poi.html','_blank'); 
            }}/>
            <Route path='/blog2' component={() => { 
                window.location.href = 'https://immobiliarestudioceccano.blogspot.com/2020/06/vendi-una-casa-ereditata-occhio-spese.html'; 
                return null;
            }}/>
            <Route path='/blog3' component={() => { 
                window.location.href = 'https://immobiliarestudioceccano.blogspot.com/2019/04/questa-proposta-di-acquisto-che-tutti.html'; 
                return null;
            }}/>

        </Switch>
    )
}

export default Routes