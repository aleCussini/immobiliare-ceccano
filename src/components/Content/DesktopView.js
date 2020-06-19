import React, {useState} from 'react'
import classNames from 'classnames'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles"
import Collapse from "@material-ui/core/Collapse"
import db from "../Firebase/firebase-db"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}))

const SearchBar = () => {
    const [expanded, setExpanded] = useState(false)
    const [result, setResult] = useState([])

    function search() {
        db.ref("/data").on("value", snapshotData => {
            let allItems = []
            snapshotData.forEach(snapshot => {
                allItems.push(snapshot.val())
            })
            setResult(allItems)
            setExpanded(!expanded)
        })
    }

    const classes = useStyles()
    return (
        <AppBar position="static" color={"white"} style={{marginBottom: '2%'}}>
            <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <FormControl className={classes.formControl}
                                 variant={"outlined"}>
                        <InputLabel id="type-select-label">Per?</InputLabel>
                        <Select labelId="type-select-label"
                                children={[
                                    <MenuItem value={10}>Comprare</MenuItem>,
                                    <MenuItem value={20}>Vendere</MenuItem>,
                                    <MenuItem value={30}>Affittare</MenuItem>
                                ]}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}
                                 variant={"outlined"}>
                        <InputLabel id="comune-select-label">Comune</InputLabel>
                        <Select labelId="comune-select-label"
                                children={[
                                    <MenuItem value={10}>Roma</MenuItem>,
                                    <MenuItem value={20}>Firenze</MenuItem>,
                                    <MenuItem value={30}>Bari</MenuItem>
                                ]}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Prezzo Min."} inputMode={"numeric"}
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField label={"Prezzo Max."} inputMode={"numeric"}
                                   variant={"outlined"}
                                   style={{width: 120}}/>
                    </FormControl>
                </div>
                <Button onClick={() => search()}>Cerca</Button>
            </Toolbar>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider/>
                <GridList cols={4} style={{margin: '2%'}}>
                    {
                        result.map(r =>
                            <GridListTile key={r.title}>
                                <Tile item={r}/>
                            </GridListTile>)

                    }
                </GridList>
            </Collapse>
        </AppBar>
    )
}

const DesktopView = ({items}) => {
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"}>
            <SearchBar/>
            <div
                className={classNames('tile is-ancestor', {
                    'is-vertical': width > 414 && width < 1088
                })}
            >
                {items.map((item) => (
                    <Tile key={item.title} item={item}/>
                ))}
            </div>
        </Container>
    )
}

export default DesktopView
