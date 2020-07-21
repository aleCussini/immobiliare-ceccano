import ResponsiveLayout from "../ResponsiveLayout"
import ContentView from "./ContentView"
import React, {Component} from "react"
import {withStyles} from "@material-ui/core"
import db from "../Firebase/firebase-db"
import MyBanner from "./Banner"
import Quote from './Quote'
import LastBlogsView from './LastBlogsView'

const styles = theme => ({
    heroContent: {
        //backgroundImage: 'url(https://newlondonrealestateinc.com/wp-content/uploads/2016/01/Closing-Background-2.jpg)',
        backgroundImage: 'url(https://www.sossystems.co.uk/wp-content/uploads/quote-background-03.png)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
        marginBottom: -30
    },
    quoteContent: {
        backgroundImage: 'url(https://www.sossystems.co.uk/wp-content/uploads/quote-background-03.png)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
        marginTop: 30
    },
    background: {
        backgroundImage: 'url(http://www.mediateamsoftware.com/images/0a5d5bcfe0be52c3c246b51620671a7e.jpg)',
        backgroundRepeat: "repeat"
    }
})

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {items: []}
    }

    componentDidMount() {
        let dataRef = db.ref("/data")
        dataRef.on("value", snapshotData => {
            let allItems = []
            snapshotData.forEach(snapshot => {
                allItems.push(snapshot.val())
            })
            this.setState({items: allItems})
        })
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.background}>
                <div className={classes.heroContent}><MyBanner/></div>
                <ResponsiveLayout
                    breakPoint={767}
                    renderDesktop={() => (
                        <ContentView items={this.state.items}/>
                    )}
                    renderMobile={() => (
                        <ContentView items={this.state.items} searchColumn={1} gridColumn={1} containerWidth={"xs"}/>
                    )}
                />
                <div className={classes.quoteContent}><Quote/></div>
                <ResponsiveLayout
                    breakPoint={767}
                    renderDesktop={() => (
                        <LastBlogsView/>
                    )}
                    renderMobile={() => (
                        <LastBlogsView gridColumn={1}/>
                    )}
                />
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Content)