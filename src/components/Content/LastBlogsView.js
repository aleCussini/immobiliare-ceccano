import React from 'react'
import Blog from './Blog'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"


const LastBlogsView = ({items, searchColumn, gridColumn}) => {
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"}>
            <GridList cols={gridColumn ? gridColumn : (width < 1088 ? 1 : 3)} spacing={8}>
                <GridListTile style={{height: "max-content"}}>
                    <Blog item={ {
                        "title": "Vendere Casa. Il giusto prezzo",
                        "content": "Oggi voglio parlarti di un aspetto importante che incontro (scontro) spesso quando, chiamato a fare consulenza, anche a prescindere dall'Incarico di mediazione, il Venditore mi chiede consigli sul prezzo da pubblicizzare.",
                        "link" : "blog1"
                    }}/>
                    <Blog item={ {
                        "title": "La Accettazione di Eredità",
                        "content": "Cosa è? Ha a che fare con il fatto che per la legge italiana chi eredita beni immobili (fabbricati e terreni) per ottenere la proprietà di questi beni deve Accettare l' Eredità.",
                        "link" : "blog2"
                    }}/>
                    <Blog item={ {
                        "title": "Proposta di Acquisto",
                        "content": "\"NON CI INTERESSA ANALIZZARE OGGI QUI IL FATTO CHE TU VOGLIA OFFRIRE UN PREZZO PIÙ BASSO DI QUELLO RICHIESTO, O CHE TU LA VOGLIA FARE VINCOLATA AL BUON ESITO DEL MUTUO, O ALTRI DETTAGLI ED ARGOMENTI CHE POTRANNO ESSERE TRATTATI IN UN ALTRO ARTICOLO, FORUM ETC...\"",
                        "link": "blog3"
                    }}/>
                </GridListTile>
            </GridList>
        </Container>
    )
}

export default LastBlogsView
