import React from 'react';
import {Image} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons";
import styles from "./Modal.module.css"

function ModalWindow({img, modalIsOpen, toggleModal}) {

    const handleImageClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div>
            {modalIsOpen && (
                <div className={styles.imagePopupContainer} onClick={toggleModal}>
                    <div className={styles.imagePopup}>
                        <Image className={styles.img}
                               src={img} fluid
                               onClick={handleImageClick}
                        />
                        <button
                            className={styles.button} onClick={toggleModal}>
                            <XCircle size={30}/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalWindow;