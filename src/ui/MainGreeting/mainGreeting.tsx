import React from 'react';
import s from './styles.module.css'
import Store from '../../bll/store'
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {routePaths} from "../../bll/routePaths";


const MainGreeting = observer(() => {
    return (
        <div className={s.Main}>
            <div>
                <h2>Hello guest.</h2>
                {Store.candidates.length === 0
                    ?
                    <h3>Loading ...</h3>
                    : <div>
                        <p>I am candidate {Store.candidates[0].name} {Store.candidates[0].surname} </p>
                        <p>I am candidate {Store.candidates[1].name} {Store.candidates[1].surname} </p>
                        <button>
                            <NavLink className={s.navLink} to={routePaths.ALl_CANDIDATES}>
                                Ознакомиться со всеми кандидатами </NavLink>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
})


export default MainGreeting;