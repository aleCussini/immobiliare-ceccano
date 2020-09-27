import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
//import 'react-image-gallery/styles/css/image-gallery.css'
import Container from "@material-ui/core/Container"
import "react-alice-carousel/lib/alice-carousel.css"
import db from "../Firebase/firebase-db"

var parse = require('html-react-parser');
var toSaleText;
var toSaleQuery = db.ref('texts');
toSaleQuery.once('value').then(function(snapshotSet) {
    snapshotSet.forEach(snapshot => {
        if(snapshot.val().scope=='toSale'){
            toSaleText = snapshot.val().richContent
        }
    })
})

const useStyles = makeStyles((theme) => ({
        itemTitle: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        }    
    })
)

function ToSalePage(props) {
    const classes = useStyles()

    return (
        <div>
            <Typography align={"center"}
                        variant="h2"
                        className={classes.itemTitle}>{"Per Vendere"}</Typography>
            <Container maxWidth={"md"} style={{marginTop: '5%', marginBottom: '10%'}}>
                {parse(toSaleText)}
            </Container>
        </div>
    )
}

export default ToSalePage