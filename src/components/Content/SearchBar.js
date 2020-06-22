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
import clsx from "clsx"
import {ExpandMore} from "@material-ui/icons"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import {Link} from "react-router-dom"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}))


const SearchBar = ({items}) => {
    const [expanded, setExpanded] = useState(false)
    const [result, setResult] = useState([])
    const [scope, setScope] = useState('')
    const [city, setCity] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    function search() {
        if (city) {
            items = items.filter(function (item) {
                return item.title === city // cambiare assolutamente title con city nell'ogetto firebase
            })
        }
        if (scope)
            items = items.filter(function (item) {
                return item.scope === scope
            })
        if (minPrice)
            items = items.filter(function (item) {
                return item.price > minPrice
            })
        if (minPrice)
            items = items.filter(function (item) {
                return item.price < maxPrice
            })
        setResult(items)
        setExpanded(true)
    }

    const classes = useStyles()
    return (
        // <Container maxWidth={"md"}>
        <AppBar position="static" color={"white"} style={{marginBottom: '5%'}}>
            <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <FormControl className={classes.formControl}
                                 variant={"outlined"}>
                        <InputLabel id="type-select-label">Per?</InputLabel>
                        <Select labelId="type-select-label" onChange={e => setScope(e.target.value)}
                                children={[
                                    <MenuItem value={'sale'}>Comprare</MenuItem>,
                                    <MenuItem value={'rent'}>Affittare</MenuItem>
                                ]}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}
                                 variant={"outlined"}>
                        <InputLabel id="comune-select-label">Comune</InputLabel>
                        <Select labelId="comune-select-label" onChange={e => setCity(e.target.value)}
                                children={[
                                    <MenuItem value={'Roma'}>Roma</MenuItem>,
                                    <MenuItem value={'Firenze'}>Firenze</MenuItem>,
                                    <MenuItem value={'Bari'}>Bari</MenuItem>
                                ]}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Prezzo Min."} inputMode={"numeric"}
                                   onChange={e => setMinPrice(e.target.value)}
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Prezzo Max."} inputMode={"numeric"}
                                   onChange={e => setMaxPrice(e.target.value)}
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                </div>
                <Button onClick={() => search()}>Cerca</Button>
            </Toolbar>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider/>
                <IconButton
                    onClick={() => setExpanded(false)}
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}>
                    <ExpandMore/>
                </IconButton>
                <List>
                    {result.map(r =>
                        <ListItem component={Link}
                                  to={{
                                      pathname: '/details',
                                      state: {item: r}
                                  }}>
                            <ListItemAvatar>
                                <Avatar src={r.image} variant={"rounded"}/>
                            </ListItemAvatar>

                            <ListItemText
                                primary={r.title}
                                secondary={r.scope === 'sale' ? r.price + ' €' : r.price + ' €/mese'}
                            />
                            {r.scope === 'sale' ? <AttachMoneyIcon/> : <PeopleAltIcon/>}
                        </ListItem>
                    )}
                </List>
            </Collapse>
        </AppBar>
        // </Container>
    )
}

export default SearchBar