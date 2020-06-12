import React from "react"
import {Card} from "@material-ui/core"
import CardHeader from "@material-ui/core/CardHeader"

function TileDetails(props) {
    const { itemTitle } = props.location.state
    return (
        <div>
            <Card>
                <CardHeader title={"Dettagli " + itemTitle}/>
            </Card>
        </div>
    )
}

export default TileDetails