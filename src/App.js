import React from 'react'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import {BrowserRouter} from "react-router-dom"
import Home from "./components/Content/Home"

const App = () => {
    return (
        <BrowserRouter>
            <WindowDimensionsProvider>
                <Home/>
            </WindowDimensionsProvider>
        </BrowserRouter>
    )
}

export default App