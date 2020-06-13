import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    }
}))

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

export default MySearchForm