import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import {Link} from "react-router-dom"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import {ExpandLess} from "@material-ui/icons"
import db from "../Firebase/firebase-db"

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


const SearchBar = ({items, searchColumn}) => {
    const [expanded, setExpanded] = useState(false)
    const [result, setResult] = useState([])
    const [city, setCity] = useState('')
    const [maxPrice, setMaxPrice] = useState(0)
    const [type, setType] = useState(0)
    var types = ["","Appartamento", "Indipendente"];

    function search() {
        if (city) {
            items = items.filter(function (item) {
                return item.city == city
            })
        }
        if (type)
            items = items.filter(function (item) {
                return item.type == type
        })
        if(maxPrice){
            items = items.filter(function (item) {
                return item.price < maxPrice
            })
        }
        setResult(items)
        setExpanded(true)
    }

    const classes = useStyles()
    return (
        <AppBar position="static" color={"grey"} style={{marginBottom: '5%'}}>
            <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <FormControl className={classes.formControl}
                                 variant={"outlined"}>
                        <InputLabel id="type-select-label">Tipo</InputLabel>
                        <Select labelId="type-select-label" onChange={e => setType(e.target.value)}
                                label={"Tipo"}>
                            <MenuItem value={1}>Appartamento</MenuItem>
                            <MenuItem value={2}>Indipendente</MenuItem>
                            <MenuItem value={''}>- tutti -</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Prezzo Max."} inputMode={"numeric"}
                                   onChange={e => setMaxPrice(e.target.value)}
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                    <FormControl className={classes.formControl}
                                 variant={"outlined"}>
                        <InputLabel id="comune-select-label">Comune</InputLabel>
                        <Select labelId="comune-select-label" onChange={e => setCity(e.target.value)}
                                label={"Comune"}
                                children={[
                                    <MenuItem value={'Ceccano'}>Ceccano</MenuItem>,
                                    <MenuItem value={'Pastena'}>Pastena</MenuItem>,
                                    <MenuItem value={'Frosinone'}>Frosinone</MenuItem>,
                                    <MenuItem value={'Giuliano di Roma'}>Giuliano di Roma</MenuItem>,
                                    <MenuItem value={''}>- tutti -</MenuItem>
                                ]}
                        />
                    </FormControl>
                </div>
                <div style={{display: 'flex'}}>
                    <Button onClick={() => search()}>{'cerca'}</Button>
                    {expanded ?
                        <IconButton onClick={() => setExpanded(false)}>
                            <ExpandLess/>
                        </IconButton> : null}
                </div>
            </Toolbar>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider/>
                <GridList cols={searchColumn} spacing={8} style={{margin: '2%'}}>
                    {result.map(r =>
                        <GridListTile
                            component={Link}
                            to={{
                                pathname: '/details',
                                state: {item: r}
                            }}>
                            <img src={r.image.src} alt={r.title}/>
                            <GridListTileBar
                                title={r.title}
                                subtitle={r.price + ' €'}
                                actionIcon={
                                    <IconButton className={classes.gridTileIcon}>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    )}
                </GridList>
            </Collapse>
        </AppBar>
    )
}

export default SearchBar