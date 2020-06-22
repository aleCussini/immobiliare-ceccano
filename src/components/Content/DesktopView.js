import React from 'react'
import classNames from 'classnames'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import SearchBar from "./SearchBar"

const DesktopView = ({items}) => {
    let sortedItems = items.sort((a, b) => (a.update < b.update) ? 1 : ((b.update < a.update) ? -1 : 0)) //order by update desc
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"}>
            <SearchBar items={items}/>
            <div
                className={classNames('tile is-ancestor', {
                    'is-vertical': width > 414 && width < 1088
                })}
            >
                {sortedItems.slice(0,4).map((item) => (
                    <Tile key={item.title} item={item}/>
                ))}
            </div>
        </Container>
    )
}

export default DesktopView
