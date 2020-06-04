import React from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

function Tile({className, content, title, image}) {

    return (
        <div className='tile is-parent'>
            <Card variant={"outlined"}>
                <CardHeader title={title}/>
                <CardMedia component={"img"} image={image}/>
                <CardContent>{content}</CardContent>
            </Card>
        </div>
    )
}

export default Tile
