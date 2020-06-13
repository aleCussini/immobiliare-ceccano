import React from 'react'
import classNames from 'classnames'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'

const DesktopView = ({items}) => {
    const {width} = useWindowDimensions()
    return (
        <div className='section'>
            <div
                className={classNames('tile is-ancestor', {
                    'is-vertical': width > 414 && width < 1088
                })}
            >
                {items.map((item) => (
                    <Tile key={item.title} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default DesktopView
