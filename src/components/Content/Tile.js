import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import {Link} from "react-router-dom"

function Tile({item}) {
    return (
        <Card variant={"outlined"} style={{height: "max-content"}}>
            <CardActionArea component={Link}
                            to={{
                                pathname: '/details',
                                state: {item: item}
                            }}>
                <CardHeader
                    title={item.title}
                    subheader={item.scope === 'sale' ? item.price + ' €' : item.price + ' €/mese'}
                />
                <CardMedia component={"img"} image={item.image}/>
                <CardContent>{item.content}</CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Tile
