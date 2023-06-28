import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    Button,
    Dropdown, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from 'reactstrap';
import {
    setBrands,
    setDevices,
    setSelectedBrand,
    setSelectedType,
    setTotalCount,
    setTypes
} from "../../../slices/DeviceSlice";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../../http/deviceAPI";

const List = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
        fetchDevices(null, null, null, null).then(data => {
            dispatch(setDevices(data.rows))
            dispatch(setTotalCount(data.count))
            console.log(data.count)
        })
    }, [])

    const devices = useSelector(state => state.device.devices);
    const brands = useSelector(state => state.device.brands);
    const types = useSelector(state => state.device.types);
    const selectedType = useSelector(state => state.device.selectedType);
    const selectedBrand = useSelector(state => state.device.selectedBrand);

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [code, setCode] = useState(0)
    const [file, setFile] = useState("1.jpg")
    const [short, setShort] = useState("")
    const [full, setFull] = useState("")

    const [modal, setModal] = useState(false);
    const [dropdownBrandsOpen, setDropdownBrandsOpen] = useState(false);
    const [dropdownTypesOpen, setDropdownTypesOpen] = useState(false);
    const toggleBrands = () => setDropdownBrandsOpen((prevState) => !prevState);
    const toggleTypes = () => setDropdownTypesOpen((prevState) => !prevState);
    const toggle = () => setModal(!modal);

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", String(price))
        formData.append("img", file)
        formData.append("brandId", selectedBrand.id)
        formData.append("typeId", selectedType.id)
        createDevice(formData).then(data => setModal(!modal))
    }

    return (
        <>
            <div className="mb-2 mt-2 d-flex justify-content-evenly">
                <h5 className="text-center mb-3">Список товарів</h5>
                <div>
                    <Button
                        onClick={toggle}
                        color="primary"
                    >
                        Добавити товар
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
                        Ціна
                    </th>
                    <th>
                        Рейтинг
                    </th>
                </tr>
                </thead>
                <tbody>
                {devices.map(device => (
                    <tr key={device.id}>
                        <th scope="row">
                            {device.id}
                        </th>
                        <td>
                            {device.name}
                        </td>
                        <td>
                            {device.price}
                        </td>
                        <td>
                            {device.rating}
                        </td>
                        {/* Add the remaining columns here */}
                    </tr>
                ))}
                </tbody>
            </Table>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Добавити товар</ModalHeader>
                    <ModalBody>
                        <div className="d-flex mb-2">
                            <Dropdown isOpen={dropdownBrandsOpen} toggle={toggleBrands} direction={"down"}>
                                <DropdownToggle caret>{selectedBrand.name || "Оберіть бренд"}</DropdownToggle>
                                <DropdownMenu>
                                    {brands.map(brand => (
                                        <DropdownItem
                                            onClick={() => dispatch(setSelectedBrand(brand))}
                                            key={brand.id}>
                                            {brand.name}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="d-flex mb-2">
                            <Dropdown isOpen={dropdownTypesOpen} toggle={toggleTypes} direction={"down"}>
                                <DropdownToggle caret>{selectedType.name || "Оберіть категорію"}</DropdownToggle>
                                <DropdownMenu>
                                    {types.map(type => (
                                        <DropdownItem
                                            onClick={() => dispatch(setSelectedType(type))}
                                            key={type.id}>
                                            {type.name}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <Input className="d-flex mb-2"
                               value={name}
                               onChange={e => setName(e.target.value)}
                               type={"text"}
                               placeholder={"Введіть назву товару"}></Input>
                        <Input className="d-flex mb-2"
                               value={price}
                               onChange={e => setPrice(Number(e.target.value))}
                               type={"number"}
                               placeholder={"Введіть ціну, грн"}></Input>
                        <Input className="d-flex mb-2"
                               value={code}
                               onChange={e => setCode(Number(e.target.value))}
                               type={"number"}
                               placeholder={"Код товару"}></Input>
                        <Input className="d-flex mb-2"
                               onChange={selectFile}
                               type={"file"}
                               placeholder={"Фото"}></Input>
                        <Input className="d-flex mb-2"
                               value={short}
                               onChange={e => setShort(e.target.value)}
                               type={"textarea"}
                               placeholder={"Короткий опис"}></Input>
                        <Input className="d-flex mb-2"
                               value={full}
                               onChange={e => setFull(e.target.value)}
                               type={"textarea"}
                               placeholder={"Повний опис"}></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={addDevice}>
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

export default List;
