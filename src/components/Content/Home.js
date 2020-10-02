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
        backgroundColor: '#1c1c1c'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        color:'#e0e4ff'
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color:'#e0e4ff'
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
    },
    footer:{
        backgroundColor: '#1c1c1c',
        marginTop: "0px"
    },
    footerMargin:{
        margin:'0px',
        color:'#e0e4ff'
    }
}))

function MyAppBar({isMobile}) {
    const [openDrawer, setOpenDrawer] = useState(false)
    const classes = useStyles()
    const theme = useTheme()

    const links = [
        <Link variant="h6"  href={"/services"}
              className={classes.link}>
            Servizi
        </Link>,
        <Link variant="h6"  href={"https://immobiliarestudioceccano.blogspot.com/"}
              className={classes.link}>
            Blog
        </Link>,
        <Link variant="h6"  href={"/contacts"} className={classes.link}>
            Contatti
        </Link>,
        <Link variant="h6"  href={"/"} className={classes.link}>
            Chi Siamo?
        </Link>
    ]

    return (
        <AppBar variant={"elevation"} position="sticky" color="transparent" elevation={0}
                className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link variant="h6"  href={"/"} className={classes.toolbarTitle}>
                    Mantua Immobiliare
                </Link>
                {!isMobile ?
                    <div style={{marginLeft: "15%", flexGrow: 1}}>
                        <IconButton>
                            <Facebook  className={classes.link}/>
                        </IconButton>
                        <IconButton>
                            <Whatsapp  className={classes.link}/>
                        </IconButton>
                        <IconButton>
                            <Instagram  className={classes.link}/>
                        </IconButton>
                    </div> : null}
                {!isMobile ?
                    <div>
                        {links}
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
                            {links}
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
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom className={classes.footerMargin}>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" component="p" className={classes.link}>
                Something here to give the footer a purpose!
            </Typography>
            <Typography variant="body2" align="center" className={classes.footerMargin}>
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
