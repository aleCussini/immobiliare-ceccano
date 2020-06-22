import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
//import 'react-image-gallery/styles/css/image-gallery.css'
import Container from "@material-ui/core/Container"
import "react-alice-carousel/lib/alice-carousel.css"

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
                 <Typography align={"center"}
                        variant="h4"
                        className={classes.itemTitle}>{"UN PIANO MARKETING SU MISURA PER CASA TUA"}</Typography>
            <Container maxWidth={"md"} style={{marginTop: '5%', marginBottom: '10%'}}>
                    Come te, la tua casa è unica.
                    Ha le sue misure, il suo stile, la sua storia.
                    E ha il suo pubblico di acquirenti ideali.
                    Raggiungere quel pubblico è il nostro obiettivo.
                    Lo facciamo con un piano marketing su misura per il tuo immobile,
                    come un abito di sartoria, basato sulle tue reali esigenze.
                    Così la tua casa guadagna valore e tu risparmi tempo prezioso.

                    Chiamaci per una valutazione gratuita del tuo immobile.
            </Container>
        </div>
    )
}

export default ToSalePage