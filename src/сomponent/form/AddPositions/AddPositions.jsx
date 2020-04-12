import React from 'react';
import Form from 'react-bootstrap/Form';   
import { Col } from 'react-bootstrap';

const AddPositions = () => {
    return (
        <Form>
            <Form.Group> 
                <Form.Row>
                    <Col sm="4">
                        <Form.Label> Наименование должности </Form.Label>
                    </Col>
                    <Col sm="8">
                        <Form.Control  required type="text" placeholder="Наименование должности" /> 
                    </Col>
                </Form.Row>
            </Form.Group> 

            <Form.Group> 
                <Form.Row>
                    <Col sm="4">
                        <Form.Label> Комментарий </Form.Label>
                    </Col>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Комментарий" /> 
                    </Col>
                </Form.Row>
            </Form.Group> 

            <Form.Group> 
                <Form.Row>
                    <Col sm="4">
                        <Form.Label> Сотрудник добавивщий запись </Form.Label>
                    </Col>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Сотрудник добавивщий запись" /> 
                    </Col>
                </Form.Row>
            </Form.Group> 
        </Form>
    )
}

export default AddPositions;