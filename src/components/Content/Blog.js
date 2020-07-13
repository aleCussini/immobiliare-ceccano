import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}))

function Blog({item}) {
    const classes = useStyles()
    console.log(item)
    return (
<Link to={item.link}>Google
            <Card variant={"outlined"} style={{height: "max-content"}}>  
                <CardHeader
                    title={item.title}
                />
                <CardContent>
                    {item.content}
                </CardContent>
            </Card>
        </Link>
    )
}

export default Blog
