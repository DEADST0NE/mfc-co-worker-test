import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import s from '../GlobalTables.module.scss';
const TablesJobPositions = () => {
const testData = [
    {
        "id": 1,
        "name": "Оператор",
        "comment": null
    },
    {
        "id": 2,
        "name": "Курьер",
        "comment": null
    },
    {
        "id": 7,
        "name": "Редактирование должности",
        "comment": "Редактирование комментария к новой тестовой должности"
    }
]
    return (
        <table className={s.tableEmployees}> 
        <thead>
            <tr>
                <td>Наименование</td>
                <td>Кто добавил</td> 
                <td>Когда добавили</td>
                <td>Действия</td>
            </tr>
        </thead> 
        <tbody>
            {
                testData.map( (item, index) => (
                    <tr key={index}> 
                        <td>{item.name}</td>
                        <td>{item.smallName}</td>
                        <td>Нужно уточнить</td>  
                        <td>
                            <FontAwesomeIcon icon={ faPencilAlt } /> 
                            <FontAwesomeIcon icon={ faTrash } />
                        </td> 
                    </tr>  
                ))
            }
            
        </tbody>
    </table>
    )
}

export default TablesJobPositions;