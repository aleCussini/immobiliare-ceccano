import React from 'react'
import Tile from './Tile'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"


const LastBlogsView = ({items, searchColumn, gridColumn}) => {
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"}>
            <GridList cols={gridColumn ? gridColumn : (width < 1088 ? 2 : 4)} spacing={8}>
            <GridListTile style={{height: "max-content"}}>
                        <Tile item={ {
    "title": "Roma",
    "price": "",
    "image": "https://images-1.casa.it/360x265/listing/8908e17e915f91fc063069939af3d8e5",
    "content": "Roma! I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum is a choke artist. It chokes!"
  }}/>
                    </GridListTile>
            </GridList>
        </Container>
    )
}

export default LastBlogsView
