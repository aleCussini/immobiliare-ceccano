import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
//import 'react-image-gallery/styles/css/image-gallery.css'
import Container from "@material-ui/core/Container"
import "react-alice-carousel/lib/alice-carousel.css"

const useStyles = makeStyles((theme) => ({
        itemTitle: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        }    
    })
)

function ToBuyPage(props) {
    const classes = useStyles()

    return (
        <div>
            <Typography align={"center"}
                        variant="h2"
                        className={classes.itemTitle}>{"Per Comprare"}</Typography>
                 <Typography align={"center"}
                        variant="h4"
                        className={classes.itemTitle}>{"Some Title Here"}</Typography>
            <Container maxWidth={"md"} style={{marginTop: '5%', marginBottom: '10%'}}>
            Guida Comprare Casa a Bologna? Ecco perché…

Può sembrarti strano, ma l’attività di cercare casa a Bologna non è così banale come possa sembrare.
Per questo ti presento alcuni consigli pratici, uno molto innovativo (Home Hunter o Cacciatore di Immobili) che può veramente rivelarsi “una manna” per molti.

 

 
Hai già le idee chiare su cosa cerchi?

Un attico in centro a Bologna o una villetta con giardino in prima periferia? Speso i costi di queste 2 soluzioni sono equivalenti ma offrono stili di vita completamente diversi.
Capire esattamente cosa cerchi dalla tua futura casa può sembrare “normale” ma poi se ad esempio hai famiglia man mano che cerchi, visiti appartamenti o effettui semplicemente ricerche emerge una divisione di obiettivi fra i partner. Tali divergenze possono aumentare se hai figli ed in relazione all’età dei figli stessi.
Attenzione!
Hai stabilito un budget?

Definita la reale necessità, prima di cercare casa nuova abbiamo bisogno di un parametro importante: qual è la mia reale capacità di spesa? Comprare casa significa anche pagare le spese accessorie e probabilmente arredarla (almeno in parte).
Effettuata questa importantissima stima (per essere prudenziale abbonda, male che vada avrai risparmiato qualche migliaio di euro) dovrai redigere il tuo piano finanziario. Quanto hai di liquidità? Devi chiedere un mutuo casa per la parte eccedente? Nel caso, recati in banca e fai una analisi su cosa potresti ottenere e verifica se la rata mensile è compatibile con il tuo bilancio familiare (o personale se sei single).
Se devi vendere prima casa tua, la valutazione dell’eventuale introito della vendita fallo credibile. E’ un errore comune sovrastimare la propria abitazione.
Dove cercare Casa?

La prima cosa che farai è andare su Google oppure sui portali immobiliari blasonati, inserire i tuoi parametri di ricerca e cominciare a crearti una lista. Oppure scaricherai qualche APP per il tuo tablet o smartphone.
Attenzione: sui portali immobiliari c.d. “blasonati” l’attenzione non è rivolta a chi cerca casa, ma offrire visibilità ai loro clienti (gli inserzionisti). Quindi vedrai le offerte immobiliari come te le presentano loro e non quello che tu desideri. Inoltre, questi portali hanno canoni elevati per gli inserzionisti che variano in funzione del numero annunci pubblicati. Motivo per cui non potrai trovare tutta l’offerta disponibile sul mercato ma solo una frazione: ciò che loro desiderano farti vedere.
Sondare con attenzione tutto il mercato non è attività semplice e probabilmente in qualche angolo della città c’è quello che realmente ti serve ma non sarai in grado di saperlo.
Come cercare casa?

 Oltre a “scandagliare” il web facendo attenzione ai limiti sopra descritti, esistono anche figure professionali altamente qualificate e specializzate Home Hunter cacciare immobili su committenza!
L’Home Hunter, Property Finder, Flat Hunter  è il TUO “cacciatore di case”. Un professionista che rispetto ad un’agenzia immobiliare tradizionale ha come cliente unico ed esclusivo l'acquirente. 
Un unico interlocutore per l’acquirente che tutele integralmente ed esclusivamente gli interessi del compratore assistendolo in ogni fase compresa la trattativa. Il vantaggio è che far trattare ha chi ha piena visibilità del mercato può ottenere veramente le condizioni migliori per il proprio cliente.

Un Home Hunter può cercare per te la casa dei tuoi sogni superando il limite dell’offerta proposta dai portali (lui vede tutto il mercato); ti fa risparmiare tempo (ti presenterà solo 2 o 3 soluzioni ed avrà fatto filtro per te); ti fa risparmiare denaro (unico interlocutore che gestirà la trattativa curando esclusivamente i tuoi interessi); sarà il TUO consulente.

Se desideri ulteriori chiarimenti, contattaci compilando il modulo che segue:
            </Container>
        </div>
    )
}

export default ToBuyPage