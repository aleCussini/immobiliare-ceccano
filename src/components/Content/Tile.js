import React from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

function Tile({className, content, title, image}) {
    return (
        <div className='tile is-parent'>
            <Card variant={"outlined"}>
                <CardActionArea onClick={alert('ciao stronzi')}>        
                    <CardHeader title={title}/>
                    <CardMedia component={"img"} image={image}/>
                    <CardContent>{content}</CardContent>
                </CardActionArea>    
            </Card>
        </div>
    )
}

export default Tile
