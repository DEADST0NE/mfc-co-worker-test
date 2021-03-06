import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

import s from './Header.module.scss'; 
import Logo from '../../img/mfc-icon.png'; 
import Form from 'react-bootstrap/Form';

const Header = () =>{
    return(
        <header className={s.header}>  
            <div className={s.headerLeft}>
                <NavLink to={`/`}>
                    <p> МОИ <span> документы</span> </p>
                    <img src={Logo} alt='MFC'/>  
                </NavLink>   
                <Button variant="primary">Новое обращение</Button>
                
                <Button variant="primary"><FontAwesomeIcon icon={ faHeadset } /> Консультация</Button>
                <div className={s.search}>
                    <Form.Control type="text" placeholder="Поиск" />
                </div>
                
            </div>

            <FontAwesomeIcon icon={ faUserAlt } size="2x" />
        </header>
    )
}

export default Header;