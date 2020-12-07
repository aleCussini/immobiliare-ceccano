import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Link from "@material-ui/core/Link"

// const useStyles = makeStyles((theme) => ({
//     link: {
//         display: 'flex',
//     },
//     icon: {
//         marginRight: theme.spacing(0.5),
//         width: 20,
//         height: 20,
//     },
// }))

function Blog({item}) {
    return (
        <Link href={item.link}>
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
