import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'; 

import Spiner from '../../../сomponent/Spiner';
import Error from '../../../сomponent/Error';
import { getJobPosition } from '../../../redux/jobPosition/actions';
import s from '../GlobalTables.module.scss';
const TablesJobPositions = ({ getJobPosition, jobPosition, loading, error}) => {

    useEffect(() => { 
        getJobPosition();
    },[getJobPosition]);

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
    if(loading){
        return <Spiner />
    }
    if(error){
        return <Error />
    }

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

const mapStateToProps = (state) => ({
    jobPosition: state.reducerJobPosition.jobPosition,
    loading: state.reducerJobPosition.loading,
    error: state.reducerJobPosition.error,
})  
    
const mapDispatchToProps = { 
    getJobPosition, 
}

export default connect(mapStateToProps, mapDispatchToProps)(TablesJobPositions);
