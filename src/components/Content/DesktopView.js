import React from 'react'
import classNames from 'classnames'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"

const DesktopView = ({items}) => {
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"}>
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
