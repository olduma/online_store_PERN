import React, {useEffect, useState} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {createType, fetchTypes} from "../../../http/deviceAPI";
import {setTypes} from "../../../slices/DeviceSlice";

const Categories = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
    }, [])

    const types = useSelector(state => state.device.types);
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState("")

    const addCategory = () => {
        createType({name: value}).then(data => setValue(""))
        setModal(!modal);
    }

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="mb-2 mt-2 d-flex justify-content-evenly">
                <h5 className="text-center mb-3">Категорії товарів</h5>
                <div>
                    <Button
                        onClick={toggle}
                        color="primary"
                    >
                        Добавити категорію
                    </Button>
                </div>
            </div>
            <Table bordered hover>
                <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Parent
                    </th>
                    <th>
                        URL
                    </th>
                    <th>
                        Кількість товарів
                    </th>
                    <th>
                        Активний
                    </th>
                </tr>
                </thead>
                <tbody>
                {types.map(type => (
                    <tr key={type.id}>
                        <th scope="row">
                            {type.id}
                        </th>
                        <td>
                            {type.name}
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                        {/* Add the remaining columns here */}
                    </tr>
                ))}
                </tbody>
            </Table>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Добавити категорію</ModalHeader>
                    <ModalBody>
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Введіть назву категорії"}
                        >
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={addCategory}>
                            Добавити
                        </Button>{' '}
                        <Button color="danger" onClick={toggle}>
                            Закрити
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
};

export default Categories;
