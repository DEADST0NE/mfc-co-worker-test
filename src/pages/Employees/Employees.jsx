import React from 'react'; 
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import './Employess.scss';
import TabContent from '../../сomponent/TabContent'; 
import TablesEmployees from '../../container/tables/TablesEmployees';
import TablesBranches from '../../container/tables/TablesBranches';
import TablesJobPositions from '../../container/tables/TablesJobPositions';
import TablesSalaries from '../../container/tables/TablesSalaries';
import AddPositions from '../../сomponent/form/AddPositions';

const Employees = () => {
    return (
            <div className='employees'>
                <Tabs defaultActiveKey="employees" id="uncontrolled-tab-example">
                    <Tab eventKey="employees" title="Сотрудники">
                        <TabContent 
                            modalName={'Добавить(Редактировать)'} 
                            table={<TablesEmployees />} /
                        > 
                    </Tab>
                    <Tab eventKey="profile" title="Филиалы">
                        <TabContent table={<TablesBranches />} /> 
                    </Tab>
                    <Tab eventKey="contact" title="Должности" >
                        <TabContent 
                        modalName={'Добавить должность'}
                        modalBody={<AddPositions />}
                        table={<TablesJobPositions />} /> 
                    </Tab>
                    <Tab eventKey="contact2" title="Оклады" >
                        <TabContent table={<TablesSalaries />} /> 
                    </Tab>  
                </Tabs>  
            </div>
    )
}

export default Employees;