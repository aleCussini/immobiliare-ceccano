import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import HandshakeIcon from "mdi-material-ui/Handshake"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

const useStyles = makeStyles((theme) => ({
    heroButtons: {
        marginBottom: theme.spacing(2),
    },
    headerTitle: {
        color: '#e0e4ff'
    },
    quoteContent: {
        backgroundImage: 'url(https://www.sossystems.co.uk/wp-content/uploads/quote-background-03.png)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
        marginTop: 30
    }
}))

function Quote() {
    const classes = useStyles()
    return (
        <Container  fixed /*className={classes.quoteContent}*/>
            <Typography component="h1" variant="h2" align='center' className={classes.headerTitle} gutterBottom>
                    Luca Mantua
                </Typography>
            <Typography variant="h5" align="center" className={classes.headerTitle} paragraph>
                <FormatQuoteIcon/>La casa è anche una storia. <br/> Ogni giorno studio e lavoro per imparare
                a raccontare anche la tua.<br /> Se vorrai.<FormatQuoteIcon/>
            </Typography>
        </Container>
    )
}

export default Quote