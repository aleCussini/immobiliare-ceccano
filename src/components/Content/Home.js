import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "@material-ui/core/Link"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Routes from "../Routes"
import IconButton from "@material-ui/core/IconButton"
import {ChevronLeft, ChevronRight, Menu} from "@material-ui/icons"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import {useWindowDimensions} from "../WindowDimensionsProvider"

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'white'
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
    drawer: {
        // width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
}))

function MyAppBar({isMobile}) {
    const [openDrawer, setOpenDrawer] = useState(false)
    const classes = useStyles()
    const theme = useTheme()
    return (
        <AppBar variant={"elevation"} position="sticky" color="transparent" elevation={0}
                className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link variant="h6" color="textPrimary" href={"/"} className={classes.toolbarTitle}>
                    Agenzia Demo
                </Link>
                {!isMobile ?
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
                    </nav> :
                    <div>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={() => setOpenDrawer(!openDrawer)}
                            // className={clsx(open && classes.hide)}
                        >
                            <Menu/>
                        </IconButton>
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="right"
                            open={openDrawer}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                                    {theme.direction === 'rtl' ? <ChevronLeft/> : <ChevronRight/>}
                                </IconButton>
                            </div>
                            <Divider/>
                            <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                                Blog
                            </Link>
                            <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                                Contatti
                            </Link>
                            <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                                Chi Siamo?
                            </Link>
                        </Drawer>
                    </div>
                }
            </Toolbar>
        </AppBar>
    )
}

function MyFooter() {
    return (
        <footer style={{marginTop: '10%'}}>
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
    const {width} = useWindowDimensions()
    return (
        <div>
            <MyAppBar isMobile={width < 1088}/>
            <Routes/>
            <MyFooter/>
        </div>
    )
}

export default Home
