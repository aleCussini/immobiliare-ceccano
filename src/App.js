import React from 'react'
import Content from './components/Content'
import WindowDimensionsProvider from './components/WindowDimensionsProvider'
import firebase from "./FirebaseConfig";

const App = () => {
    const articles = firebase.firestore().collectionGroup("real-estate-pd");
    console.log("Articoli:  ", articles)
    return (
        <WindowDimensionsProvider>
            <Content items={articles}/>
        </WindowDimensionsProvider>
    );
}

export default App
