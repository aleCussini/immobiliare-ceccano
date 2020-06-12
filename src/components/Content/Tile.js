import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import {Link} from "react-router-dom"

function Tile({className, content, title, image}) {
    return (
        <div className='tile is-parent'>
            <CardActionArea component={Link} to={"/details"}>
                <Card variant={"outlined"}>
                    <CardHeader title={title}/>
                    <CardMedia component={"img"} image={image}/>
                    <CardContent>{content}</CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default Tile
