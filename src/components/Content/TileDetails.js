import React, {Component} from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import CardMedia from "@material-ui/core/CardMedia"
import Card from "@material-ui/core/Card"
import "react-alice-carousel/lib/alice-carousel.css"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import {Bathtub, Hotel, NavigateBefore, NavigateNext, SquareFoot} from "@material-ui/icons"
import ReactAliceCarousel from "react-alice-carousel"
import IconButton from "@material-ui/core/IconButton"
import Divider from "@material-ui/core/Divider"
import {Box, withStyles} from "@material-ui/core"
import {Map, Marker, TileLayer} from 'react-leaflet'
import FullscreenControl from "react-leaflet-fullscreen"
import 'react-leaflet-fullscreen/dist/styles.css'
import db from '../Firebase/firebase-db'
import LinearProgress from "@material-ui/core/LinearProgress";

const osmUrl = "https://nominatim.openstreetmap.org/?format=json&limit=1&q="

let parse = require('html-react-parser')

const styles = theme => ({
    itemTitle: {
        paddingTop: theme.spacing(3),
        marginBottom: theme.spacing(3)

    },
    card: {
        maxWidth: "max-content",
        margin: "auto"
    },
    carousel: {
        maxWidth: "max-content",
        margin: "auto"
    },
    background: {
        backgroundImage: 'url(http://www.mediateamsoftware.com/images/0a5d5bcfe0be52c3c246b51620671a7e.jpg)',
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        [theme.breakpoints.up('md')]: {
            paddingRight: "10%",
            paddingLeft: "10%",
        },
    },
    paper: {
        backgroundColor: "white"
    },
    infoTable: {
        [theme.breakpoints.up('md')]: {
            display: "flex",
        },
    },
    leftInfoTable: {
        marginTop: '5%',
        [theme.breakpoints.up('md')]: {
            marginBottom: '10%',
        },
    },
    rightInfoTable: {
        marginBottom: '10%',
        [theme.breakpoints.up('md')]: {
            marginTop: '5%',
        },
    }
})

class MyCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            galleryItems: props.item.gallery.map(image =>
                <Card style={{maxWidth: "max-content", margin: "auto"}}>
                    <CardMedia component={"img"} image={image.src}/>
                </Card>)
        }
    }

    thumbItem = (item, i) => (
        <Button onClick={() => this.Carousel.slideTo(i)}>
            <img src={item} width={50} height={50} alt={"thumb"}/>
        </Button>
    )

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">
                    <Grid item>
                        <IconButton onClick={() => this.Carousel.slidePrev()}><NavigateBefore/></IconButton>
                    </Grid>
                    <Grid item xs={8}>
                        <ReactAliceCarousel
                            dotsDisabled={true}
                            buttonsDisabled={true}
                            items={this.state.galleryItems}
                            ref={(el) => (this.Carousel = el)}
                        />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => this.Carousel.slideNext()}><NavigateNext/></IconButton>
                    </Grid>
                </Grid>
                {/*<nav>{images.map(this.thumbItem)}</nav>*/}
            </div>
        )
    }
}

const MyMap = ({position}) => {
    return (
        <Container style={{paddingBottom: '5%'}}>
            <Map center={position} zoom={20}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}/>
                <FullscreenControl position="topleft"/>
            </Map>
        </Container>
    )
}

const InfoTable = (props) => {
    const types = ["", "Appartamento", "Indipendente"]
    const item = props.item
    const classes = props.classes
    const leftInfo = [{"Tipologia": types[item.type]}, {"Piano": item.floor}, {"Provincia": item.province}, {"Riscaldamento": item.heating}, {"Condizionatori": item.airconditioners == 'False' ? 'No' : 'Si'}, {"Dati APE" : item.ape}, {'Stato' : item.status}]
    const rightInfo = [{"Indirizzo": item.address}, {"Comune": item.city}, {"Bagni": item.bathrooms}, {"Camere": item.rooms}, {"MQ Commerciali": item.squaremeters}, {"MQ calpestabili": item.realsquaremeters}, {"Anno di Costruzione": item.year}]
    return (
        <div className={classes.infoTable}>
            <Container className={classes.leftInfoTable}>
                {leftInfo.map(info =>
                    <Card square={true} variant={"outlined"}
                          style={{padding: "2%", display: "flex"}}>
                        <div style={{flexGrow: 1, color: "darkOrange"}}>{Object.keys(info)[0]}:</div>
                        {info[Object.keys(info)[0]]}
                    </Card>
                )}
            </Container>
            <Container className={classes.rightInfoTable}>
                {rightInfo.map(info =>
                    <Card square={true} variant={"outlined"}
                          style={{padding: "2%", display: "flex"}}>
                        <div style={{flexGrow: 1, color: "darkOrange"}}>{Object.keys(info)[0]}:</div>
                        {info[Object.keys(info)[0]]}
                    </Card>
                )}
            </Container>
        </div>
    )
}

class TileDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {position: null, item: null, loading: true}
    }

    componentDidMount() {
        window.scroll(0, 0)

        let postRef = db.ref('data/' + this.props.location.state.dataRef)
        console.log(postRef)
        postRef.on('value',
            snapshot => {
                const item = snapshot.val()
                console.log('fetched item', item)
                console.log("Coordinates", item.coordinates)
                fetch(osmUrl.concat(item.coordinates))
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('This is your data', data)
                        const p = data[0]
                        this.setState({position: [p.lat, p.lon], item: item, loading: false})
                        console.log('Map state', this.state)
                    })
            }
        )
    }

    render() {
        console.log(this.state)
        const {classes} = this.props
        const {item} = this.state
        console.log('item', item)
        return this.state.loading ?
            <LinearProgress color={"secondary"}/> :
            <div className={classes.background}>
                <div className={classes.paper}>

                    <Typography align={"center"}
                                variant="h5"
                                className={classes.itemTitle}>{item.title}</Typography>
                    <Container style={{marginTop: '3%', marginBottom: '0%'}}>
                        <MyCarousel item={item}/>
                        <Box justifyContent={"center"} style={{display: "flex", marginTop: "2%"}}>
                            <Card square={true} variant={"outlined"}
                                  style={{
                                      padding: "2%",
                                      marginRight: "1%",
                                      minWidth: "max-content",
                                      maxHeight: "max-content"
                                  }}>
                                <Typography align={"center"}
                                            variant="h6"
                                            color={"primary"}>{item.city}</Typography>
                            </Card>
                            <Card square={true} variant={"outlined"}
                                  style={{
                                      padding: "2%",
                                      minWidth: "max-content",
                                      display: "flex",
                                      maxHeight: "max-content"
                                  }}>
                                <Bathtub style={{marginRight: 10}}/>&nbsp;
                                <Typography align={"center"}
                                            variant="h6">{item.bathrooms}</Typography>
                            </Card>
                            <Card square={true} variant={"outlined"}
                                  style={{
                                      padding: "2%",
                                      minWidth: "max-content",
                                      display: "flex",
                                      maxHeight: "max-content"
                                  }}>
                                <SquareFoot style={{marginRight: 10}}/>&nbsp;
                                <Typography align={"center"}
                                            variant="h6">{item.squaremeters}</Typography>
                            </Card>
                            <Card square={true} variant={"outlined"}
                                  style={{
                                      padding: "2%",
                                      minWidth: "max-content",
                                      display: "flex",
                                      maxHeight: "max-content"
                                  }}>
                                <Hotel style={{marginRight: 10}}/>&nbsp;
                                <Typography align={"center"}
                                            variant="h6">{item.rooms}</Typography>
                            </Card>
                            <Card square={true} variant={"outlined"}
                                  style={{
                                      padding: "2%",
                                      marginLeft: "1%",
                                      minWidth: "max-content",
                                      maxHeight: "max-content"
                                  }}>
                                <Typography align={"center"}
                                            variant="h6"
                                            color={"primary"}>{item.price + ' €'}</Typography>
                            </Card>
                        </Box>
                        <div>
                            <Divider variant={"middle"} style={{marginTop: "5%"}}/>
                            <Typography align={"center"}
                                        variant="h4"
                                        style={{marginTop: '5%'}}>{"Descrizione immobile"}</Typography>
                            <Container style={{marginTop: '5%', marginBottom: '10%', textAlign: 'center'}}>
                                {parse(item.content)}
                            </Container>
                            <Typography align={"center"}
                                        variant="h4"
                                        style={{marginTop: '5%'}}>{"Informazioni immobile"}</Typography>
                            <InfoTable item={item} classes={classes}/>
                            {this.state.position ? <MyMap position={this.state.position}/> : null}
                        </div>
                    </Container>
                </div>
            </div>
    }
}

export default withStyles(styles, {withTheme: true})(TileDetails)