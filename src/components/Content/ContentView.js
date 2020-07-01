import React from 'react'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import SearchBar from "./SearchBar"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Typography from "@material-ui/core/Typography"

const ContentView = ({items, searchColumn, gridColumn, containerWidth}) => {
    let sortedItems = items.sort((a, b) => (a.update < b.update) ? 1 : ((b.update < a.update) ? -1 : 0)) //order by update desc
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={containerWidth ? containerWidth : (width < 1088 ? "sm" : "lg")}>
            <SearchBar items={items} searchColumn={searchColumn ? searchColumn : 4}/>
            <Typography variant="h4" align="left" style={{marginBottom: '1%'}}>
                Utilmi Annunci
            </Typography>
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
