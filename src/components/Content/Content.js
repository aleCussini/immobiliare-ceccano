import ResponsiveLayout from "../ResponsiveLayout"
import ContentView from "./ContentView"
import React, {Component} from "react"
import {withStyles} from "@material-ui/core"
import db from "../Firebase/firebase-db"
import MyBanner from "./Banner"

const styles = theme => ({
    heroContent: {
        backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5cd10e3e797f7404070443e1/1557509160211-KQ8OL2E74DXJ5BQ004Y6/ke17ZwdGBToddI8pDm48kN2LnfnsQi8dCgeHU4sBN4IUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dk-ww5vauMhltFjP34Qf3O-2Ir-AsOBRB_scpiZgK3WeoRwB-dUGsSquCnVTFQcaRg/4.jpg?format=2500w)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
    },
    searchForm: {
        marginLeft: theme.spacing(6),
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
                        <ContentView items={this.state.items} searchColumn={2} gridColumn={1}/>
                    )}
                />
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Content)