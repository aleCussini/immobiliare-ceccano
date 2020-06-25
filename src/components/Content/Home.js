import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "@material-ui/core/Link"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Routes from "../Routes"
import IconButton from "@material-ui/core/IconButton"
import {ChevronLeft, ChevronRight, Facebook, Instagram, Menu} from "@material-ui/icons"
import {useWindowDimensions} from "../WindowDimensionsProvider"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import {Whatsapp} from "mdi-material-ui"
import Box from "@material-ui/core/Box"

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
                    Mantua Immobiliare
                </Link>
                {!isMobile ?
                    <div style={{marginLeft: "5%", flexGrow: 1}}>
                        <IconButton>
                            <Facebook/>
                        </IconButton>
                        <IconButton>
                            <Whatsapp/>
                        </IconButton>
                        <IconButton>
                            <Instagram/>
                        </IconButton>
                    </div> : null}
                {!isMobile ?
                    <div>
                        <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                            Blog
                        </Link>
                        <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                            Contatti
                        </Link>
                        <Link variant="h6" color="textPrimary" href={"/"} className={classes.link}>
                            Chi Siamo?
                        </Link>
                    </div>
                    :
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
                            <Divider/>
                            <Box justifyContent={"center"} style={{display: "flex", marginTop: "5%"}}>
                                <IconButton>
                                    <Facebook/>
                                </IconButton>
                                <IconButton>
                                    <Whatsapp/>
                                </IconButton>
                                <IconButton>
                                    <Instagram/>
                                </IconButton>
                            </Box>
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
