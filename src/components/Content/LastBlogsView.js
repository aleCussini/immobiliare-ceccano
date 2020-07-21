import React from 'react'
import Blog from './Blog'
import {useWindowDimensions} from '../WindowDimensionsProvider'
import Container from "@material-ui/core/Container"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Typography from "@material-ui/core/Typography"

const blogPosts = [
    <Blog item={{
        "title": "Vendere Casa. Il giusto prezzo",
        "content": "Oggi voglio parlarti di un aspetto importante che incontro (scontro) spesso quando, chiamato a fare consulenza, anche a prescindere dall'Incarico di mediazione, il Venditore mi chiede consigli sul prezzo da pubblicizzare.",
        "link": "https://immobiliarestudioceccano.blogspot.com/2020/07/vendere-casa-perche-partiamo-alti-poi.html"
    }}/>,
    <Blog item={{
        "title": "La Accettazione di Eredità",
        "content": "Cosa è? Ha a che fare con il fatto che per la legge italiana chi eredita beni immobili (fabbricati e terreni) per ottenere la proprietà di questi beni deve Accettare l' Eredità.",
        "link": "https://immobiliarestudioceccano.blogspot.com/2020/06/vendi-una-casa-ereditata-occhio-spese.html"
    }}/>,
    <Blog item={{
        "title": "Proposta di Acquisto",
        "content": "\"NON CI INTERESSA ANALIZZARE OGGI QUI IL FATTO CHE TU VOGLIA OFFRIRE UN PREZZO PIÙ BASSO DI QUELLO RICHIESTO, O CHE TU LA VOGLIA FARE VINCOLATA AL BUON ESITO DEL MUTUO, O ALTRI DETTAGLI ED ARGOMENTI CHE POTRANNO ESSERE TRATTATI IN UN ALTRO ARTICOLO, FORUM ETC...\"",
        "link": "https://immobiliarestudioceccano.blogspot.com/2019/04/questa-proposta-di-acquisto-che-tutti.html"
    }}/>
]

const LastBlogsView = ({items, searchColumn, gridColumn}) => {
    const {width} = useWindowDimensions()
    return (
        <Container maxWidth={"lg"} style={{marginTop: "5%"}}>
            <Typography variant="h4" align="left" style={{marginBottom: '1%'}}>
                Post in Evidenza
            </Typography>
            <GridList cols={gridColumn ? gridColumn : (width < 1088 ? 1 : 3)} spacing={8}>
                {
                    blogPosts.map(bp => (
                        <GridListTile style={{height: "max-content"}}>
                            {bp}
                        </GridListTile>
                    ))
                }
            </GridList>
        </Container>
    )
}

export default LastBlogsView
