import React from 'react';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../bll/routePaths';
import s from './styles.module.css'

const Header = () => {
    return (
        <div className={s.Header}>
            <NavLink className={s.navLink} to={routePaths.MAIN_Greeting}>Главная</NavLink>
            <NavLink className={s.navLink} to={routePaths.ALl_CANDIDATES}>Все кандидаты</NavLink>
        </div>
    );
};

export default Header;