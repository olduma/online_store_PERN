import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from 'reactstrap';
import {createBrand, fetchBrands} from "../../../http/deviceAPI";
import {setBrands} from "../../../slices/DeviceSlice";

const Brands = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchBrands().then(data => dispatch(setBrands(data)))
    }, [])

    const brands = useSelector(state => state.device.brands);
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState("")

    const addBrand = () => {
        createBrand({name: value}).then(data => setValue(""))
        setModal(!modal);
    }
    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="mb-2 mt-2 d-flex justify-content-evenly">
                <h5 className="text-center mb-3">Список брендів</h5>
                <div>
                    <Button
                        onClick={toggle}
                        color="primary"
                    >
                        Добавити бренд
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
                </tr>
                </thead>
                <tbody>
                {brands.map(brand => (
                    <tr key={brand.id}>
                        <th scope="row">
                            {brand.id}
                        </th>
                        <td>
                            {brand.name}
                        </td>
                        {/* Add the remaining columns here */}
                    </tr>
                ))}
                </tbody>
            </Table>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Добавити бренд</ModalHeader>
                    <ModalBody>
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Введіть назву бренду"}
                        >
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={addBrand}>
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

export default Brands;
