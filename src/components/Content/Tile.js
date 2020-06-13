import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import {Link} from "react-router-dom"

function Tile({item}) {
    return (
        <div className='tile is-parent'>
            <CardActionArea component={Link}
                            to={{
                                pathname: '/details',
                                state: {item: item}
                            }}>
                <Card variant={"outlined"}>
                    <CardHeader title={item.title}/>
                    <CardMedia component={"img"} image={item.image}/>
                    <CardContent>{item.content}</CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default Tile
