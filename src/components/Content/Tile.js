import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import {Link} from "react-router-dom"
import {Bathtub, Hotel, SquareFoot, Home} from "@material-ui/icons"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}))

function Tile({item}) {
    const classes = useStyles()
    return (
        <Card variant={"outlined"} style={{height: "max-content"}}>
            <CardActionArea component={Link}
                            to={{
                                pathname: '/details',
                                state: {dataRef: item.dataRef}
                            }}>
                <CardHeader
                    title={item.title}
                    subheader={item.price + ' €'}
                />
                {/*<CardMedia component={"img"} image={item.image.src}/>*/}
                <CardContent>
                    <Typography className={classes.link}>
                        <Home className={classes.icon} />{item.address}, {item.city}
                    </Typography>                    
                    <Breadcrumbs separator={"|"} style={{paddingTop: "5%"}}>
                        <Typography className={classes.link}>
                            <Bathtub className={classes.icon}/>
                            {item.bathrooms}
                        </Typography>
                        <Typography className={classes.link}>
                            <SquareFoot className={classes.icon}/>
                            {item.squaremeters}
                        </Typography>
                        <Typography className={classes.link}>
                            <Hotel className={classes.icon}/>
                            {item.rooms}
                        </Typography>
                    </Breadcrumbs>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Tile
