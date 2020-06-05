import React from 'react'
import Content from './components/Content'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import data from './data.json'

const App = () => {
    return (
        <WindowDimensionsProvider>
            <Content items={data}/>
        </WindowDimensionsProvider>
    );
}

export default App
