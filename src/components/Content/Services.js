import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
//import 'react-image-gallery/styles/css/image-gallery.css'
import Container from "@material-ui/core/Container"
import "react-alice-carousel/lib/alice-carousel.css"
import db from "../Firebase/firebase-db"
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from "@material-ui/core/CardActionArea"
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    itemTitle: {
        paddingTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    
    background: {
      backgroundImage: 'url(http://www.mediateamsoftware.com/images/0a5d5bcfe0be52c3c246b51620671a7e.jpg)',
      backgroundRepeat: "repeat",
      backgroundPosition: "center center",
      [theme.breakpoints.up('md')]: {
          paddingRight: "10%",
          paddingLeft: "10%",
      },
    }
  })
)

function Services() {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Typography align={"center"}
                        variant="h2"
                        className={classes.itemTitle}>{"I Nostri Servizi"}</Typography>
            <Container maxWidth={"md"} style={{marginTop: '5%', paddingBottom: '10px'}}>
    <Card className={classes.root} style={{marginBottom: '5px'}}>
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Valutazione Casa </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            La Valutazione Commerciale è una consulenza. L'investimento per questo servizio varia in base all'immobile
            ed alle sue specifiche caratteristiche. A partire da 200€
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    <Card className={classes.root} style={{marginBottom: '5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Preliminare Compravendita</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Come il servizio EVOLUTO più visita all'immobile e visure presso l'ufficio catastale per capire se
            cioò che è stato realizzato è regolare.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root} style={{marginBottom: '5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Foto e Testi per Annunci Online</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Veniamo a casa, facciamo le foto, tante belle foto. Osserviamo bene la casa ed il contesto
            per realizzare dei testi adeguati ed esaltare gli aspetti positivi. A partire da 250€
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Divider />
    <Card className={classes.root} style={{marginBottom: '5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Redazione e Registrazione Preliminare di Vendita
</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Si acquistano anche consigli di base
          (urbanistici/catastali/provenienza immobile/fiscali) e controllo in ufficio dei documenti forniti.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root} style={{marginBottom: '5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Redazione e Registrazione Contratto di Affitto
 </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Scriviamo il contratto sulla base di documenti e notizie che ci dai e lo registriamo. Escluse eventuali 
            imposte di registrazione e consulenze.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root} style={{marginBottom: '5px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">Consulenza </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Circa 1 ora di colloquio su temi e pratiche specifiche. Pagamento anticipato alla prenotazione 
            dell'appuntamento. A partire da 100€
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Container>
        </div>
    )
}

export default Services