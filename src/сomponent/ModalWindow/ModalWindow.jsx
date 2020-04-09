import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import s from './ModalWindow.module.scss';

const ModalEmployess = ({ show, onClose, onSacses, title='Добавить', body, titleBt1='Закрыть', titleBt2='Добавить'}) => { 
    return( 
        <Modal show={show} onHide={onClose}>
            <div className={s.modalWindow}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{ title }</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {body}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={ onClose }>{ titleBt1 }</Button>
                        <Button variant="primary" onClick={ onSacses }>{ titleBt2 }</Button>
                    </Modal.Footer>
                </Modal.Dialog> 
            </div>
        </Modal>
    )
}

export default ModalEmployess;