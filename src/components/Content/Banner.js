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

const useStyles = makeStyles((theme) => ({
    heroButtons: {
        marginBottom: theme.spacing(2),
    },
    headerTitle: {
        color: '#e0e4ff'
    },
}))

function MyBanner() {
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth={"sm"}>
                <Typography component="h1" variant="h2" align='center' className={classes.headerTitle} gutterBottom>
                    Mantua Immobiliare
                </Typography>
                <Typography variant="h5" align="center" className={classes.headerTitle} paragraph>
                    I will write some great, great text on your website’s Southern border, and I will make Google
                    pay for that text.
                    Mark my words. Lorem Ipsum is a choke artist. It chokes!
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Link to="/buy">
                                <Button variant="contained" color="primary">
                                    <HomeIcon/>&nbsp;Comprare
                                </Button></Link>
                        </Grid>
                        <Grid item>
                            <Link to="/sale">
                                <Button variant="contained" color="primary">
                                    <AttachMoneyIcon/>&nbsp;Vendere
                                </Button></Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default MyBanner