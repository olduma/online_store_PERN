import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { StarFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import styles from './DeviceItem.module.css';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(DEVICE_ROUTE + "/" + device.id);
    };

    return (
        <Card
            onClick={handleCardClick}
            className={`${styles.card} me-2 mt-3`}
            color="light"
        >
            <img
                alt={device.name}
                src={process.env.REACT_APP_API_URL + device.img}
                className={styles.image}
            />
            <CardBody className={`${styles.cardBody} text-center`}>
                <div className={styles.ratingContainer}>
                    <div className={styles.rating}>{device.rating}</div>
                    <div className={styles.star}>
                        <StarFill />
                    </div>
                </div>
                <CardTitle
                    style={{ color: "#3e77aa" }}
                    className={`${styles.cardTitle} mb-2`}
                    tag="h6"
                >
                    {device.name}
                </CardTitle>
                <CardSubtitle
                    style={{ color: "red" }}
                    className={`${styles.cardSubtitle} mt-2`}
                    tag="h6"
                >
                    {device.price + " грн"}
                </CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default DeviceItem;
