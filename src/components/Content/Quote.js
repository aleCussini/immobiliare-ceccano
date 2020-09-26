import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import db from "../Firebase/firebase-db"

var quoteText;
db.ref('texts/quote').once('value').then(function(snapshot) {
    quoteText = snapshot.val();
})

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
        <Container fixed /*className={classes.quoteContent}*/>
            <Typography component="h1" variant="h2" align='center' className={classes.headerTitle} gutterBottom>
                Luca Mantua
            </Typography>
            <Typography variant="h5" align="center" className={classes.headerTitle} paragraph>
                <FormatQuoteIcon/>{quoteText}<FormatQuoteIcon/>
            </Typography>
        </Container>
    )
}

export default Quote