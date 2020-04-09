import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import s from '../GlobalTables.module.scss';
const TablesSalaries = () => {
    const teatData=[
        {
            "id": 1,
            "jobPositionId": 7,
            "jobPositionName": "Тестовая должность",
            "salary": 100,
            "costMinute": 10,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-30T00:00:00",
            "dateStop": null,
            "comment": null
        },
        {
            "id": 2,
            "jobPositionId": 2,
            "jobPositionName": "Тестовая должность",
            "salary": 100,
            "costMinute": 10,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-30T00:00:00",
            "dateStop": null,
            "comment": null
        },
        {
            "id": 3,
            "jobPositionId": 2,
            "jobPositionName": "Должность",
            "salary": 100,
            "costMinute": 18,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-31T00:00:00",
            "dateStop": null,
            "comment": null
        }
    ]
    return (
        <table className={s.tableEmployees}> 
        <thead>
            <tr>
                <td>Сумма</td>
                <td>Стоимость минуты</td> 
                <td>Когда добавили</td>
                <td>Кто добавил</td>
                <td>Действия</td>
            </tr>
        </thead> 
        <tbody>
            {
                teatData.map( (item, index) => (
                    <tr key={index}> 
                        <td>{item.salary}</td>
                        <td>{item.costMinute}</td>
                        <td>{ new Date(Date.parse(item.dateStart)).toLocaleDateString() }</td>
                            <td>{ item.coefficient }</td>
                        <td>
                            <FontAwesomeIcon icon={ faEye } /> 
                            <FontAwesomeIcon icon={ faTrash } />
                        </td> 
                    </tr>  
                ))
            }
            
        </tbody>
    </table>
    )
}

export default TablesSalaries;