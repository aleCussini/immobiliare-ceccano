import React from "react"
import Carousel from "react-material-ui-carousel"
import CardMedia from "@material-ui/core/CardMedia"
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

const images = [
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112655-15.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200512114001-30.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112643-9.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112649-12.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112634-5.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112636-6.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112626-1.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112640-8.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112651-13.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112653-14.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112658-17.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112700-18.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112702-19.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112706-21.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112719-28.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112714-25.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112717-27.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112721-29.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112725-31.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112731-34.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112734-36.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112736-37.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112740-39.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112746-42.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112748-43.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112750-44.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112754-46.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112757-47.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112758-48.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112803-50.jpg"
]

const useStyles = makeStyles((theme) => ({
    itemTitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    card: {
        maxWidth: "max-content",
        margin: "auto"
    },
    carousel: {
        maxWidth: "max-content",
        margin: "auto"
    }
}))

function TileDetails(props) {
    const {itemTitle} = props.location.state
    const classes = useStyles()
    return (
        <div>
            <Typography align={"center"}
                        variant="h5"
                        className={classes.itemTitle}>{"Dettagli " + itemTitle}</Typography>
            <Carousel autoPlay={false} indicators={true} animation={"fade"} className={classes.carousel}>
                {
                    images.map(image =>
                        <Card className={classes.card}>
                            <CardMedia component={"img"} image={image}/>
                        </Card>
                    )
                }
            </Carousel>
        </div>
    )
}

export default TileDetails