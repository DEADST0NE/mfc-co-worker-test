import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import s from '../GlobalTables.module.scss';

const TablesBranches = () => {

    const testData = [
        {
            "id": 1,
            "name": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "smallName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "number": null,
            "mnemo": "MAHK",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 13543,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": false,
            "tosp": null,
            "countPopulation": null
        },
        {
            "id": 2,
            "name": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "smallName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "number": null,
            "mnemo": "MHSO",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 30150,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": false,
            "tosp": null,
            "countPopulation": null
        },
        {
            "id": 3,
            "name": "Новое наименование филиала",
            "smallName": "Новое краткое наименование филиала",
            "number": null,
            "mnemo": "Нмнемоника",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 0,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": null,
            "tosp": null,
            "countPopulation": null
        }
    ]

    return(
        <table className={s.tableEmployees}> 
            <thead>
                <tr>
                    <td>Мнемоника</td>
                    <td>Филиал <FontAwesomeIcon icon={ faFilter } /></td> 
                    <td>Адрес <FontAwesomeIcon icon={ faFilter } /></td>
                    <td>Действия</td>
                </tr>
            </thead> 
            <tbody>
                {
                    testData.map( (item, index) => (
                        <tr key={index}> 
                            <td>{item.mnemo}</td>
                            <td>{item.smallName}</td>
                            <td>Нужно уточнить</td>  
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

export default TablesBranches;