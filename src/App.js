import React from 'react'
import Content from './components/Content'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import data_old from './data.json'
import data from './components/Firebase/fb-function.js'

const App = () => {
    return (
        <WindowDimensionsProvider>
            <Content items={data}/>
        </WindowDimensionsProvider>
    );
}

export default App