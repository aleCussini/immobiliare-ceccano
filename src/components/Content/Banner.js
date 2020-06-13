import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import HandshakeIcon from "mdi-material-ui/Handshake"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}))

function MyBanner() {
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth={"sm"}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Header layout
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    I will write some great, great text on your website’s Southern border, and I will make Google
                    pay for that text.
                    Mark my words. Lorem Ipsum is a choke artist. It chokes!
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="textSecondary">
                                <HomeIcon/>&nbsp;Comprare
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                <AttachMoneyIcon/>&nbsp;Vendere
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                <HandshakeIcon/>&nbsp;Locare
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default MyBanner