import React,  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

import ModalWindow from '../ModalWindow';
import s from './TabContent.module.scss';

const TabContent = ({ table, modalName='Добавить', modalBody, }) => {

    const [showModal, setShowModail] = useState(false);

    return ( 
        <div className={s.tabEmployees}>
            <div className={s.header}> 
                <div className={s.searchBLeft}>
                    <InputGroup>
                        <FormControl placeholder="Строка поиска" aria-label="Строка поиска" aria-describedby="basic-addon2" />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Поиск</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div> 
                <Button variant="primary" onClick={ ()=>setShowModail(true) }>Добавить</Button>
            </div>  
            { table }
            <ModalWindow title={ modalName } body={modalBody} show={showModal} onClose={ ()=>setShowModail(false) } />
        </div>
    )
}

export default TabContent;