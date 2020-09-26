import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
//import 'react-image-gallery/styles/css/image-gallery.css'
import Container from "@material-ui/core/Container"
import "react-alice-carousel/lib/alice-carousel.css"
import db from "../Firebase/firebase-db"

var parse = require('html-react-parser');
var toBuyText;
db.ref('texts/toBuyText').once('value').then(function(snapshot) {
    toBuyText = snapshot.val();
})

const useStyles = makeStyles((theme) => ({
        itemTitle: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        }    
    })
)

function ToBuyPage(props) {
    const classes = useStyles()

    return (
        <div>
            <Typography align={"center"}
                        variant="h2"
                        className={classes.itemTitle}>{"Per Comprare"}</Typography>
                 <Typography align={"center"}
                        variant="h4"
                        className={classes.itemTitle}>{"Some Title Here"}</Typography>
            <Container maxWidth={"md"} style={{marginTop: '5%', marginBottom: '10%'}}>
                {toBuyText}
            </Container>
        </div>
    )
}

export default ToBuyPage