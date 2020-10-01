import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
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

function sendFeedback () {
    window.emailjs.send(
      'gmail', "template_6k8v7wh","tes-message","test-name","cick92@tiscali.it"
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

function Contacts(){
    const classes = useStyles()
    return (

<div align="center"><div>
            <Typography variant="h4" align="center" style={{marginBottom: '1%'}}>
                Scrivimi una mail
            </Typography>
            <FormControl className={classes.formControl}>
                        <TextField label={"Nome"} 
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Indirizzo Email"} 
                                 
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Messaggio"} 
                                   multiline
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={sendFeedback()}>Invia</Button>
        </div></div>
    )
}

export default Contacts