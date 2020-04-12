import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlay, faPause, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import StatusImg from '../../../img/StatusImg';
import s from '../GlobalTables.module.scss';
const TablesEmployees = () => {

    let TestData = [
        {
            "employeeId": 22,
            "officeName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "employeeName": "Тестов Тест Тестович",
            "employeeJobPositionName": "Оператор",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": 23,
            "officeName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "employeeName": "Керимгаджиев Абдулмукмин Абдулмуслимович",
            "employeeJobPositionName": "Оператор",
            "employeeStatusId": 4,
            "employeeStatusName": "Уволен",
            "employeeIsActiv": true
        },
        {
            "employeeId": 26,
            "officeName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "employeeName": "Тунгатаров Вазирхан Климбекович",
            "employeeJobPositionName": "Курьер",
            "employeeStatusId": 3,
            "employeeStatusName": "Отключен",
            "employeeIsActiv": false
        }
    ];

    return (
    <table className={s.tableEmployees}> 
        <thead>
            <tr>
                <td>Филиалы <FontAwesomeIcon icon={ faFilter } /></td>
                <td>Сотрудники <FontAwesomeIcon icon={ faFilter } /></td> 
                <td>Дожности <FontAwesomeIcon icon={ faFilter } /></td>
                <td>Статус</td> 
                <td>Активность</td>
                <td>Действия</td>
            </tr>
        </thead> 
        <tbody>
            {
                TestData.map( (item, index) => (
                    <tr key={index}> 
                        <td>{item.officeName}</td>
                        <td>{item.employeeName}</td>
                        <td>{item.employeeJobPositionName}</td>
                        <td><StatusImg id={ item.employeeStatusId } /></td>
                        <td>{ item.employeeIsActiv ? <FontAwesomeIcon icon={ faPlay } color='green'/> 
                                                    : <FontAwesomeIcon icon={ faPause } color='red'/> }</td>
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

export default TablesEmployees;