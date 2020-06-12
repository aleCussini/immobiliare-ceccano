import Grid from "@material-ui/core/Grid"
import ResponsiveLayout from "../ResponsiveLayout"
import DesktopView from "./DesktopView"
import MobileView from "./MobileView"
import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import HomeIcon from "@material-ui/icons/Home"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import HandshakeIcon from "mdi-material-ui/Handshake"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5cd10e3e797f7404070443e1/1557509160211-KQ8OL2E74DXJ5BQ004Y6/ke17ZwdGBToddI8pDm48kN2LnfnsQi8dCgeHU4sBN4IUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dk-ww5vauMhltFjP34Qf3O-2Ir-AsOBRB_scpiZgK3WeoRwB-dUGsSquCnVTFQcaRg/4.jpg?format=2500w)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    searchForm: {
        marginLeft: theme.spacing(6),
    }
}))

function MyBanner() {
    const classes = useStyles()
    return (
        <div className={classes.heroContent}>
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

function MySearchForm() {
    const classes = useStyles()
    return (
        <Card raised={true} variant={"outlined"}>
            <CardHeader title={"Cerca Annunci"} style={{textAlign: "center"}}/>
            <CardContent>
                <FormControl className={classes.formControl}>
                    <InputLabel id="type-select-label">Per?</InputLabel>
                    <Select labelId="type-select-label"
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        width: 250,
                                    },
                                },
                            }}
                            children={[
                                <MenuItem value={10}>Comprare</MenuItem>,
                                <MenuItem value={20}>Vendere</MenuItem>,
                                <MenuItem value={30}>Affittare</MenuItem>
                            ]}
                    />
                </FormControl>
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel id="comune-select-label">Comune</InputLabel>
                    <Select labelId="comune-select-label"
                            MenuProps={{
                                PaperProps: {
                                    style: {
                                        width: 250,
                                    },
                                },
                            }}
                            children={[
                                <MenuItem value={10}>Roma</MenuItem>,
                                <MenuItem value={20}>Firenze</MenuItem>,
                                <MenuItem value={30}>Bari</MenuItem>
                            ]}
                    />
                </FormControl>
                <br/>
                <FormControl className={classes.formControl}>
                    <TextField label={"Prezzo Min."} inputMode={"numeric"}/>
                </FormControl>
                <br/>
                <FormControl className={classes.formControl}>
                    <TextField label={"Prezzo Max."} inputMode={"numeric"}/>
                </FormControl>
            </CardContent>
        </Card>
    )
}

const Content = ({items}) => {
    const classes = useStyles()
    return (
        <div>
            <Grid container xs={12} justify={"flex-start"} className={classes.heroContent}>
                <Grid xs={4}/>
                <Grid xs={4}><MyBanner/></Grid>
                <Grid xs={4} sm={2} className={classes.searchForm}><MySearchForm/></Grid>
            </Grid>
            <ResponsiveLayout
                breakPoint={767}
                renderDesktop={() => (
                    <DesktopView items={items}/>
                )}
                renderMobile={() => (
                    <MobileView items={items}/>
                )}
            />
        </div>
    )
}

export default Content