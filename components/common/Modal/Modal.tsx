import React from "react";
import {Button, Modal} from "react-bootstrap";
import {modalType} from "./type";
import styles from "./Modal.module.scss";

const Modals: React.FC<modalType> = (
    {
        title,
        description,
        firstButtonTitle,
        secondButtonTitle,
        secondButtonAction,
        firstButtonAction,
        onCloseModal,
        show
    }) => {
    return (
        <Modal
            show={show}
            onHide={onCloseModal}
            backdrop="static"
            keyboard={false}
            className={styles.modal}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-danger" onClick={firstButtonAction}>{firstButtonTitle}</Button>
                    <Button variant="danger" onClick={secondButtonAction}>{secondButtonTitle}</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default Modals