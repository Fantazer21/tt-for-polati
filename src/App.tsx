import React, {useEffect,} from 'react';
import './App.css';
import Header from "./ui/Header/header";
import Main from "./ui/Main/main";
import Store from './bll/store'

function App() {

    useEffect(() => {
        Store.getCandidates()
    }, [])
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
