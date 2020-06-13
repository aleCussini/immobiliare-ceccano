import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "@material-ui/core/Link"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Routes from "../Routes"

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}))

function MyAppBar() {
    const classes = useStyles()
    return (
        <AppBar variant={"elevation"} position="static" color="transparent" elevation={0}
                className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link variant="h6" color="textPrimary" href={"/"} className={classes.toolbarTitle}>
                    Agenzia Demo
                </Link>
                <nav>
                    <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                        Blog
                    </Link>
                    <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                        Contatti
                    </Link>
                    <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                        Chi Siamo?
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

function MyFooter() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://real-estate-pd.web.app/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}

const Home = () => {
    return (
        <div>
            <MyAppBar/>
            <Routes/>
            <MyFooter/>
        </div>
    )
}

export default Home
