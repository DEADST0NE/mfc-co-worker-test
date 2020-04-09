import React from 'react'; 
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import './Employess.scss';
import TabContent from '../../сomponent/TabContent'; 
import TablesEmployees from '../../сomponent/tables/TablesEmployees';
import TablesBranches from '../../сomponent/tables/TablesBranches';
import TablesJobPositions from '../../сomponent/tables/TablesJobPositions';
import TablesSalaries from '../../сomponent/tables/TablesSalaries';
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
                        <TabContent table={<TablesJobPositions />} /> 
                    </Tab>
                    <Tab eventKey="contact2" title="Оклады" >
                        <TabContent table={<TablesSalaries />} /> 
                    </Tab>  
                </Tabs>  
            </div>
    )
}

export default Employees;