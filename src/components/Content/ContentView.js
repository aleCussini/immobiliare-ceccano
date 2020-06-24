import React from 'react'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import SearchBar from "./SearchBar"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

const ContentView = ({items, searchColumn, gridColumn}) => {
    let sortedItems = items.sort((a, b) => (a.update < b.update) ? 1 : ((b.update < a.update) ? -1 : 0)) //order by update desc
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"}>
            <SearchBar items={items} searchColumn={searchColumn ? searchColumn : 4}/>
            <GridList cols={gridColumn ? gridColumn : (width < 1088 ? 2 : 4)} spacing={8}>
                {sortedItems.slice(0, 4).map((item) => (
                    <GridListTile style={{height: "max-content"}}>
                        <Tile key={item.title} item={item}/>
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    )
}

export default ContentView
