import React from 'react';
import {Route, Routes} from "react-router-dom";
import { routePaths } from '../../bll/routePaths';
import MainGreeting from "../MainGreeting/mainGreeting";
import AllCandidates from "../AllCandidates/allCandidates";

const Main = () => {
    return (
        <Routes>
            <Route path={routePaths.MAIN_Greeting} element={<MainGreeting/>}/>
            <Route path={routePaths.ALl_CANDIDATES} element={<AllCandidates/>}/>
        </Routes>
    );
};

export default Main;