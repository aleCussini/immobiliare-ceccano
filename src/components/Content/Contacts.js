import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import React, {useState, useRef} from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
    },
    expand: {
        marginTop: '2%',
        marginLeft: '2%',
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        })
    },
    expandOpen: {
        marginTop: '2%',
        marginLeft: '2%',
        transform: 'rotate(180deg)',
    },
    gridTileIcon: {
        color: theme.palette.primary.contrastText
    }
}))

function sendFeedback (name, email, message) {
    console.log("start sendFeedBack");
    console.log('input message: ' + message)
    var templateParams = {
        from_name: name,
        to_name: 'Mantua Immobiliare',
        message: message,
        reply_to: email
    };
    console.log(templateParams);
    
    
   /* window.emailjs.send(
      'service_8jensxb', "template_imwmbs9",templateParams,'user_zW0uNksKijlGA6iHPXoFG'
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
     */ 
    }

function Contacts(){
    const classes = useStyles()
    const [message, setMessage] = useState('default-message')
    const [name, setName] = useState('default-name')
    const [email, setEmail] = useState('default-email')
    return (
        <Container maxWidth='sm' align="center">
            <Typography variant="h4" align="center" style={{margin: '3%'}}>
                Scrivimi una mail
            </Typography>
                <TextField label={"Nome"} className={classes.formControl} fullWidth onChange={e => setName(e.target.value)}/>
                <TextField label={"Indirizzo Email"} className={classes.formControl} fullWidth onChange={e => setEmail(e.target.value)}/>
                <TextField label={"Messaggio"} 
                    onChange={e => setMessage(e.target.value)}
                    multiline
                    fullWidth
                    className={classes.formControl}/>              
                <Button endIcon={<SendIcon />}
                        className={classes.formControl}
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        onClick={()=>sendFeedback(name, email, message)}>Invia</Button>
        </Container>
    )
}

export default Contacts