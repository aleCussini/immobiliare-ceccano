import React, {Component} from "react"
import Typography from "@material-ui/core/Typography"
//import 'react-image-gallery/styles/css/image-gallery.css'
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

const images = [
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112655-15.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112643-9.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112649-12.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112634-5.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112636-6.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112626-1.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112640-8.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112651-13.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112653-14.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112658-17.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112700-18.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112702-19.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112706-21.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112719-28.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112714-25.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112717-27.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112721-29.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112725-31.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112731-34.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112734-36.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112736-37.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112740-39.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112746-42.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112748-43.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112750-44.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112754-46.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112757-47.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112758-48.jpg",
    "https://cdn2.gestim.biz/custom/01433/foto/thumb/20200219112803-50.jpg"
]

const styles = theme => ({
    itemTitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
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
        backgoundSize: "cover",
        backgroundPosition: "center center",
        paddingRight: "20%",
        paddingLeft: "20%"
    },
    paper: {
        backgroundColor: "white"    }
})

class MyCarousel extends Component {
  
    state = {
        galleryItems: images.map(image =>
            <Card style={{maxWidth: "max-content", margin: "auto"}}>
                <CardMedia component={"img"} image={image}/>
            </Card>)
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

const InfoTable = (props) => {
    const item = props.item
    const leftInfo = [{Codice: 1}, {"Tipologia": item.type}, {"Piano": item.floor}, {"Locali": item.rooms}, {"Provincia": item.province}, {"Riscaldamento": item.heating}, {"Condizionatori": 0}]
    const rightInfo = [{"Contratto": 2}, {"Regione": "Lazio"}, {"Comune": "BO"}, {"Bagni": 2}, {"Camere": 6}, {"Totale MQ": 100}, {"Cl. energetica": "B"}]
    return (
        <div style={{display: "flex"}}>
            <Container style={{marginTop: '5%', marginBottom: '10%'}}>
                {leftInfo.map(info =>
                    <Card square={true} variant={"outlined"}
                          style={{padding: "2%", display: "flex"}}>
                        <div style={{flexGrow: 1, color: "darkOrange"}}>{Object.keys(info)[0]}:</div>
                        {info[Object.keys(info)[0]]}
                    </Card>
                )}
            </Container>
            <Container style={{marginTop: '5%', marginBottom: '10%'}}>
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

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const {item} = this.props.location.state
        const {classes} = this.props
        return (
            <div className={classes.background}>
            <div className={classes.paper}>
                <Typography align={"center"}
                            variant="h5"
                            className={classes.itemTitle}>{"Dettagli " + item.title}</Typography>
                <Container maxWidth={"md"} style={{marginTop: '3%', marginBottom: '10%'}}>
                    <MyCarousel/>
                    <Box justifyContent={"center"} style={{display: "flex", marginTop: "2%"}}>
                        <Card square={true} variant={"outlined"}
                              style={{
                                  padding: "2%",
                                  marginRight: "1%",
                                  minWidth: "max-content",
                                  maxHeight: "max-content"
                              }}>
                            {/*aggiungere city in oggetto firebase!!!*/}
                            <Typography align={"center"}
                                        color={"secondary"}
                                        variant="h6">{item.city}</Typography>
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
                                        variant="h6">{item.bathrooms + " Bagni"}</Typography>
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
                                        variant="h6">{item.squaremeters + " MQ"}</Typography>
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
                                        variant="h6">{item.rooms + " Camere"}</Typography>
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
                           {item.content}
                        </Container>
                        <Typography align={"center"}
                                    variant="h4"
                                    style={{marginTop: '5%'}}>{"Informazioni immobile"}</Typography>
                        <InfoTable item={item} />
                    </div>
                </Container>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(TileDetails)