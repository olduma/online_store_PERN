import React, {useEffect} from 'react';
import {Col, Container, Row} from "reactstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {useDispatch, useSelector} from "react-redux";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {setBrands, setDevices, setTotalCount, setTypes} from "../slices/DeviceSlice";
import Pages from "../components/Pagination/Pages";

const Shop = () => {

    const dispatch = useDispatch()
    const device = useSelector(state => state.device)

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
        fetchDevices(null, null, 1, 2).then(data => {
            dispatch(setDevices(data.rows))
            dispatch(setTotalCount(data.count))
            console.log(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
            dispatch(setDevices(data.rows))
            dispatch(setTotalCount(data.count))
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;