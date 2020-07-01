import ResponsiveLayout from "../ResponsiveLayout"
import ContentView from "./ContentView"
import React, {Component} from "react"
import {withStyles} from "@material-ui/core"
import db from "../Firebase/firebase-db"
import MyBanner from "./Banner"

const styles = theme => ({
    heroContent: {
        backgroundImage: 'url(https://newlondonrealestateinc.com/wp-content/uploads/2016/01/Closing-Background-2.jpg)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
        marginBottom: -30
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
            <div>
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
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Content)