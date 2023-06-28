import React from 'react';
import {CreditCard2Back, Truck} from "react-bootstrap-icons";
import styles from "./Delivery.module.css"

const deliverMethods = [
    {id:1, name: "Nova Poshta"},
    {id:2, name: "Ukrposhta"},
    {id:3, name: "Meest Express"},
    {id:4, name: "Justin"},
    {id:5, name: "Delivery Auto"}
]

const paymentMethods = [
    {id:1, name: "Cash"},
    {id:2, name: "Bank transfer"},
    {id:3, name: "Credit card"},
    {id:4, name: "Google Pay"},
    {id:5, name: "Privat24"}
]

const Delivery = () => {
    return (
        <div className={styles.delivery}>
            <div>
                <Truck size={30} color="grey" className="me-2"/>
                DELIVERY
                <div className="mt-2 d-flex flex-column">
                    {deliverMethods.map(method => {
                        return (
                            <ul key={method.id} className="mb-0">{method.name}</ul>
                        )
                    })}
                </div>
            </div>
            <hr className="mt-4 mb-3"/>
            <div>
                <CreditCard2Back size={30} color="grey" className="me-2"/>
                PAYMENT
                <div className="mt-2 d-flex flex-column">
                    {paymentMethods.map(method => {
                        return (
                            <ul key={method.id} className="mb-0">{method.name}</ul>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Delivery;

